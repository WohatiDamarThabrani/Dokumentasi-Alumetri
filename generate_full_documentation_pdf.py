from pathlib import Path
import re

from bs4 import BeautifulSoup, NavigableString
from markdown import markdown
from reportlab.graphics.shapes import Drawing, Rect, String
from reportlab.lib import colors
from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer, ListFlowable, Table, TableStyle, PageBreak, KeepTogether

ROOT = Path(__file__).resolve().parent
DOCS_DIR = ROOT / 'docs'
OUTPUT_PATH = ROOT / 'dokumentasi-komprehensif-corporate.pdf'


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
    d = Drawing(width, height)
    d.add(Rect(0, 0, width, height, fillColor=HexColor('#123B66'), strokeWidth=0, strokeColor=HexColor('#123B66')))
    d.add(String(width / 2, height / 2 + 6, 'A', textAnchor='middle', fontName='Helvetica-Bold', fontSize=28, fillColor=colors.white))
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


def make_image_story(src, max_width=500):
    resolved = resolve_image_path(src)
    if not resolved:
        return []
    try:
        from reportlab.platypus import Image
        img = Image(resolved, width=max_width, height=max_width, kind='proportional')
        return [img, Spacer(1, 8)]
    except Exception:
        return []


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

    table = Table(rows, repeatRows=1)
    table.setStyle(
        TableStyle([
            ('BACKGROUND', (0, 0), (-1, 0), HexColor('#123B66')),
            ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
            ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
            ('FONTNAME', (0, 1), (-1, -1), 'Helvetica'),
            ('FONTSIZE', (0, 0), (-1, -1), 8),
            ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.whitesmoke, colors.white]),
            ('GRID', (0, 0), (-1, -1), 0.5, HexColor('#D0D7DE')),
            ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
            ('LEFTPADDING', (0, 0), (-1, -1), 6),
            ('RIGHTPADDING', (0, 0), (-1, -1), 6),
            ('TOPPADDING', (0, 0), (-1, -1), 5),
            ('BOTTOMPADDING', (0, 0), (-1, -1), 5),
        ])
    )
    return [table]


def build_list_story(list_tag, bullet_style):
    items = []
    for li in list_tag.find_all('li', recursive=False):
        text = clean_text(li.get_text(' ', strip=True))
        if text:
            items.append(Paragraph(text, bullet_style))
    if not items:
        return []
    return [ListFlowable(items, bulletType='bullet', bulletFontName='Helvetica', bulletFontSize=9, leftIndent=18)]


def first_heading_from_markdown(file_path: Path) -> str:
    text = strip_front_matter(file_path.read_text(encoding='utf-8'))
    for line in text.splitlines():
        stripped = line.strip()
        if stripped.startswith('# '):
            return clean_text(stripped[2:])
        if stripped.startswith('## '):
            return clean_text(stripped[3:])
    return file_path.stem.replace('-', ' ').title()


def build_story_for_file(file_path: Path):
    story = []
    rel_name = first_heading_from_markdown(file_path)
    markdown_text = strip_front_matter(file_path.read_text(encoding='utf-8'))
    if not markdown_text.strip():
        return story

    html = markdown(markdown_text, extensions=['extra', 'sane_lists', 'tables'])
    soup = BeautifulSoup(html, 'html.parser')

    styles = getSampleStyleSheet()
    body_style = ParagraphStyle(
        name='BodyTextFormal',
        parent=styles['BodyText'],
        fontName='Helvetica',
        fontSize=9,
        leading=12,
        textColor=HexColor('#1E293B'),
        spaceAfter=5,
    )
    section_style = ParagraphStyle(
        name='SectionTitle',
        parent=styles['Heading2'],
        fontName='Helvetica-Bold',
        fontSize=13,
        leading=16,
        textColor=HexColor('#123B66'),
        spaceBefore=12,
        spaceAfter=6,
    )
    chapter_style = ParagraphStyle(
        name='ChapterTitle',
        parent=styles['Title'],
        fontName='Helvetica-Bold',
        fontSize=18,
        leading=22,
        textColor=HexColor('#123B66'),
        spaceAfter=10,
    )
    bullet_style = ParagraphStyle(
        name='Bullet',
        parent=body_style,
        leftIndent=18,
        bulletIndent=10,
        spaceAfter=3,
    )

    story.append(PageBreak())
    story.append(Paragraph(f'<b>{rel_name}</b>', chapter_style))
    story.append(Spacer(1, 8))

    for element in soup.contents:
        if getattr(element, 'name', None) in {None, 'html', 'body'}:
            continue
        tag = element.name
        if tag in {'h1', 'h2', 'h3'}:
            title = clean_text(element.get_text(' ', strip=True))
            if title:
                story.append(Paragraph(title, section_style))
        elif tag == 'p':
            has_img = any(getattr(child, 'name', None) == 'img' for child in element.children)
            if has_img:
                for child in element.children:
                    if isinstance(child, NavigableString):
                        text = clean_text(str(child))
                        if text:
                            story.append(Paragraph(text, body_style))
                    elif getattr(child, 'name', None) == 'img':
                        src = child.get('src')
                        story.extend(make_image_story(src))
            else:
                text = clean_text(element.get_text(' ', strip=True))
                if text:
                    story.append(Paragraph(text, body_style))
        elif tag == 'img':
            story.extend(make_image_story(element.get('src')))
        elif tag in {'ul', 'ol'}:
            story.extend(build_list_story(element, bullet_style))
        elif tag == 'table':
            story.extend(build_table_story(element))
            story.append(Spacer(1, 8))
        elif tag == 'pre':
            text = clean_text(element.get_text(' ', strip=True))
            if text:
                story.append(Paragraph(text, ParagraphStyle(name='Pre', parent=body_style, fontName='Courier', fontSize=8, leading=11)))

    return story


