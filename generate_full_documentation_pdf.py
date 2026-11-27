from pathlib import Path
from html import escape
from math import sqrt
import re
from urllib.parse import urlsplit

from bs4 import BeautifulSoup, NavigableString
from markdown import markdown
from reportlab.graphics.shapes import Drawing, Rect, String
from reportlab.lib import colors
from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer, ListFlowable, Table, TableStyle, PageBreak, KeepTogether
from reportlab.platypus.tableofcontents import TableOfContents

ROOT = Path(__file__).resolve().parent
DOCS_DIR = ROOT / 'docs'
OUTPUT_PATH = ROOT / 'dokumentasi-komprehensif-corporate.pdf'
FONT_DIR = DOCS_DIR / 'public' / 'fonts'
PAGE_MARGIN = 18 * mm
PIXEL_TO_POINT = 0.75
BODY_FONT_SIZE = 16 * PIXEL_TO_POINT
BODY_LEADING = BODY_FONT_SIZE * 1.6
PARAGRAPH_SPACE_AFTER = 16 * PIXEL_TO_POINT
TABLE_FONT_SIZE = 14 * PIXEL_TO_POINT
TABLE_LEADING = TABLE_FONT_SIZE * 1.6
TABLE_CONTAINER_WIDTH = A4[0] - 2 * PAGE_MARGIN
TABLE_ROW_MIN_HEIGHT = 44 * PIXEL_TO_POINT
TABLE_HEADER_MIN_HEIGHT = 48 * PIXEL_TO_POINT


def register_fonts():
    font_files = {
        'Inter': FONT_DIR / 'Inter-Regular.ttf',
        'Inter-Bold': FONT_DIR / 'Inter-Bold.ttf',
    }
    for font_name, font_path in font_files.items():
        if not font_path.is_file():
            raise FileNotFoundError(f'File font Inter tidak ditemukan: {font_path}')
        if font_name not in pdfmetrics.getRegisteredFontNames():
            pdfmetrics.registerFont(TTFont(font_name, str(font_path)))
    pdfmetrics.registerFontFamily(
        'Inter',
        normal='Inter',
        bold='Inter-Bold',
        italic='Inter',
        boldItalic='Inter-Bold',
    )


def strip_front_matter(text: str) -> str:
    lines = text.splitlines()
    if not lines or lines[0].strip() != '---':
        return text

    end_index = None
    for i in range(1, len(lines)):
        if lines[i].strip() == '---':
            end_index = i
            break
    if end_index is None:
        return text
    return '\n'.join(lines[end_index + 1:]).lstrip('\n')


def clean_text(text: str) -> str:
    if text is None:
        return ''
    text = re.sub(r'<br\s*/?>', '\n', text, flags=re.IGNORECASE)
    text = re.sub(r'<[^>]+>', ' ', text)
    text = text.replace('&nbsp;', ' ')
    text = text.replace('&amp;', '&')
    text = text.replace('&lt;', '<')
    text = text.replace('&gt;', '>')
    text = text.replace('—', '-')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()


def make_logo(width=72, height=72):
    logo_path = ROOT / 'docs' / 'public' / 'alumetri-logo.png'
    if logo_path.exists():
        from reportlab.platypus import Image
        logo = Image(str(logo_path), width=width, height=height)
        logo.hAlign = 'CENTER'
        return logo

    d = Drawing(width, height)
    d.add(Rect(0, 0, width, height, fillColor=HexColor('#123B66'), strokeWidth=0, strokeColor=HexColor('#123B66')))
    d.add(String(width / 2, height / 2 + 6, 'A', textAnchor='middle', fontName='Inter-Bold', fontSize=28, fillColor=colors.white))
    return d


def resolve_image_path(src: str):
    if not src:
        return None
    if src.startswith('http://') or src.startswith('https://'):
        return src
    candidate = src
    if candidate.startswith('/'):
        candidate = candidate.lstrip('/')
    options = [
        ROOT / 'docs' / 'public' / candidate,
        ROOT / 'docs' / candidate,
        ROOT / candidate,
        ROOT / 'public' / candidate,
    ]
    for path in options:
        if path.exists():
            return str(path)
    return None


