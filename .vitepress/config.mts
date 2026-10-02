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
              {
                text: 'Production + Warehouse',
                items: [
                  { text: 'Dashboard', link: '/roles/production-warehouse/dashboard' },
                  { text: 'Daftar Produksi', link: '/roles/production-warehouse/daftar-produksi' },
                  { text: 'Inventory Aluminium', link: '/roles/production-warehouse/inventory-aluminium' },
                  { text: 'Inventory Aksesoris', link: '/roles/production-warehouse/inventory-aksesoris' },
                  { text: 'Inventory Glass', link: '/roles/production-warehouse/inventory-glass' },
                  { text: 'Inventory Finished Good', link: '/roles/production-warehouse/inventory-finished-good' },
                  { text: 'Surat Jalan', link: '/roles/production-warehouse/surat-jalan' }
                ]
              },
          { text: 'Warehouse', link: '/roles/warehouse/dashboard' },
          { text: 'Daftar Produksi Warehouse', link: '/roles/warehouse/daftar-produksi' },
          { text: 'Inventory Aluminium', link: '/roles/warehouse/inventory-aluminium' },
          { text: 'Inventory Aksesoris', link: '/roles/warehouse/inventory-aksesoris' },
          { text: 'Inventory Glass', link: '/roles/warehouse/inventory-glass' },
          { text: 'Inventory Finished Good', link: '/roles/warehouse/inventory-finished-good' },
          { text: 'Surat Jalan Warehouse', link: '/roles/warehouse/surat-jalan' },
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
                    {
                      text: 'Production + Warehouse',
                      link: '/roles/production-warehouse',
                      items: [
                        { text: 'Dashboard', link: '/roles/production-warehouse/dashboard' },
                        { text: 'Daftar Produksi', link: '/roles/production-warehouse/daftar-produksi' },
                        { text: 'Inventory Aluminium', link: '/roles/production-warehouse/inventory-aluminium' },
                        { text: 'Inventory Aksesoris', link: '/roles/production-warehouse/inventory-aksesoris' },
                        { text: 'Inventory Glass', link: '/roles/production-warehouse/inventory-glass' },
                        { text: 'Inventory Finished Good', link: '/roles/production-warehouse/inventory-finished-good' },
                        { text: 'Surat Jalan', link: '/roles/production-warehouse/surat-jalan' }
                      ]
                    },
          {
            text: 'Warehouse',
            link: '/roles/warehouse/dashboard',
            items: [
              { text: 'Dashboard', link: '/roles/warehouse/dashboard' },
              { text: 'Daftar Produksi', link: '/roles/warehouse/daftar-produksi' },
              { text: 'Inventory Aluminium', link: '/roles/warehouse/inventory-aluminium' },
              { text: 'Inventory Aksesoris', link: '/roles/warehouse/inventory-aksesoris' },
              { text: 'Inventory Glass', link: '/roles/warehouse/inventory-glass' },
              { text: 'Inventory Finished Good', link: '/roles/warehouse/inventory-finished-good' },
              { text: 'Surat Jalan', link: '/roles/warehouse/surat-jalan' }
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