def build_cover_story():
    styles = getSampleStyleSheet()
    company_style = ParagraphStyle(
        name='CompanyName',
        parent=styles['Title'],
        fontName='Helvetica-Bold',
        fontSize=24,
        leading=28,
        textColor=HexColor('#123B66'),
        alignment=1,
    )
    title_style = ParagraphStyle(
        name='DocumentTitle',
        parent=styles['Title'],
        fontName='Helvetica-Bold',
        fontSize=28,
        leading=32,
        textColor=HexColor('#0F172A'),
        alignment=1,
        spaceBefore=8,
        spaceAfter=10,
    )
    subtitle_style = ParagraphStyle(
        name='Subtitle',
        parent=styles['BodyText'],
        fontName='Helvetica',
        fontSize=11,
        leading=16,
        textColor=HexColor('#475569'),
        alignment=1,
        spaceAfter=14,
    )
    tag_style = ParagraphStyle(
        name='TagLine',
        parent=styles['BodyText'],
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=12,
        textColor=colors.white,
        alignment=1,
        backColor=HexColor('#123B66'),
        borderPadding=8,
        borderWidth=0,
        spaceBefore=8,
        spaceAfter=8,
    )

    logo = make_logo(72, 72)
    story = [
        Spacer(1, 28 * mm),
        Table([[logo, Paragraph('ALUMETRI', company_style)]], colWidths=[90, 300], hAlign='CENTER'),
        Spacer(1, 10 * mm),
        Paragraph('Dokumentasi Sistem', title_style),
        Paragraph('Panduan Pengguna dan Operasional', subtitle_style),
        Paragraph('Company Documentation Manual', subtitle_style),
        Spacer(1, 8 * mm),
        Paragraph('Role • Module • Proses • Produksi • Warehouse', tag_style),
        Spacer(1, 70 * mm),
    ]
    return story


def build_title_page_story():
    styles = getSampleStyleSheet()
    preface_style = ParagraphStyle(
        name='Preface',
        parent=styles['BodyText'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=14,
        textColor=HexColor('#123B66'),
        alignment=1,
        spaceAfter=18,
    )
    title_style = ParagraphStyle(
        name='TitlePageTitle',
        parent=styles['Title'],
        fontName='Helvetica-Bold',
        fontSize=30,
        leading=34,
        textColor=HexColor('#0F172A'),
        alignment=1,
        spaceAfter=20,
    )
    subtitle_style = ParagraphStyle(
        name='TitlePageSubtitle',
        parent=styles['BodyText'],
        fontName='Helvetica',
        fontSize=12,
        leading=18,
        textColor=HexColor('#475569'),
        alignment=1,
        spaceAfter=16,
    )
    meta_style = ParagraphStyle(
        name='Meta',
        parent=styles['BodyText'],
        fontName='Helvetica',
        fontSize=9,
        leading=14,
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
        Paragraph('Warehouse • Production • Management • Purchasing • Estimator', meta_style),
        Spacer(1, 48 * mm),
    ]
    return story


def build_toc_story(files):
    styles = getSampleStyleSheet()
    heading_style = ParagraphStyle(
        name='TOCHeading',
        parent=styles['Heading1'],
        fontName='Helvetica-Bold',
        fontSize=22,
        leading=26,
        textColor=HexColor('#123B66'),
        spaceAfter=14,
    )
    item_style = ParagraphStyle(
        name='TOCItem',
        parent=styles['BodyText'],
        fontName='Helvetica',
        fontSize=10,
        leading=15,
        textColor=HexColor('#1F2937'),
        spaceAfter=6,
    )

    story = [
        PageBreak(),
        Paragraph('Daftar Isi', heading_style),
        Spacer(1, 8),
    ]
    for index, path in enumerate(files, start=1):
        label = first_heading_from_markdown(path)
        story.append(Paragraph(f'{index}. {label}', item_style))
    story.append(Spacer(1, 20))
    return story


def generate_pdf():
    files = sorted(DOCS_DIR.rglob('*.md'))
    if not files:
        raise FileNotFoundError(f'Tidak ada file markdown di {DOCS_DIR}')

    doc = SimpleDocTemplate(
        str(OUTPUT_PATH),
        pagesize=A4,
        leftMargin=18 * mm,
        rightMargin=18 * mm,
        topMargin=18 * mm,
        bottomMargin=18 * mm,
    )

    story = []
    story.extend(build_cover_story())
    story.append(PageBreak())
    story.extend(build_title_page_story())
    story.extend(build_toc_story(files))
    for path in files:
        story.extend(build_story_for_file(path))
    doc.build(story)
    print(f'Generated PDF: {OUTPUT_PATH}')


if __name__ == '__main__':
    generate_pdf()
