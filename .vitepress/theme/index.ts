import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { nextTick } from 'vue'

function scrollActiveSidebarItemIntoView() {
  if (typeof document === 'undefined') return

  const sidebar = document.querySelector<HTMLElement>('.VPSidebar')
  const activeItem = document.querySelector<HTMLElement>(
    '#VPSidebarNav .VPSidebarItem.is-active > .item > .link[aria-current="page"]'
  )

  if (!sidebar || !activeItem) return

  const sidebarBounds = sidebar.getBoundingClientRect()
  const itemBounds = activeItem.getBoundingClientRect()

  if (itemBounds.top < sidebarBounds.top) {
    sidebar.scrollTop -= sidebarBounds.top - itemBounds.top
  } else if (itemBounds.bottom > sidebarBounds.bottom) {
    sidebar.scrollTop += itemBounds.bottom - sidebarBounds.bottom
  }
}

function scheduleSidebarScroll() {
  if (typeof window === 'undefined') return

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(scrollActiveSidebarItemIntoView)
  })
}

const theme: Theme = {
  extends: DefaultTheme,
  enhanceApp(context) {
    DefaultTheme.enhanceApp?.(context)

    const { router } = context
    const previousAfterRouteChange = router.onAfterRouteChange

    router.onAfterRouteChange = async (to) => {
      await previousAfterRouteChange?.(to)
      await nextTick()
      scheduleSidebarScroll()
    }

    scheduleSidebarScroll()
  }
}

export default theme