def make_image_story(src, max_width=160 * mm, max_height=105 * mm):
    resolved = resolve_image_path(src)
    if not resolved:
        return []
    try:
        from reportlab.platypus import Image
        img = Image(resolved, width=max_width, height=max_height, kind='proportional')
        return [img, Spacer(1, 8)]
    except Exception:
        return []


def make_inline_image_markup(src, max_width=200, max_height=BODY_LEADING):
    resolved = resolve_image_path(src)
    if not resolved or resolved.startswith(('http://', 'https://')):
        return ''
    try:
        from reportlab.lib.utils import ImageReader
        image_width, image_height = ImageReader(resolved).getSize()
        scale = min(max_width / image_width, max_height / image_height)
        width = image_width * scale
        height = image_height * scale
        return (
            f'<img src="{escape(resolved, quote=True)}" width="{width:.2f}" '
            f'height="{height:.2f}" valign="middle"/>'
        )
    except Exception:
        return ''


def build_table_story(table_tag):
    rows = []
    for tr in table_tag.find_all('tr'):
        cells = []
        for td in tr.find_all(['th', 'td']):
            cells.append(clean_text(td.get_text(' ', strip=True)))
        if cells:
            rows.append(cells)
    if len(rows) < 2:
        return []

    column_count = max(len(row) for row in rows)
    min_column_width = min(18 * mm, TABLE_CONTAINER_WIDTH / column_count)
    column_weights = [
        sqrt(max(
            (len(row[column_index]) for row in rows if column_index < len(row)),
            default=1,
        ))
        for column_index in range(column_count)
    ]
    distributable_width = TABLE_CONTAINER_WIDTH - min_column_width * column_count
    total_weight = sum(column_weights)
    column_widths = [
        min_column_width + distributable_width * weight / total_weight
        for weight in column_weights
    ]
    header_style = ParagraphStyle(
        name='TableHeaderCell',
        fontName='Inter-Bold',
        fontSize=TABLE_FONT_SIZE,
        leading=TABLE_LEADING,
        textColor=colors.white,
    )
    body_style = ParagraphStyle(
        name='TableBodyCell',
        fontName='Inter',
        fontSize=TABLE_FONT_SIZE,
        leading=TABLE_LEADING,
        textColor=HexColor('#1E293B'),
    )
    rows = [
        [
            Paragraph(escape(cell), header_style if row_index == 0 else body_style)
            for cell in row
        ]
        for row_index, row in enumerate(rows)
    ]
    header_padding = max(0, (TABLE_HEADER_MIN_HEIGHT - TABLE_LEADING) / 2)
    row_padding = max(0, (TABLE_ROW_MIN_HEIGHT - TABLE_LEADING) / 2)
    table = Table(rows, colWidths=column_widths, repeatRows=1)
    table.setStyle(
        TableStyle([
            ('BACKGROUND', (0, 0), (-1, 0), HexColor('#123B66')),
            ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
            ('FONTNAME', (0, 0), (-1, 0), 'Inter-Bold'),
            ('FONTNAME', (0, 1), (-1, -1), 'Inter'),
            ('FONTSIZE', (0, 0), (-1, -1), TABLE_FONT_SIZE),
            ('LEADING', (0, 0), (-1, -1), TABLE_LEADING),
            ('TOPPADDING', (0, 0), (-1, 0), header_padding),
            ('BOTTOMPADDING', (0, 0), (-1, 0), header_padding),
            ('TOPPADDING', (0, 1), (-1, -1), row_padding),
            ('BOTTOMPADDING', (0, 1), (-1, -1), row_padding),
            ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.whitesmoke, colors.white]),
            ('GRID', (0, 0), (-1, -1), 0.5, HexColor('#D0D7DE')),
            ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
            ('LEFTPADDING', (0, 0), (-1, -1), 6),
            ('RIGHTPADDING', (0, 0), (-1, -1), 6),
        ])
    )
    return [table]


