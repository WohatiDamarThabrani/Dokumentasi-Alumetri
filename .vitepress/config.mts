import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  
  title: "Alumetri Serpihan",
  description: "dokumentasi alumetri",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Role',
        items: [
          { text: 'Super Admin', link: '/roles/super-admin' },
          { text: 'Estimator', link: '/roles/estimator' },
          { text: 'Purchasing', link: '/roles/purchasing' },
          { text: 'Production + Warehouse', link: '/roles/production-warehouse' },
          { text: 'Warehouse', link: '/roles/warehouse' },
          { text: 'Warehouse Dashboard', link: '/roles/warehouse/dashboard' },
          { text: 'Management', link: '/roles/management' }
        ]
      },
      { text: 'Dashboard', link: '/dashboard' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Dokumentasi Role',
        items: [
          { text: 'Super Admin', link: '/roles/super-admin' },
          { text: 'Estimator', link: '/roles/estimator' },
          { text: 'Purchasing', link: '/roles/purchasing' },
          { text: 'Production + Warehouse', link: '/roles/production-warehouse' },
          {
            text: 'Warehouse',
            link: '/roles/warehouse',
            items: [
              { text: 'Dashboard', link: '/roles/warehouse/dashboard' }
            ]
          },
          { text: 'Management', link: '/roles/management' }
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
