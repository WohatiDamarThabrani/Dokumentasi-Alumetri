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
          {
            text: 'Super Admin',
            link: '/roles/super-admin',
            items: [
              { text: 'Dashboard', link: '/roles/super-admin/dashboard' },
              { text: 'Brand', link: '/roles/super-admin/brand' },
              { text: 'Seri Profil', link: '/roles/super-admin/seri-profil' },
              { text: 'Finishing', link: '/roles/super-admin/finishing' },
              { text: 'Supplier', link: '/roles/super-admin/supplier' },
              { text: 'Customer', link: '/roles/super-admin/customer' },
              { text: 'Gudang', link: '/roles/super-admin/gudang' },
              { text: 'Unit Type & BOM', link: '/roles/super-admin/unit-type-bom' },
              { text: 'Profil Aluminium', link: '/roles/super-admin/profil-aluminium' },
              { text: 'Aksesoris', link: '/roles/super-admin/aksesoris' },
              { text: 'Glass', link: '/roles/super-admin/glass' },
              { text: 'Jasa Pemasangan', link: '/roles/super-admin/jasa-pemasangan' },
              { text: 'Price & Cost', link: '/roles/super-admin/price-cost' },
              { text: 'Daftar Quotation', link: '/roles/super-admin/daftar-quotation' },
              { text: 'Import Project', link: '/roles/super-admin/import-project' },
              { text: 'Daftar Purchase Order', link: '/roles/super-admin/daftar-purchase-order' },
              { text: 'Daftar Produksi', link: '/roles/super-admin/daftar-produksi' },
              { text: 'Inventory Aluminium', link: '/roles/super-admin/inventory-aluminium' },
              { text: 'Inventory Aksesoris', link: '/roles/super-admin/inventory-aksesoris' },
              { text: 'Inventory Glass', link: '/roles/super-admin/inventory-glass' },
              { text: 'Inventory Finished Good', link: '/roles/super-admin/inventory-finished-good' },
              { text: 'Daftar Surat Jalan', link: '/roles/super-admin/daftar-surat-jalan' }
            ]
          },
          {
            text: 'Estimator',
            items: [
              { text: 'Dashboard', link: '/roles/estimator/dashboard' },
              { text: 'Daftar Quotation', link: '/roles/estimator/daftar-quotation' },
              { text: 'Menahan dan Membatalkan Project', link: '/roles/estimator/daftar-project' },
              { text: 'Import Project', link: '/roles/estimator/import-project' },
              { text: 'Daftar Produksi', link: '/roles/estimator/daftar-produksi' }
            ]
          },
          {
            text: 'Purchasing',
            items: [
              { text: 'Dashboard', link: '/roles/purchasing/dashboard' },
              { text: 'Import Project', link: '/roles/purchasing/import-project' },
              { text: 'Purchase Order', link: '/roles/purchasing/purchase-order' },
              { text: 'Daftar Produksi', link: '/roles/purchasing/daftar-produksi' },
              { text: 'Inventory Aluminium', link: '/roles/purchasing/inventory-aluminium' },
              { text: 'Inventory Aksesoris', link: '/roles/purchasing/inventory-aksesoris' },
              { text: 'Inventory Glass', link: '/roles/purchasing/inventory-glass' },
              { text: 'Inventory Finished Good', link: '/roles/purchasing/inventory-finished-good' }
            ]
          },
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
          {
            text: 'Management',
            link: '/roles/management',
            items: [
              { text: 'Dashboard', link: '/roles/management/dashboard' },
              { text: 'Daftar Quotation', link: '/roles/management/daftar-quotation' },
              { text: 'Daftar Purchase Order', link: '/roles/management/daftar-purchase-order' },
              { text: 'Daftar Produksi', link: '/roles/management/daftar-produksi' },
              { text: 'Inventory Aluminium', link: '/roles/management/inventory-aluminium' },
              { text: 'Inventory Aksesoris', link: '/roles/management/inventory-aksesoris' },
              { text: 'Inventory Glass', link: '/roles/management/inventory-glass' },
              { text: 'Inventory Finished Good', link: '/roles/management/inventory-finished-good' },
              { text: 'Daftar Surat Jalan', link: '/roles/management/daftar-surat-jalan' }
            ]
          }
        ]
      },
      { text: 'Dashboard', link: '/dashboard' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Dokumentasi Role',
        items: [
          {
            text: 'Super Admin',
            link: '/roles/super-admin',
            items: [
              { text: 'Dashboard', link: '/roles/super-admin/dashboard' },
              { text: 'Brand', link: '/roles/super-admin/brand' },
              { text: 'Seri Profil', link: '/roles/super-admin/seri-profil' },
              { text: 'Finishing', link: '/roles/super-admin/finishing' },
              { text: 'Supplier', link: '/roles/super-admin/supplier' },
              { text: 'Customer', link: '/roles/super-admin/customer' },
              { text: 'Gudang', link: '/roles/super-admin/gudang' },
              { text: 'Unit Type & BOM', link: '/roles/super-admin/unit-type-bom' },
              { text: 'Profil Aluminium', link: '/roles/super-admin/profil-aluminium' },
              { text: 'Aksesoris', link: '/roles/super-admin/aksesoris' },
              { text: 'Glass', link: '/roles/super-admin/glass' },
              { text: 'Jasa Pemasangan', link: '/roles/super-admin/jasa-pemasangan' },
              { text: 'Price & Cost', link: '/roles/super-admin/price-cost' },
              { text: 'Daftar Quotation', link: '/roles/super-admin/daftar-quotation' },
              { text: 'Import Project', link: '/roles/super-admin/import-project' },
              { text: 'Daftar Purchase Order', link: '/roles/super-admin/daftar-purchase-order' },
              { text: 'Daftar Produksi', link: '/roles/super-admin/daftar-produksi' },
              { text: 'Inventory Aluminium', link: '/roles/super-admin/inventory-aluminium' },
              { text: 'Inventory Aksesoris', link: '/roles/super-admin/inventory-aksesoris' },
              { text: 'Inventory Glass', link: '/roles/super-admin/inventory-glass' },
              { text: 'Inventory Finished Good', link: '/roles/super-admin/inventory-finished-good' },
              { text: 'Daftar Surat Jalan', link: '/roles/super-admin/daftar-surat-jalan' }
            ]
          },
          {
            text: 'Estimator',
            link: '/roles/estimator/dashboard',
            items: [
              { text: 'Dashboard', link: '/roles/estimator/dashboard' },
              { text: 'Daftar Quotation', link: '/roles/estimator/daftar-quotation' },
              { text: 'Menahan dan Membatalkan Project', link: '/roles/estimator/daftar-project' },
              { text: 'Import Project', link: '/roles/estimator/import-project' },
              { text: 'Daftar Produksi', link: '/roles/estimator/daftar-produksi' }
            ]
          },
          {
            text: 'Purchasing',
            link: '/roles/purchasing/dashboard',
            items: [
              { text: 'Dashboard', link: '/roles/purchasing/dashboard' },
              { text: 'Import Project', link: '/roles/purchasing/import-project' },
              { text: 'Purchase Order', link: '/roles/purchasing/purchase-order' },
              { text: 'Daftar Produksi', link: '/roles/purchasing/daftar-produksi' },
              { text: 'Inventory Aluminium', link: '/roles/purchasing/inventory-aluminium' },
              { text: 'Inventory Aksesoris', link: '/roles/purchasing/inventory-aksesoris' },
              { text: 'Inventory Glass', link: '/roles/purchasing/inventory-glass' },
              { text: 'Inventory Finished Good', link: '/roles/purchasing/inventory-finished-good' }
            ]
          },
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
          {
            text: 'Management',
            link: '/roles/management',
            items: [
              { text: 'Dashboard', link: '/roles/management/dashboard' },
              { text: 'Daftar Quotation', link: '/roles/management/daftar-quotation' },
              { text: 'Daftar Purchase Order', link: '/roles/management/daftar-purchase-order' },
              { text: 'Daftar Produksi', link: '/roles/management/daftar-produksi' },
              { text: 'Inventory Aluminium', link: '/roles/management/inventory-aluminium' },
              { text: 'Inventory Aksesoris', link: '/roles/management/inventory-aksesoris' },
              { text: 'Inventory Glass', link: '/roles/management/inventory-glass' },
              { text: 'Inventory Finished Good', link: '/roles/management/inventory-finished-good' },
              { text: 'Daftar Surat Jalan', link: '/roles/management/daftar-surat-jalan' }
            ]
          }
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