def build_list_story(list_tag, bullet_style, start_number=1):
    items = []
    list_items = list_tag.find_all('li', recursive=False)
    has_images = any(li.find('img') for li in list_items)
    next_number = start_number

    if has_images:
        for li in list_items:
            text_parts = []
            block_images = []

            def collect_content(node):
                if isinstance(node, NavigableString):
                    text_parts.append(escape(re.sub(r'\s+', ' ', str(node))))
                elif getattr(node, 'name', None) == 'img':
                    if 'display: inline' in node.get('style', '').lower():
                        text_parts.append(make_inline_image_markup(node.get('src')))
                    else:
                        block_images.append(node.get('src'))
                else:
                    for child in getattr(node, 'contents', []):
                        collect_content(child)

            for child in li.contents:
                collect_content(child)

            text = ''.join(text_parts).strip()
            step_story = []
            if clean_text(text):
                marker = f'{next_number}.' if list_tag.name == 'ol' else '-'
                step_story.append(Paragraph(text, bullet_style, bulletText=marker))
                if list_tag.name == 'ol':
                    next_number += 1
            for src in block_images:
                step_story.extend(make_image_story(src))
            if step_story:
                items.append(KeepTogether(step_story))
        return items, next_number

    for li in list_items:
        text = clean_text(li.get_text(' ', strip=True))
        if text:
            marker = f'{next_number}.' if list_tag.name == 'ol' else '-'
            items.append(Paragraph(text, bullet_style, bulletText=marker))
            if list_tag.name == 'ol':
                next_number += 1
    if not items:
        return [], next_number
    return items, next_number


def first_heading_from_markdown(file_path: Path) -> str:
    text = strip_front_matter(file_path.read_text(encoding='utf-8'))
    for line in text.splitlines():
        stripped = line.strip()
        if stripped.startswith('# '):
            return clean_text(stripped[2:])
        if stripped.startswith('## '):
            return clean_text(stripped[3:])
    return file_path.stem.replace('-', ' ').title()


def markdown_links(markdown_text: str):
    html = markdown(markdown_text, extensions=['extra', 'sane_lists', 'tables'])
    soup = BeautifulSoup(html, 'html.parser')
    links = []
    for anchor in soup.find_all('a', href=True):
        href = urlsplit(anchor['href']).path.rstrip('/')
        if href.startswith('/roles/'):
            links.append((clean_text(anchor.get_text(' ', strip=True)), href))
    return links


def markdown_file_for_route(route: str) -> Path:
    file_path = DOCS_DIR / f'{route.lstrip("/")}.md'
    if not file_path.is_file():
        raise FileNotFoundError(f'File dokumentasi tidak ditemukan untuk rute {route}: {file_path}')
    return file_path


def build_documentation_structure():
    index_text = (DOCS_DIR / 'index.md').read_text(encoding='utf-8')
    role_routes = re.findall(r'link:\s*["\'](/roles/[^"\']+)', index_text)
    if not role_routes:
        raise ValueError('Tidak ada role yang ditemukan pada docs/index.md')

    roles = []
    for role_route in role_routes:
        role_file = markdown_file_for_route(role_route)
        role_text = strip_front_matter(role_file.read_text(encoding='utf-8'))
        modules = []
        for module_label, module_route in markdown_links(role_text):
            module_file = markdown_file_for_route(module_route)
            module_text = strip_front_matter(module_file.read_text(encoding='utf-8'))
            pages_section = re.search(
                r'^##[ \t]+Halaman[^\r\n]*\r?\n(.*?)(?=^#{1,6}[ \t]|\Z)',
                module_text,
                flags=re.MULTILINE | re.DOTALL,
            )
            pages = []
            if pages_section:
                for page_label, page_route in markdown_links(pages_section.group(1)):
                    if page_route != module_route:
                        pages.append((page_label, markdown_file_for_route(page_route)))
            modules.append((module_label, module_file, pages))
        roles.append((role_file, modules))

    included_files = {
        file_path.resolve()
        for role_file, modules in roles
        for file_path in [role_file, *(module_file for _, module_file, _ in modules),
                          *(page_file for _, _, pages in modules for _, page_file in pages)]
    }
    ungrouped_files = sorted(
        str(path.relative_to(DOCS_DIR))
        for path in (DOCS_DIR / 'roles').rglob('*.md')
        if path.resolve() not in included_files
    )
    if ungrouped_files:
        raise ValueError(f'Halaman role belum dimasukkan ke modul: {", ".join(ungrouped_files)}')
    return roles


