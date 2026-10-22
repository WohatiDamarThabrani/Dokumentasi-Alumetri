import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  
  title: "Alumetri Serpihan",
  description: "dokumentasi alumetri",
  themeConfig: {
    logo: '/logo.png',
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
              {
                text: 'Sales',
                link: '/roles/super-admin/sales',
                items: [
                  { text: 'Daftar Quotation', link: '/roles/super-admin/daftar-quotation' }
                ]
              },
              {
                text: 'Project & Production',
                link: '/roles/super-admin/project-production',
                items: [
                  { text: 'Import Project', link: '/roles/super-admin/import-project' },
                  { text: 'Daftar Project', link: '/roles/super-admin/daftar-project' },
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
                text: 'Master Data',
                link: '/roles/super-admin/master-data',
                items: [
                  { text: 'Brand', link: '/roles/super-admin/brand' },
                  { text: 'Seri Profil', link: '/roles/super-admin/seri-profil' },
                  { text: 'Finishing', link: '/roles/super-admin/finishing' },
                  { text: 'Supplier', link: '/roles/super-admin/supplier' },
                  { text: 'Customer', link: '/roles/super-admin/customer' },
                  { text: 'Gudang', link: '/roles/super-admin/gudang' },
                  { text: 'Unit Type & BOM', link: '/roles/super-admin/unit-type-bom' },
                  { text: 'Parameter Teknis', link: '/roles/super-admin/parameter-teknis' },
                  { text: 'Profil Aluminium', link: '/roles/super-admin/profil-aluminium' },
                  { text: 'Aksesoris', link: '/roles/super-admin/aksesoris' },
                  { text: 'Glass', link: '/roles/super-admin/glass' },
                  { text: 'Jasa Pemasangan', link: '/roles/super-admin/jasa-pemasangan' },
                  { text: 'Price & Cost', link: '/roles/super-admin/price-cost' }
                ]
              },
              {
                text: 'Report',
                link: '/roles/super-admin/reporting',
                items: [
                  { text: 'Report', link: '/roles/super-admin/report' },
                  { text: 'Uji Rekonsiliasi', link: '/roles/super-admin/uji-rekonsiliasi' }
                ]
              },
              {
                text: 'Setting',
                link: '/roles/super-admin/setting',
                items: [
                  { text: 'Company Information', link: '/roles/super-admin/company-information' },
                  { text: 'User Management', link: '/roles/super-admin/user-management' },
                  { text: 'Roles & Permissions', link: '/roles/super-admin/roles-permissions' },
                  { text: 'Document Settings', link: '/roles/super-admin/document-settings' },
                  { text: 'Production & Commercial Defaults', link: '/roles/super-admin/production-commercial-defaults' },
                  { text: 'Data Demo', link: '/roles/super-admin/data-demo' }
                ]
              },
              {
                text: 'Cetak',
                link: '/roles/super-admin/berkas-cetak',
                items: [
                  { text: 'Berkas Cetak', link: '/roles/super-admin/berkas-cetak' }
                ]
              }
            ]
          },
          {
            text: 'Estimator',
            link: '/roles/estimator',
            items: [
              { text: 'Dashboard', link: '/roles/estimator/dashboard' },
              {
                text: 'Sales',
                link: '/roles/estimator/sales',
                items: [
                  { text: 'Daftar Quotation', link: '/roles/estimator/daftar-quotation' }
                ]
              },
              {
                text: 'Project & Production',
                link: '/roles/estimator/project-production',
                items: [
                  { text: 'Import Project', link: '/roles/estimator/import-project' },
                  { text: 'Daftar Project', link: '/roles/estimator/daftar-project' },
                  { text: 'Menahan dan Membatalkan Project', link: '/roles/estimator/tahan-batalkan-project' },
                  { text: 'Daftar Produksi', link: '/roles/estimator/daftar-produksi' }
                ]
              },
              {
                text: 'Master Data',
                link: '/roles/estimator/master-data',
                items: [
                  { text: 'Brand', link: '/roles/estimator/brand' },
                  { text: 'Seri Profil', link: '/roles/estimator/seri-profil' },
                  { text: 'Finishing', link: '/roles/estimator/finishing' },
                  { text: 'Supplier', link: '/roles/estimator/supplier' },
                  { text: 'Customer', link: '/roles/estimator/customer' },
                  { text: 'Gudang', link: '/roles/estimator/gudang' },
                  { text: 'Unit Type & BOM', link: '/roles/estimator/unit-type-bom' },
                  { text: 'Parameter Teknis', link: '/roles/estimator/parameter-teknis' },
                  { text: 'Profil Aluminium', link: '/roles/estimator/profil-aluminium' },
                  { text: 'Aksesoris', link: '/roles/estimator/aksesoris' },
                  { text: 'Glass', link: '/roles/estimator/glass' },
                  { text: 'Jasa Pemasangan', link: '/roles/estimator/jasa-pemasangan' },
                  { text: 'Price & Cost', link: '/roles/estimator/price-cost' }
                ]
              },
              {
                text: 'Report',
                link: '/roles/estimator/reporting',
                items: [
                  { text: 'Report', link: '/roles/estimator/report' }
                ]
              },
              {
                text: 'Cetak',
                link: '/roles/estimator/berkas-cetak',
                items: [
                  { text: 'Berkas Cetak', link: '/roles/estimator/berkas-cetak' }
                ]
              }
            ]
          },
          {
            text: 'Purchasing',
            link: '/roles/purchasing',
            items: [
              { text: 'Dashboard', link: '/roles/purchasing/dashboard' },
              {
                text: 'Project & Production',
                link: '/roles/purchasing/project-production',
                items: [
                  { text: 'Import Project', link: '/roles/purchasing/import-project' },
                  { text: 'Daftar Project', link: '/roles/purchasing/daftar-project' },
                  { text: 'Purchase Order', link: '/roles/purchasing/purchase-order' },
                  { text: 'Daftar Produksi', link: '/roles/purchasing/daftar-produksi' },
                  { text: 'Inventory Aluminium', link: '/roles/purchasing/inventory-aluminium' },
                  { text: 'Inventory Aksesoris', link: '/roles/purchasing/inventory-aksesoris' },
                  { text: 'Inventory Glass', link: '/roles/purchasing/inventory-glass' },
                  { text: 'Inventory Finished Good', link: '/roles/purchasing/inventory-finished-good' }
                ]
              },
              {
                text: 'Master Data',
                link: '/roles/purchasing/master-data',
                items: [
                  { text: 'Brand', link: '/roles/purchasing/brand' },
                  { text: 'Seri Profil', link: '/roles/purchasing/seri-profil' },
                  { text: 'Finishing', link: '/roles/purchasing/finishing' },
                  { text: 'Supplier', link: '/roles/purchasing/supplier' },
                  { text: 'Customer', link: '/roles/purchasing/customer' },
                  { text: 'Gudang', link: '/roles/purchasing/gudang' },
                  { text: 'Unit Type & BOM', link: '/roles/purchasing/unit-type-bom' },
                  { text: 'Parameter Teknis', link: '/roles/purchasing/parameter-teknis' },
                  { text: 'Profil Aluminium', link: '/roles/purchasing/profil-aluminium' },
                  { text: 'Aksesoris', link: '/roles/purchasing/aksesoris' },
                  { text: 'Glass', link: '/roles/purchasing/glass' },
                  { text: 'Jasa Pemasangan', link: '/roles/purchasing/jasa-pemasangan' },
                  { text: 'Price & Cost', link: '/roles/purchasing/price-cost' }
                ]
              },
              {
                text: 'Cetak',
                link: '/roles/purchasing/berkas-cetak',
                items: [
                  { text: 'Berkas Cetak', link: '/roles/purchasing/berkas-cetak' }
                ]
              }
            ]
          },
              {
                text: 'Production Plus Warehouse',
                link: '/roles/production-warehouse',
                items: [
                  { text: 'Dashboard', link: '/roles/production-warehouse/dashboard' },
                  {
                    text: 'Project & Production',
                    link: '/roles/production-warehouse/project-production',
                    items: [
                      { text: 'Daftar Project', link: '/roles/production-warehouse/daftar-project' },
                      { text: 'Daftar Produksi', link: '/roles/production-warehouse/daftar-produksi' },
                      { text: 'Inventory Aluminium', link: '/roles/production-warehouse/inventory-aluminium' },
                      { text: 'Inventory Aksesoris', link: '/roles/production-warehouse/inventory-aksesoris' },
                      { text: 'Inventory Glass', link: '/roles/production-warehouse/inventory-glass' },
                      { text: 'Inventory Finished Good', link: '/roles/production-warehouse/inventory-finished-good' },
                      { text: 'Surat Jalan', link: '/roles/production-warehouse/surat-jalan' }
                    ]
                  },
                  {
                    text: 'Cetak',
                    link: '/roles/production-warehouse/berkas-cetak',
                    items: [
                      { text: 'Berkas Cetak', link: '/roles/production-warehouse/berkas-cetak' }
                    ]
                  }
                ]
              },
          {
            text: 'Warehouse',
            link: '/roles/warehouse',
            items: [
              { text: 'Dashboard', link: '/roles/warehouse/dashboard' },
              {
                text: 'Project & Production',
                link: '/roles/warehouse/project-production',
                items: [
                  { text: 'Daftar Project', link: '/roles/warehouse/daftar-project' },
                  { text: 'Daftar Produksi', link: '/roles/warehouse/daftar-produksi' },
                  { text: 'Inventory Aluminium', link: '/roles/warehouse/inventory-aluminium' },
                  { text: 'Inventory Aksesoris', link: '/roles/warehouse/inventory-aksesoris' },
                  { text: 'Inventory Glass', link: '/roles/warehouse/inventory-glass' },
                  { text: 'Inventory Finished Good', link: '/roles/warehouse/inventory-finished-good' },
                  { text: 'Surat Jalan', link: '/roles/warehouse/surat-jalan' }
                ]
              },
              {
                text: 'Cetak',
                link: '/roles/warehouse/berkas-cetak',
                items: [
                  { text: 'Berkas Cetak', link: '/roles/warehouse/berkas-cetak' }
                ]
              }
            ]
          },
          {
            text: 'Management',
            link: '/roles/management',
            items: [
              { text: 'Dashboard', link: '/roles/management/dashboard' },
              {
                text: 'Sales',
                link: '/roles/management/sales',
                items: [
                  { text: 'Daftar Quotation', link: '/roles/management/daftar-quotation' }
                ]
              },
              {
                text: 'Project & Production',
                link: '/roles/management/project-production',
                items: [
                  { text: 'Daftar Project', link: '/roles/management/daftar-project' },
                  { text: 'Daftar Purchase Order', link: '/roles/management/daftar-purchase-order' },
                  { text: 'Daftar Produksi', link: '/roles/management/daftar-produksi' },
                  { text: 'Inventory Aluminium', link: '/roles/management/inventory-aluminium' },
                  { text: 'Inventory Aksesoris', link: '/roles/management/inventory-aksesoris' },
                  { text: 'Inventory Glass', link: '/roles/management/inventory-glass' },
                  { text: 'Inventory Finished Good', link: '/roles/management/inventory-finished-good' },
                  { text: 'Daftar Surat Jalan', link: '/roles/management/daftar-surat-jalan' }
                ]
              },
              {
                text: 'Master Data',
                link: '/roles/management/master-data',
                items: [
                  { text: 'Brand', link: '/roles/management/brand' },
                  { text: 'Seri Profil', link: '/roles/management/seri-profil' },
                  { text: 'Finishing', link: '/roles/management/finishing' },
                  { text: 'Supplier', link: '/roles/management/supplier' },
                  { text: 'Customer', link: '/roles/management/customer' },
                  { text: 'Gudang', link: '/roles/management/gudang' },
                  { text: 'Unit Type & BOM', link: '/roles/management/unit-type-bom' },
                  { text: 'Parameter Teknis', link: '/roles/management/parameter-teknis' },
                  { text: 'Profil Aluminium', link: '/roles/management/profil-aluminium' },
                  { text: 'Aksesoris', link: '/roles/management/aksesoris' },
                  { text: 'Glass', link: '/roles/management/glass' },
                  { text: 'Jasa Pemasangan', link: '/roles/management/jasa-pemasangan' },
                  { text: 'Price & Cost', link: '/roles/management/price-cost' }
                ]
              },
              {
                text: 'Report',
                link: '/roles/management/reporting',
                items: [
                  { text: 'Report', link: '/roles/management/report' }
                ]
              },
              {
                text: 'Cetak',
                link: '/roles/management/berkas-cetak',
                items: [
                  { text: 'Berkas Cetak', link: '/roles/management/berkas-cetak' }
                ]
              }
            ]
          }
        ]
      },
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
              {
                text: 'Sales',
                link: '/roles/super-admin/sales',
                items: [
                  { text: 'Daftar Quotation', link: '/roles/super-admin/daftar-quotation' }
                ]
              },
              {
                text: 'Project & Production',
                link: '/roles/super-admin/project-production',
                items: [
                  { text: 'Import Project', link: '/roles/super-admin/import-project' },
                  { text: 'Daftar Project', link: '/roles/super-admin/daftar-project' },
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
                text: 'Master Data',
                link: '/roles/super-admin/master-data',
                items: [
                  { text: 'Brand', link: '/roles/super-admin/brand' },
                  { text: 'Seri Profil', link: '/roles/super-admin/seri-profil' },
                  { text: 'Finishing', link: '/roles/super-admin/finishing' },
                  { text: 'Supplier', link: '/roles/super-admin/supplier' },
                  { text: 'Customer', link: '/roles/super-admin/customer' },
                  { text: 'Gudang', link: '/roles/super-admin/gudang' },
                  { text: 'Unit Type & BOM', link: '/roles/super-admin/unit-type-bom' },
                  { text: 'Parameter Teknis', link: '/roles/super-admin/parameter-teknis' },
                  { text: 'Profil Aluminium', link: '/roles/super-admin/profil-aluminium' },
                  { text: 'Aksesoris', link: '/roles/super-admin/aksesoris' },
                  { text: 'Glass', link: '/roles/super-admin/glass' },
                  { text: 'Jasa Pemasangan', link: '/roles/super-admin/jasa-pemasangan' },
                  { text: 'Price & Cost', link: '/roles/super-admin/price-cost' }
                ]
              },
              {
                text: 'Report',
                link: '/roles/super-admin/reporting',
                items: [
                  { text: 'Report', link: '/roles/super-admin/report' },
                  { text: 'Uji Rekonsiliasi', link: '/roles/super-admin/uji-rekonsiliasi' }
                ]
              },
              {
                text: 'Setting',
                link: '/roles/super-admin/setting',
                items: [
                  { text: 'Company Information', link: '/roles/super-admin/company-information' },
                  { text: 'User Management', link: '/roles/super-admin/user-management' },
                  { text: 'Roles & Permissions', link: '/roles/super-admin/roles-permissions' },
                  { text: 'Document Settings', link: '/roles/super-admin/document-settings' },
                  { text: 'Production & Commercial Defaults', link: '/roles/super-admin/production-commercial-defaults' },
                  { text: 'Data Demo', link: '/roles/super-admin/data-demo' }
                ]
              },
              {
                text: 'Cetak',
                link: '/roles/super-admin/berkas-cetak',
                items: [
                  { text: 'Berkas Cetak', link: '/roles/super-admin/berkas-cetak' }
                ]
              }
            ]
          },
          {
            text: 'Estimator',
            link: '/roles/estimator',
            items: [
              { text: 'Dashboard', link: '/roles/estimator/dashboard' },
              {
                text: 'Sales',
                link: '/roles/estimator/sales',
                items: [
                  { text: 'Daftar Quotation', link: '/roles/estimator/daftar-quotation' }
                ]
              },
              {
                text: 'Project & Production',
                link: '/roles/estimator/project-production',
                items: [
                  { text: 'Import Project', link: '/roles/estimator/import-project' },
                  { text: 'Daftar Project', link: '/roles/estimator/daftar-project' },
                  { text: 'Menahan dan Membatalkan Project', link: '/roles/estimator/tahan-batalkan-project' },
                  { text: 'Daftar Produksi', link: '/roles/estimator/daftar-produksi' }
                ]
              },
              {
                text: 'Master Data',
                link: '/roles/estimator/master-data',
                items: [
                  { text: 'Brand', link: '/roles/estimator/brand' },
                  { text: 'Seri Profil', link: '/roles/estimator/seri-profil' },
                  { text: 'Finishing', link: '/roles/estimator/finishing' },
                  { text: 'Supplier', link: '/roles/estimator/supplier' },
                  { text: 'Customer', link: '/roles/estimator/customer' },
                  { text: 'Gudang', link: '/roles/estimator/gudang' },
                  { text: 'Unit Type & BOM', link: '/roles/estimator/unit-type-bom' },
                  { text: 'Parameter Teknis', link: '/roles/estimator/parameter-teknis' },
                  { text: 'Profil Aluminium', link: '/roles/estimator/profil-aluminium' },
                  { text: 'Aksesoris', link: '/roles/estimator/aksesoris' },
                  { text: 'Glass', link: '/roles/estimator/glass' },
                  { text: 'Jasa Pemasangan', link: '/roles/estimator/jasa-pemasangan' },
                  { text: 'Price & Cost', link: '/roles/estimator/price-cost' }
                ]
              },
              {
                text: 'Report',
                link: '/roles/estimator/reporting',
                items: [
                  { text: 'Report', link: '/roles/estimator/report' }
                ]
              },
              {
                text: 'Cetak',
                link: '/roles/estimator/berkas-cetak',
                items: [
                  { text: 'Berkas Cetak', link: '/roles/estimator/berkas-cetak' }
                ]
              }
            ]
          },
          {
            text: 'Purchasing',
            link: '/roles/purchasing',
            items: [
              { text: 'Dashboard', link: '/roles/purchasing/dashboard' },
              {
                text: 'Project & Production',
                link: '/roles/purchasing/project-production',
                items: [
                  { text: 'Import Project', link: '/roles/purchasing/import-project' },
                  { text: 'Daftar Project', link: '/roles/purchasing/daftar-project' },
                  { text: 'Purchase Order', link: '/roles/purchasing/purchase-order' },
                  { text: 'Daftar Produksi', link: '/roles/purchasing/daftar-produksi' },
                  { text: 'Inventory Aluminium', link: '/roles/purchasing/inventory-aluminium' },
                  { text: 'Inventory Aksesoris', link: '/roles/purchasing/inventory-aksesoris' },
                  { text: 'Inventory Glass', link: '/roles/purchasing/inventory-glass' },
                  { text: 'Inventory Finished Good', link: '/roles/purchasing/inventory-finished-good' }
                ]
              },
              {
                text: 'Master Data',
                link: '/roles/purchasing/master-data',
                items: [
                  { text: 'Brand', link: '/roles/purchasing/brand' },
                  { text: 'Seri Profil', link: '/roles/purchasing/seri-profil' },
                  { text: 'Finishing', link: '/roles/purchasing/finishing' },
                  { text: 'Supplier', link: '/roles/purchasing/supplier' },
                  { text: 'Customer', link: '/roles/purchasing/customer' },
                  { text: 'Gudang', link: '/roles/purchasing/gudang' },
                  { text: 'Unit Type & BOM', link: '/roles/purchasing/unit-type-bom' },
                  { text: 'Parameter Teknis', link: '/roles/purchasing/parameter-teknis' },
                  { text: 'Profil Aluminium', link: '/roles/purchasing/profil-aluminium' },
                  { text: 'Aksesoris', link: '/roles/purchasing/aksesoris' },
                  { text: 'Glass', link: '/roles/purchasing/glass' },
                  { text: 'Jasa Pemasangan', link: '/roles/purchasing/jasa-pemasangan' },
                  { text: 'Price & Cost', link: '/roles/purchasing/price-cost' }
                ]
              },
              {
                text: 'Cetak',
                link: '/roles/purchasing/berkas-cetak',
                items: [
                  { text: 'Berkas Cetak', link: '/roles/purchasing/berkas-cetak' }
                ]
              }
            ]
          },
                    {
                      text: 'Production Plus Warehouse',
                      link: '/roles/production-warehouse',
                      items: [
                        { text: 'Dashboard', link: '/roles/production-warehouse/dashboard' },
                        {
                          text: 'Project & Production',
                          link: '/roles/production-warehouse/project-production',
                          items: [
                            { text: 'Daftar Project', link: '/roles/production-warehouse/daftar-project' },
                            { text: 'Daftar Produksi', link: '/roles/production-warehouse/daftar-produksi' },
                            { text: 'Inventory Aluminium', link: '/roles/production-warehouse/inventory-aluminium' },
                            { text: 'Inventory Aksesoris', link: '/roles/production-warehouse/inventory-aksesoris' },
                            { text: 'Inventory Glass', link: '/roles/production-warehouse/inventory-glass' },
                            { text: 'Inventory Finished Good', link: '/roles/production-warehouse/inventory-finished-good' },
                            { text: 'Surat Jalan', link: '/roles/production-warehouse/surat-jalan' }
                          ]
                        },
                        {
                          text: 'Cetak',
                          link: '/roles/production-warehouse/berkas-cetak',
                          items: [
                            { text: 'Berkas Cetak', link: '/roles/production-warehouse/berkas-cetak' }
                          ]
                        }
                      ]
                    },
          {
            text: 'Warehouse',
            link: '/roles/warehouse',
            items: [
              { text: 'Dashboard', link: '/roles/warehouse/dashboard' },
              {
                text: 'Project & Production',
                link: '/roles/warehouse/project-production',
                items: [
                  { text: 'Daftar Project', link: '/roles/warehouse/daftar-project' },
                  { text: 'Daftar Produksi', link: '/roles/warehouse/daftar-produksi' },
                  { text: 'Inventory Aluminium', link: '/roles/warehouse/inventory-aluminium' },
                  { text: 'Inventory Aksesoris', link: '/roles/warehouse/inventory-aksesoris' },
                  { text: 'Inventory Glass', link: '/roles/warehouse/inventory-glass' },
                  { text: 'Inventory Finished Good', link: '/roles/warehouse/inventory-finished-good' },
                  { text: 'Surat Jalan', link: '/roles/warehouse/surat-jalan' }
                ]
              },
              {
                text: 'Cetak',
                link: '/roles/warehouse/berkas-cetak',
                items: [
                  { text: 'Berkas Cetak', link: '/roles/warehouse/berkas-cetak' }
                ]
              }
            ]
          },
          {
            text: 'Management',
            link: '/roles/management',
            items: [
              { text: 'Dashboard', link: '/roles/management/dashboard' },
              {
                text: 'Sales',
                link: '/roles/management/sales',
                items: [
                  { text: 'Daftar Quotation', link: '/roles/management/daftar-quotation' }
                ]
              },
              {
                text: 'Project & Production',
                link: '/roles/management/project-production',
                items: [
                  { text: 'Daftar Project', link: '/roles/management/daftar-project' },
                  { text: 'Daftar Purchase Order', link: '/roles/management/daftar-purchase-order' },
                  { text: 'Daftar Produksi', link: '/roles/management/daftar-produksi' },
                  { text: 'Inventory Aluminium', link: '/roles/management/inventory-aluminium' },
                  { text: 'Inventory Aksesoris', link: '/roles/management/inventory-aksesoris' },
                  { text: 'Inventory Glass', link: '/roles/management/inventory-glass' },
                  { text: 'Inventory Finished Good', link: '/roles/management/inventory-finished-good' },
                  { text: 'Daftar Surat Jalan', link: '/roles/management/daftar-surat-jalan' }
                ]
              },
              {
                text: 'Master Data',
                link: '/roles/management/master-data',
                items: [
                  { text: 'Brand', link: '/roles/management/brand' },
                  { text: 'Seri Profil', link: '/roles/management/seri-profil' },
                  { text: 'Finishing', link: '/roles/management/finishing' },
                  { text: 'Supplier', link: '/roles/management/supplier' },
                  { text: 'Customer', link: '/roles/management/customer' },
                  { text: 'Gudang', link: '/roles/management/gudang' },
                  { text: 'Unit Type & BOM', link: '/roles/management/unit-type-bom' },
                  { text: 'Parameter Teknis', link: '/roles/management/parameter-teknis' },
                  { text: 'Profil Aluminium', link: '/roles/management/profil-aluminium' },
                  { text: 'Aksesoris', link: '/roles/management/aksesoris' },
                  { text: 'Glass', link: '/roles/management/glass' },
                  { text: 'Jasa Pemasangan', link: '/roles/management/jasa-pemasangan' },
                  { text: 'Price & Cost', link: '/roles/management/price-cost' }
                ]
              },
              {
                text: 'Report',
                link: '/roles/management/reporting',
                items: [
                  { text: 'Report', link: '/roles/management/report' }
                ]
              },
              {
                text: 'Cetak',
                link: '/roles/management/berkas-cetak',
                items: [
                  { text: 'Berkas Cetak', link: '/roles/management/berkas-cetak' }
                ]
              }
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