def build_story_for_file(file_path: Path, title: str, title_style_name: str, page_break=False):
    story = []
    if page_break:
        story.append(PageBreak())

    markdown_text = strip_front_matter(file_path.read_text(encoding='utf-8'))
    if not markdown_text.strip():
        return story

    html = markdown(markdown_text, extensions=['extra', 'sane_lists', 'tables'])
    soup = BeautifulSoup(html, 'html.parser')

    has_dashboard_information = any(
        getattr(element, 'name', None) == 'h2'
        and clean_text(element.get_text(' ', strip=True)) == 'Informasi Dashboard Lainnya'
        for element in soup.contents
    )

    styles = getSampleStyleSheet()
    body_style = ParagraphStyle(
        name='BodyTextFormal',
        parent=styles['BodyText'],
        fontName='Inter',
        fontSize=BODY_FONT_SIZE,
        leading=BODY_LEADING,
        textColor=HexColor('#1E293B'),
        spaceAfter=PARAGRAPH_SPACE_AFTER,
    )
    bullet_style = ParagraphStyle(
        name='Bullet',
        parent=body_style,
        leftIndent=18,
        bulletIndent=10,
        spaceAfter=PARAGRAPH_SPACE_AFTER,
    )
    section_style = ParagraphStyle(
        name='SectionTitle',
        parent=styles['Heading2'],
        fontName='Inter-Bold',
        fontSize=14,
        leading=18.2,
        textColor=HexColor('#123B66'),
        spaceBefore=24,
        spaceAfter=14,
        alignment=1,
        keepWithNext=True,
    )
    subsection_style = ParagraphStyle(
        name='SubsectionTitle',
        parent=styles['Heading3'],
        fontName='Inter-Bold',
        fontSize=12,
        leading=16.8,
        textColor=HexColor('#123B66'),
        spaceBefore=18,
        spaceAfter=12,
        alignment=1,
        keepWithNext=True,
    )
    title_styles = {
        'role': ParagraphStyle(
            name='RoleTitle',
            parent=styles['Heading1'],
            fontName='Inter-Bold',
            fontSize=20,
            leading=24,
            textColor=HexColor('#123B66'),
            spaceAfter=18,
            alignment=1,
        ),
        'module': ParagraphStyle(
            name='ModuleTitle',
            parent=styles['Heading2'],
            fontName='Inter-Bold',
            fontSize=18,
            leading=21.6,
            textColor=HexColor('#123B66'),
            spaceBefore=18,
            spaceAfter=14,
            alignment=1,
        ),
        'page': ParagraphStyle(
            name='PageTitle',
            parent=styles['Heading3'],
            fontName='Inter-Bold',
            fontSize=18,
            leading=21.6,
            textColor=HexColor('#123B66'),
            spaceBefore=16,
            spaceAfter=14,
            alignment=1,
        ),
    }
    title_style = title_styles[title_style_name]
    story.append(Paragraph(f'<b>{escape(title)}</b>', title_style))
    story.append(Spacer(1, 16))

    first_h1_skipped = False
    step_number = 1
    pending_heading = None
    pending_heading_level = None

    def append_content(items):
        nonlocal pending_heading, pending_heading_level
        if not items:
            return
        if pending_heading is not None:
            first_item = items[0]
            first_content = first_item._content if isinstance(first_item, KeepTogether) else [first_item]
            if (
                pending_heading_level == 'h3'
                and story
                and isinstance(story[-1], KeepTogether)
                and story[-1]._content
                and isinstance(story[-1]._content[0], Paragraph)
                and story[-1]._content[0].style.name == 'SectionTitle'
            ):
                story[-1:] = [
                    KeepTogether(story[-1]._content + [pending_heading] + first_content)
                ]
                pending_heading = None
                pending_heading_level = None
                story.extend(items[1:])
                return
            story.append(KeepTogether([pending_heading] + first_content))
            pending_heading = None
            pending_heading_level = None
            story.extend(items[1:])
            return
        story.extend(items)

    for element in soup.contents:
        if getattr(element, 'name', None) in {None, 'html', 'body'}:
            continue
        tag = element.name
        if tag in {'h1', 'h2', 'h3'}:
            if tag == 'h1' and not first_h1_skipped:
                first_h1_skipped = True
                continue
            heading = clean_text(element.get_text(' ', strip=True))
            if heading:
                heading_style = section_style if tag == 'h2' else subsection_style
                if tag == 'h2':
                    if pending_heading is not None:
                        story.append(pending_heading)
                        pending_heading = None
                        pending_heading_level = None
                    if heading == 'Istilah Stok' and has_dashboard_information:
                        story.append(PageBreak())
                    step_number = 1
                if pending_heading is not None:
                    story.append(pending_heading)
                pending_heading = Paragraph(heading, heading_style)
                pending_heading_level = tag
        elif tag == 'p':
            has_img = any(getattr(child, 'name', None) == 'img' for child in element.children)
            if has_img:
                image_group = []
                for child in element.children:
                    if isinstance(child, NavigableString):
                        text = clean_text(str(child))
                        if text:
                            image_group.append(Paragraph(text, body_style))
                    elif getattr(child, 'name', None) == 'img':
                        src = child.get('src')
                        image_group.extend(make_image_story(src))
                if image_group:
                    has_text = any(isinstance(item, Paragraph) for item in image_group)
                    if not has_text and story and isinstance(story[-1], Paragraph):
                        story[-1:] = [KeepTogether([story[-1]] + image_group)]
                    else:
                        append_content([KeepTogether(image_group)])
            else:
                text = clean_text(element.get_text(' ', strip=True))
                if text:
                    append_content([Paragraph(text, body_style)])
        elif tag == 'img':
            image_story = make_image_story(element.get('src'))
            if image_story and story and isinstance(story[-1], Paragraph):
                story[-1:] = [KeepTogether([story[-1]] + image_story)]
            else:
                append_content(image_story)
        elif tag in {'ul', 'ol'}:
            list_story, step_number = build_list_story(element, bullet_style, step_number)
            append_content(list_story)
        elif tag == 'table':
            table_story = build_table_story(element)
            if table_story:
                table_story.append(Spacer(1, 8))
                append_content([KeepTogether(table_story)])
        elif tag == 'pre':
            text = clean_text(element.get_text(' ', strip=True))
            if text:
                append_content([Paragraph(text, ParagraphStyle(name='Pre', parent=body_style, fontName='Inter', fontSize=BODY_FONT_SIZE, leading=BODY_LEADING))])

    if pending_heading is not None:
        story.append(pending_heading)
    return story


def build_cover_story():
    styles = getSampleStyleSheet()
    company_style = ParagraphStyle(
        name='CompanyName',
        parent=styles['Title'],
        fontName='Inter-Bold',
        fontSize=22,
        leading=35.2,
        textColor=HexColor('#123B66'),
        alignment=1,
        spaceBefore=6,
        spaceAfter=18,
    )
    title_style = ParagraphStyle(
        name='DocumentTitle',
        parent=styles['Title'],
        fontName='Inter-Bold',
        fontSize=26,
        leading=41.6,
        textColor=HexColor('#0F172A'),
        alignment=1,
        spaceBefore=6,
        spaceAfter=8,
    )
    subtitle_style = ParagraphStyle(
        name='Subtitle',
        parent=styles['BodyText'],
        fontName='Inter',
        fontSize=11,
        leading=17.6,
        textColor=HexColor('#475569'),
        alignment=1,
        spaceAfter=14,
    )
    tag_style = ParagraphStyle(
        name='TagLine',
        parent=styles['BodyText'],
        fontName='Inter-Bold',
        fontSize=9,
        leading=14.4,
        textColor=colors.white,
        alignment=1,
        backColor=HexColor('#123B66'),
        borderPadding=10,
        borderWidth=0,
        spaceBefore=12,
        spaceAfter=12,
    )

    logo = make_logo(82, 82)
    story = [
        Spacer(1, 36 * mm),
        logo,
        Paragraph('ALUMETRI', company_style),
        Paragraph('Dokumentasi Sistem', title_style),
        Paragraph('Panduan Pengguna dan Operasional', subtitle_style),
        Paragraph('Company Documentation Manual', subtitle_style),
        Spacer(1, 3 * mm),
        Paragraph('Role • Module • Proses • Produksi • Warehouse', tag_style),
        Spacer(1, 30 * mm),
    ]
    return story


def build_title_page_story():
    styles = getSampleStyleSheet()
    preface_style = ParagraphStyle(
        name='Preface',
        parent=styles['BodyText'],
        fontName='Inter-Bold',
        fontSize=10,
        leading=16,
        textColor=HexColor('#123B66'),
        alignment=1,
        spaceAfter=18,
    )
    title_style = ParagraphStyle(
        name='TitlePageTitle',
        parent=styles['Title'],
        fontName='Inter-Bold',
        fontSize=30,
        leading=48,
        textColor=HexColor('#0F172A'),
        alignment=1,
        spaceAfter=20,
    )
    subtitle_style = ParagraphStyle(
        name='TitlePageSubtitle',
        parent=styles['BodyText'],
        fontName='Inter',
        fontSize=12,
        leading=19.2,
        textColor=HexColor('#475569'),
        alignment=1,
        spaceAfter=16,
    )
    meta_style = ParagraphStyle(
        name='Meta',
        parent=styles['BodyText'],
        fontName='Inter',
        fontSize=9,
        leading=14.4,
        textColor=HexColor('#475569'),
        alignment=1,
        spaceAfter=5,
    )

    story = [
        Spacer(1, 32 * mm),
        Paragraph('DOCUMENT CONTROL', preface_style),
        Paragraph('ALUMETRI', title_style),
        Paragraph('Dokumentasi Sistem dan Prosedur Operasional', subtitle_style),
        Paragraph('Internal Company Documentation', meta_style),
        Paragraph('Prepared for all user roles and operational modules', meta_style),
        Spacer(1, 20 * mm),
        Paragraph('Super Admin • Estimator • Purchasing • Production Plus Warehouse • Warehouse • Management', meta_style),
        Spacer(1, 48 * mm),
    ]
    return story


def build_toc_story(roles):
    styles = getSampleStyleSheet()
    heading_style = ParagraphStyle(
        name='TOCHeading',
        parent=styles['Heading1'],
        fontName='Inter-Bold',
        fontSize=22,
        leading=35.2,
        textColor=HexColor('#123B66'),
        spaceAfter=14,
    )
    toc = TableOfContents()
    toc.tableStyle = TableStyle([
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('LEFTPADDING', (0, 0), (-1, -1), 0),
        ('RIGHTPADDING', (0, 0), (-1, -1), 0),
        ('TOPPADDING', (0, 0), (-1, -1), 0),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 0),
    ])
    toc.levelStyles = [
        ParagraphStyle(
            name='TOCRole',
            parent=styles['BodyText'],
            fontName='Inter-Bold',
            fontSize=10,
            leading=16,
            leftIndent=0,
            firstLineIndent=0,
            textColor=HexColor('#1F2937'),
            spaceBefore=5,
            spaceAfter=0,
        ),
        ParagraphStyle(
            name='TOCModule',
            parent=styles['BodyText'],
            fontName='Inter-Bold',
            fontSize=9,
            leading=16,
            leftIndent=12,
            firstLineIndent=0,
            textColor=HexColor('#334155'),
            spaceBefore=0,
            spaceAfter=0,
        ),
        ParagraphStyle(
            name='TOCPage',
            parent=styles['BodyText'],
            fontName='Inter',
            fontSize=8,
            leading=16,
            leftIndent=26,
            firstLineIndent=0,
            textColor=HexColor('#475569'),
            spaceBefore=0,
            spaceAfter=0,
        ),
    ]
    toc.dotsMinLevel = 0
    story = [
        PageBreak(),
        Paragraph('Daftar Isi', heading_style),
        Spacer(1, 8),
        toc,
    ]
    story.append(Spacer(1, 20))
    return story


class DocumentationDocTemplate(SimpleDocTemplate):
    def beforeDocument(self):
        self.role_number = 0
        self.module_number = 0
        self.page_number = 0

    def handle_pageBegin(self):
        super().handle_pageBegin()
        page_number = self.canv.getPageNumber()
        if page_number == 1:
            return

        self.canv.saveState()
        self.canv.setStrokeColor(HexColor('#CBD5E1'))
        self.canv.setLineWidth(0.5)
        self.canv.line(
            PAGE_MARGIN,
            14 * mm,
            A4[0] - PAGE_MARGIN,
            14 * mm,
        )
        self.canv.setFont('Inter', 9)
        self.canv.setFillColor(HexColor('#64748B'))
        self.canv.drawRightString(
            A4[0] - PAGE_MARGIN,
            9 * mm,
            str(page_number - 1),
        )
        self.canv.restoreState()

    def afterFlowable(self, flowable):
        if not isinstance(flowable, Paragraph):
            return

        style_name = flowable.style.name
        level_by_style = {
            'RoleTitle': 0,
            'ModuleTitle': 1,
            'PageTitle': 2,
        }
        if style_name not in level_by_style:
            return

        level = level_by_style[style_name]
        if level == 0:
            self.role_number += 1
            self.module_number = 0
            self.page_number = 0
            prefix = f'{self.role_number}'
        elif level == 1:
            self.module_number += 1
            self.page_number = 0
            prefix = f'{self.role_number}.{self.module_number}'
        else:
            self.page_number += 1
            prefix = f'{self.role_number}.{self.module_number}.{self.page_number}'

        title = flowable.getPlainText()
        entry_text = f'{prefix} {title}'
        toc_entry_text = f'{prefix}. {title}' if level == 0 else entry_text
        key = f'toc-{self.role_number}-{self.module_number}-{self.page_number}-{level}'
        self.canv.bookmarkPage(key)
        self.canv.addOutlineEntry(entry_text, key, level=level, closed=False)
        self.notify('TOCEntry', (level, toc_entry_text, self.page - 1, key))


def generate_pdf():
    register_fonts()
    roles = build_documentation_structure()

    doc = DocumentationDocTemplate(
        str(OUTPUT_PATH),
        pagesize=A4,
        leftMargin=PAGE_MARGIN,
        rightMargin=PAGE_MARGIN,
        topMargin=PAGE_MARGIN,
        bottomMargin=PAGE_MARGIN,
    )

    story = []
    story.extend(build_cover_story())
    story.append(PageBreak())
    story.extend(build_title_page_story())
    story.extend(build_toc_story(roles))
    for role_file, modules in roles:
        role_title = first_heading_from_markdown(role_file)
        story.extend(build_story_for_file(role_file, role_title, 'role', page_break=True))
        for module_label, module_file, pages in modules:
            story.extend(build_story_for_file(module_file, module_label, 'module', page_break=True))
            for page_label, page_file in pages:
                story.extend(build_story_for_file(page_file, page_label, 'page', page_break=True))
    doc.multiBuild(story)
    print(f'Generated PDF: {OUTPUT_PATH}')


if __name__ == '__main__':
    generate_pdf()
