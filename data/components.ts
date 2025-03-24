interface Component {
  id: string;
  name: string;
  price: number;
  socket?: string;
  power?: number;
}

export const components = {
  cpu: {
    amd: [
      {
        id: 'ryzen-5-5600',
        name: 'AMD Ryzen 5 5600',
        price: 499,
        socket: 'am4'
      },
      {
        id: 'ryzen-5-5600x',
        name: 'AMD Ryzen 5 5600X',
        price: 599,
        socket: 'am4'
      },
      {
        id: 'ryzen-7-5700x',
        name: 'AMD Ryzen 7 5700X',
        price: 699,
        socket: 'am4'
      },
      {
        id: 'ryzen-7-5800x',
        name: 'AMD Ryzen 7 5800X',
        price: 799,
        socket: 'am4'
      },
      {
        id: 'ryzen-9-5900x',
        name: 'AMD Ryzen 9 5900X',
        price: 999,
        socket: 'am4'
      },
      {
        id: 'ryzen-5-7600',
        name: 'AMD Ryzen 5 7600',
        price: 899,
        socket: 'am5'
      },
      {
        id: 'ryzen-5-7600x',
        name: 'AMD Ryzen 5 7600X',
        price: 999,
        socket: 'am5'
      },
      {
        id: 'ryzen-7-7700',
        name: 'AMD Ryzen 7 7700',
        price: 1199,
        socket: 'am5'
      },
      {
        id: 'ryzen-7-7700x',
        name: 'AMD Ryzen 7 7700X',
        price: 1299,
        socket: 'am5'
      },
      {
        id: 'ryzen-9-7900x',
        name: 'AMD Ryzen 9 7900X',
        price: 1899,
        socket: 'am5'
      },
      {
        id: 'ryzen-9-7950x',
        name: 'AMD Ryzen 9 7950X',
        price: 2299,
        socket: 'am5'
      },
      {
        id: 'ryzen-5-5500',
        name: 'AMD Ryzen 5 5500',
        price: 449,
        socket: 'am4'
      },
      {
        id: 'ryzen-7-5700g',
        name: 'AMD Ryzen 7 5700G',
        price: 749,
        socket: 'am4'
      },
      {
        id: 'ryzen-9-5950x',
        name: 'AMD Ryzen 9 5950X',
        price: 1499,
        socket: 'am4'
      },
      {
        id: 'ryzen-7-7800x3d',
        name: 'AMD Ryzen 7 7800X3D',
        price: 1699,
        socket: 'am5'
      },
      {
        id: 'ryzen-9-7900',
        name: 'AMD Ryzen 9 7900',
        price: 1699,
        socket: 'am5'
      },
      {
        id: 'ryzen-9-7950x3d',
        name: 'AMD Ryzen 9 7950X3D',
        price: 2499,
        socket: 'am5'
      },
      {
        id: 'ryzen-5-8600x',
        name: 'AMD Ryzen 5 8600X',
        price: 1199,
        socket: 'am5'
      },
      {
        id: 'ryzen-7-8700x',
        name: 'AMD Ryzen 7 8700X',
        price: 1499,
        socket: 'am5'
      },
      {
        id: 'ryzen-9-8900x',
        name: 'AMD Ryzen 9 8900X',
        price: 1999,
        socket: 'am5'
      },
      {
        id: 'ryzen-9-8950x',
        name: 'AMD Ryzen 9 8950X',
        price: 2499,
        socket: 'am5'
      }
    ],
    intel: [
      {
        id: 'i3-12100f',
        name: 'Intel Core i3-12100F',
        price: 399,
        socket: 'lga1700'
      },
      {
        id: 'i3-13100f',
        name: 'Intel Core i3-13100F',
        price: 449,
        socket: 'lga1700'
      },
      {
        id: 'i5-12400f',
        name: 'Intel Core i5-12400F',
        price: 599,
        socket: 'lga1700'
      },
      {
        id: 'i5-12600kf',
        name: 'Intel Core i5-12600KF',
        price: 799,
        socket: 'lga1700'
      },
      {
        id: 'i5-13400f',
        name: 'Intel Core i5-13400F',
        price: 699,
        socket: 'lga1700'
      },
      {
        id: 'i5-13600kf',
        name: 'Intel Core i5-13600KF',
        price: 999,
        socket: 'lga1700'
      },
      {
        id: 'i7-13700f',
        name: 'Intel Core i7-13700F',
        price: 1199,
        socket: 'lga1700'
      },
      {
        id: 'i7-13700kf',
        name: 'Intel Core i7-13700KF',
        price: 1399,
        socket: 'lga1700'
      },
      {
        id: 'i9-13900f',
        name: 'Intel Core i9-13900F',
        price: 1899,
        socket: 'lga1700'
      },
      {
        id: 'i9-13900kf',
        name: 'Intel Core i9-13900KF',
        price: 2099,
        socket: 'lga1700'
      },
      {
        id: 'i3-12100',
        name: 'Intel Core i3-12100',
        price: 449,
        socket: 'lga1700'
      },
      {
        id: 'i5-12400',
        name: 'Intel Core i5-12400',
        price: 649,
        socket: 'lga1700'
      },
      {
        id: 'i5-13600k',
        name: 'Intel Core i5-13600K',
        price: 1099,
        socket: 'lga1700'
      },
      {
        id: 'i7-13700k',
        name: 'Intel Core i7-13700K',
        price: 1499,
        socket: 'lga1700'
      },
      {
        id: 'i9-13900k',
        name: 'Intel Core i9-13900K',
        price: 2199,
        socket: 'lga1700'
      },
      {
        id: 'i9-13900ks',
        name: 'Intel Core i9-13900KS',
        price: 2499,
        socket: 'lga1700'
      },
      {
        id: 'i5-14600k',
        name: 'Intel Core i5-14600K',
        price: 1299,
        socket: 'lga1700'
      },
      {
        id: 'i7-14700k',
        name: 'Intel Core i7-14700K',
        price: 1699,
        socket: 'lga1700'
      },
      {
        id: 'i9-14900k',
        name: 'Intel Core i9-14900K',
        price: 2399,
        socket: 'lga1700'
      },
      {
        id: 'i5-14600kf',
        name: 'Intel Core i5-14600KF',
        price: 1199,
        socket: 'lga1700'
      },
      {
        id: 'i7-14700kf',
        name: 'Intel Core i7-14700KF',
        price: 1599,
        socket: 'lga1700'
      },
      {
        id: 'i9-14900kf',
        name: 'Intel Core i9-14900KF',
        price: 2299,
        socket: 'lga1700'
      }
    ]
  },
  gpu: [
    {
      id: 'rtx-3050',
      name: 'NVIDIA GeForce RTX 3050',
      price: 899,
      power: 130
    },
    {
      id: 'rtx-3060',
      name: 'NVIDIA GeForce RTX 3060',
      price: 1099,
      power: 170
    },
    {
      id: 'rtx-3060-ti',
      name: 'NVIDIA GeForce RTX 3060 Ti',
      price: 1299,
      power: 200
    },
    {
      id: 'rtx-3070',
      name: 'NVIDIA GeForce RTX 3070',
      price: 1599,
      power: 220
    },
    {
      id: 'rtx-3070-ti',
      name: 'NVIDIA GeForce RTX 3070 Ti',
      price: 1799,
      power: 290
    },
    {
      id: 'rtx-3080',
      name: 'NVIDIA GeForce RTX 3080 10GB',
      price: 2099,
      power: 320
    },
    {
      id: 'rtx-4060',
      name: 'NVIDIA GeForce RTX 4060',
      price: 1199,
      power: 115
    },
    {
      id: 'rtx-4060-ti',
      name: 'NVIDIA GeForce RTX 4060 Ti',
      price: 1499,
      power: 160
    },
    {
      id: 'rtx-4070',
      name: 'NVIDIA GeForce RTX 4070',
      price: 1999,
      power: 200
    },
    {
      id: 'rtx-4070-ti',
      name: 'NVIDIA GeForce RTX 4070 Ti',
      price: 2499,
      power: 285
    },
    {
      id: 'rtx-4070-super',
      name: 'NVIDIA GeForce RTX 4070 SUPER',
      price: 2199,
      power: 220
    },
    {
      id: 'rtx-4070-ti-super',
      name: 'NVIDIA GeForce RTX 4070 Ti SUPER',
      price: 2699,
      power: 285
    },
    {
      id: 'rtx-4080',
      name: 'NVIDIA GeForce RTX 4080',
      price: 2999,
      power: 320
    },
    {
      id: 'rtx-4080-super',
      name: 'NVIDIA GeForce RTX 4080 SUPER',
      price: 3299,
      power: 320
    },
    {
      id: 'rtx-4090',
      name: 'NVIDIA GeForce RTX 4090',
      price: 4999,
      power: 450
    },
    {
      id: 'rx-6600',
      name: 'AMD Radeon RX 6600',
      price: 899,
      power: 132
    },
    {
      id: 'rx-6650-xt',
      name: 'AMD Radeon RX 6650 XT',
      price: 999,
      power: 180
    },
    {
      id: 'rx-6700-xt',
      name: 'AMD Radeon RX 6700 XT',
      price: 1299,
      power: 230
    },
    {
      id: 'rx-6750-xt',
      name: 'AMD Radeon RX 6750 XT',
      price: 1499,
      power: 250
    },
    {
      id: 'rx-6800-xt',
      name: 'AMD Radeon RX 6800 XT',
      price: 1899,
      power: 300
    },
    {
      id: 'rx-7600',
      name: 'AMD Radeon RX 7600',
      price: 999,
      power: 165
    },
    {
      id: 'rx-7700-xt',
      name: 'AMD Radeon RX 7700 XT',
      price: 1799,
      power: 245
    },
    {
      id: 'rx-7800-xt',
      name: 'AMD Radeon RX 7800 XT',
      price: 1999,
      power: 263
    },
    {
      id: 'rtx-3080-ti',
      name: 'NVIDIA GeForce RTX 3080 Ti',
      price: 2499,
      power: 350
    },
    {
      id: 'rtx-3090',
      name: 'NVIDIA GeForce RTX 3090',
      price: 2999,
      power: 350
    },
    {
      id: 'rx-6900-xt',
      name: 'AMD Radeon RX 6900 XT',
      price: 2299,
      power: 300
    },
    {
      id: 'rx-6950-xt',
      name: 'AMD Radeon RX 6950 XT',
      price: 2499,
      power: 335
    },
    {
      id: 'rx-7900-xt',
      name: 'AMD Radeon RX 7900 XT',
      price: 3299,
      power: 315
    },
    {
      id: 'rx-7900-xtx',
      name: 'AMD Radeon RX 7900 XTX',
      price: 3699,
      power: 355
    },
    {
      id: 'rtx-4070-ti-gaming-x-trio',
      name: 'MSI GeForce RTX 4070 Ti GAMING X TRIO',
      price: 2599,
      power: 285
    },
    {
      id: 'rtx-4070-ti-gaming-oc',
      name: 'Gigabyte GeForce RTX 4070 Ti GAMING OC',
      price: 2599,
      power: 285
    },
    {
      id: 'rx-7900-xtx-gaming-trio',
      name: 'MSI Radeon RX 7900 XTX GAMING TRIO',
      price: 3799,
      power: 355
    },
    {
      id: 'rx-7900-xtx-gaming-oc',
      name: 'Gigabyte Radeon RX 7900 XTX GAMING OC',
      price: 3799,
      power: 355
    }
  ],
  motherboard: {
    am4: [
      {
        id: 'b550m-pro-vdh',
        name: 'MSI B550M PRO-VDH WIFI',
        price: 399
      },
      {
        id: 'b550m-aorus',
        name: 'Gigabyte B550M AORUS ELITE',
        price: 449
      },
      {
        id: 'b550-gaming-plus',
        name: 'MSI MPG B550 GAMING PLUS',
        price: 499
      },
      {
        id: 'b550-aorus-elite',
        name: 'Gigabyte B550 AORUS ELITE V2',
        price: 549
      },
      {
        id: 'x570-gaming-plus',
        name: 'MSI MPG X570 GAMING PLUS',
        price: 699
      },
      {
        id: 'x570-aorus-elite',
        name: 'Gigabyte X570 AORUS ELITE',
        price: 749
      },
      {
        id: 'b550-gaming-carbon',
        name: 'MSI MPG B550 GAMING CARBON WIFI',
        price: 699
      },
      {
        id: 'b550-aorus-pro',
        name: 'Gigabyte B550 AORUS PRO V2',
        price: 649
      },
      {
        id: 'x570s-ace-max',
        name: 'MSI MEG X570S ACE MAX',
        price: 999
      },
      {
        id: 'x570-aorus-master',
        name: 'Gigabyte X570 AORUS MASTER',
        price: 1099
      },
      {
        id: 'rog-strix-b550-f',
        name: 'ASUS ROG STRIX B550-F GAMING WIFI',
        price: 649
      },
      {
        id: 'rog-strix-x570-e',
        name: 'ASUS ROG STRIX X570-E GAMING WIFI',
        price: 899
      },
      {
        id: 'x570s-tomahawk',
        name: 'MSI MAG X570S TOMAHAWK WIFI',
        price: 799
      },
      {
        id: 'x570s-aorus-pro',
        name: 'Gigabyte X570S AORUS PRO AX',
        price: 849
      },
      {
        id: 'b550m-steel-legend',
        name: 'ASRock B550M Steel Legend',
        price: 499
      },
      {
        id: 'b550-pg-riptide',
        name: 'ASRock B550 PG Riptide',
        price: 549
      }
    ],
    am5: [
      {
        id: 'b650m-pro',
        name: 'MSI PRO B650M-A WIFI',
        price: 599
      },
      {
        id: 'b650m-aorus',
        name: 'Gigabyte B650M AORUS ELITE AX',
        price: 649
      },
      {
        id: 'b650-gaming',
        name: 'MSI MPG B650 GAMING EDGE WIFI',
        price: 799
      },
      {
        id: 'b650-aorus-elite',
        name: 'Gigabyte B650 AORUS ELITE AX',
        price: 849
      },
      {
        id: 'x670e-gaming',
        name: 'MSI MPG X670E GAMING EDGE WIFI',
        price: 1299
      },
      {
        id: 'x670e-aorus',
        name: 'Gigabyte X670E AORUS MASTER',
        price: 1499
      },
      {
        id: 'b650-carbon',
        name: 'MSI MPG B650 CARBON WIFI',
        price: 899
      },
      {
        id: 'b650e-aorus-master',
        name: 'Gigabyte B650E AORUS MASTER',
        price: 999
      },
      {
        id: 'x670e-ace',
        name: 'MSI MEG X670E ACE',
        price: 1699
      },
      {
        id: 'x670e-aorus-xtreme',
        name: 'Gigabyte X670E AORUS XTREME',
        price: 1999
      },
      {
        id: 'rog-strix-b650e-f',
        name: 'ASUS ROG STRIX B650E-F GAMING WIFI',
        price: 899
      },
      {
        id: 'rog-crosshair-x670e',
        name: 'ASUS ROG CROSSHAIR X670E HERO',
        price: 1799
      },
      {
        id: 'x670e-taichi',
        name: 'ASRock X670E TAICHI',
        price: 1599
      },
      {
        id: 'proart-x670e',
        name: 'ASUS ProArt X670E-CREATOR WIFI',
        price: 1399
      },
      {
        id: 'b650e-pg-riptide',
        name: 'ASRock B650E PG Riptide',
        price: 899
      },
      {
        id: 'b650e-steel-legend',
        name: 'ASRock B650E Steel Legend',
        price: 999
      }
    ],
    lga1700: [
      {
        id: 'b660m-a',
        name: 'MSI PRO B660M-A WIFI',
        price: 499
      },
      {
        id: 'b660m-aorus',
        name: 'Gigabyte B660M AORUS PRO AX',
        price: 549
      },
      {
        id: 'b660-gaming',
        name: 'MSI MAG B660 TOMAHAWK WIFI',
        price: 599
      },
      {
        id: 'b660-aorus',
        name: 'Gigabyte B660 AORUS MASTER',
        price: 699
      },
      {
        id: 'z690-gaming',
        name: 'MSI MPG Z690 GAMING EDGE WIFI',
        price: 899
      },
      {
        id: 'z690-aorus',
        name: 'Gigabyte Z690 AORUS ELITE AX',
        price: 999
      },
      {
        id: 'b660-carbon',
        name: 'MSI MPG B660 CARBON WIFI',
        price: 799
      },
      {
        id: 'b660-aorus-master-ddr4',
        name: 'Gigabyte B660 AORUS MASTER DDR4',
        price: 749
      },
      {
        id: 'z690-ace',
        name: 'MSI MEG Z690 ACE',
        price: 1499
      },
      {
        id: 'z690-aorus-master',
        name: 'Gigabyte Z690 AORUS MASTER',
        price: 1299
      },
      {
        id: 'rog-strix-b660-f',
        name: 'ASUS ROG STRIX B660-F GAMING WIFI',
        price: 749
      },
      {
        id: 'rog-maximus-z690',
        name: 'ASUS ROG MAXIMUS Z690 HERO',
        price: 1599
      },
      {
        id: 'z790-aorus-elite',
        name: 'Gigabyte Z790 AORUS ELITE AX',
        price: 999
      },
      {
        id: 'z790-tomahawk',
        name: 'MSI MAG Z790 TOMAHAWK WIFI',
        price: 899
      },
      {
        id: 'z790-gaming-x',
        name: 'Gigabyte Z790 GAMING X AX',
        price: 799
      },
      {
        id: 'z790-pg-riptide',
        name: 'ASRock Z790 PG RIPTIDE',
        price: 799
      },
      {
        id: 'z790-steel-legend',
        name: 'ASRock Z790 Steel Legend',
        price: 899
      }
    ]
  },
  ram: {
    ddr4: [
      {
        id: 'fury-16gb-3200',
        name: 'Kingston FURY Beast 16GB (2x8) DDR4-3200',
        price: 199
      },
      {
        id: 'fury-32gb-3200',
        name: 'Kingston FURY Beast 32GB (2x16) DDR4-3200',
        price: 299
      },
      {
        id: 'fury-16gb-3600',
        name: 'Kingston FURY Beast 16GB (2x8) DDR4-3600',
        price: 249
      },
      {
        id: 'fury-32gb-3600',
        name: 'Kingston FURY Beast 32GB (2x16) DDR4-3600',
        price: 349
      },
      {
        id: 'trident-z-16gb-3200',
        name: 'G.SKILL Trident Z RGB 16GB (2x8) DDR4-3200',
        price: 249
      },
      {
        id: 'trident-z-32gb-3200',
        name: 'G.SKILL Trident Z RGB 32GB (2x16) DDR4-3200',
        price: 349
      },
      {
        id: 'trident-z-16gb-3600',
        name: 'G.SKILL Trident Z RGB 16GB (2x8) DDR4-3600',
        price: 299
      },
      {
        id: 'trident-z-32gb-3600',
        name: 'G.SKILL Trident Z RGB 32GB (2x16) DDR4-3600',
        price: 399
      },
      {
        id: 'dominator-16gb-3200',
        name: 'Corsair Dominator Platinum RGB 16GB (2x8) DDR4-3200',
        price: 299
      },
      {
        id: 'dominator-32gb-3200',
        name: 'Corsair Dominator Platinum RGB 32GB (2x16) DDR4-3200',
        price: 399
      },
      {
        id: 'dominator-16gb-3600',
        name: 'Corsair Dominator Platinum RGB 16GB (2x8) DDR4-3600',
        price: 349
      },
      {
        id: 'dominator-32gb-3600',
        name: 'Corsair Dominator Platinum RGB 32GB (2x16) DDR4-3600',
        price: 449
      },
      {
        id: 'royal-16gb-3200',
        name: 'G.SKILL Trident Z Royal 16GB (2x8) DDR4-3200',
        price: 299
      },
      {
        id: 'royal-32gb-3200',
        name: 'G.SKILL Trident Z Royal 32GB (2x16) DDR4-3200',
        price: 399
      },
      {
        id: 'royal-16gb-3600',
        name: 'G.SKILL Trident Z Royal 16GB (2x8) DDR4-3600',
        price: 349
      },
      {
        id: 'royal-32gb-3600',
        name: 'G.SKILL Trident Z Royal 32GB (2x16) DDR4-3600',
        price: 449
      },
      {
        id: 'ripjaws-16gb-3200',
        name: 'G.SKILL Ripjaws V 16GB (2x8) DDR4-3200',
        price: 179
      },
      {
        id: 'ripjaws-32gb-3200',
        name: 'G.SKILL Ripjaws V 32GB (2x16) DDR4-3200',
        price: 279
      },
      {
        id: 'vengeance-rgb-pro-16gb-3600',
        name: 'Corsair Vengeance RGB PRO 16GB (2x8) DDR4-3600',
        price: 299
      },
      {
        id: 'vengeance-rgb-pro-32gb-3600',
        name: 'Corsair Vengeance RGB PRO 32GB (2x16) DDR4-3600',
        price: 399
      }
    ],
    ddr5: [
      {
        id: 'fury-32gb-5600',
        name: 'Kingston FURY Beast 32GB (2x16) DDR5-5600',
        price: 399
      },
      {
        id: 'fury-32gb-6000',
        name: 'Kingston FURY Beast 32GB (2x16) DDR5-6000',
        price: 499
      },
      {
        id: 'fury-32gb-6400',
        name: 'Kingston FURY Beast 32GB (2x16) DDR5-6400',
        price: 599
      },
      {
        id: 'trident-z5-32gb-5600',
        name: 'G.SKILL Trident Z5 RGB 32GB (2x16) DDR5-5600',
        price: 499
      },
      {
        id: 'trident-z5-32gb-6000',
        name: 'G.SKILL Trident Z5 RGB 32GB (2x16) DDR5-6000',
        price: 599
      },
      {
        id: 'trident-z5-32gb-6400',
        name: 'G.SKILL Trident Z5 RGB 32GB (2x16) DDR5-6400',
        price: 699
      },
      {
        id: 'dominator-32gb-5600',
        name: 'Corsair Dominator Platinum RGB 32GB (2x16) DDR5-5600',
        price: 599
      },
      {
        id: 'dominator-32gb-6000',
        name: 'Corsair Dominator Platinum RGB 32GB (2x16) DDR5-6000',
        price: 699
      },
      {
        id: 'dominator-32gb-6400',
        name: 'Corsair Dominator Platinum RGB 32GB (2x16) DDR5-6400',
        price: 799
      },
      {
        id: 'royal-32gb-5600',
        name: 'G.SKILL Trident Z Royal 32GB (2x16) DDR5-5600',
        price: 599
      },
      {
        id: 'royal-32gb-6000',
        name: 'G.SKILL Trident Z Royal 32GB (2x16) DDR5-6000',
        price: 699
      },
      {
        id: 'royal-32gb-6400',
        name: 'G.SKILL Trident Z Royal 32GB (2x16) DDR5-6400',
        price: 799
      },
      {
        id: 'fury-rgb-32gb-6000',
        name: 'Kingston FURY Beast RGB 32GB (2x16) DDR5-6000',
        price: 549
      },
      {
        id: 'fury-rgb-32gb-6400',
        name: 'Kingston FURY Beast RGB 32GB (2x16) DDR5-6400',
        price: 649
      },
      {
        id: 'vengeance-rgb-32gb-6400',
        name: 'Corsair Vengeance RGB 32GB (2x16) DDR5-6400',
        price: 699
      },
      {
        id: 'vengeance-rgb-32gb-7200',
        name: 'Corsair Vengeance RGB 32GB (2x16) DDR5-7200',
        price: 799
      }
    ]
  },
  case: [
    {
      id: 'forge-100r',
      name: 'MSI MAG FORGE 100R',
      price: 199
    },
    {
      id: 'forge-110r',
      name: 'MSI MAG FORGE 110R',
      price: 249
    },
    {
      id: 'forge-111r',
      name: 'MSI MAG FORGE 111R',
      price: 299
    },
    {
      id: 'mpg-velox',
      name: 'MSI MPG VELOX 100R',
      price: 349
    },
    {
      id: 'cc560',
      name: 'DeepCool CC560',
      price: 199
    },
    {
      id: 'ck560',
      name: 'DeepCool CK560',
      price: 299
    },
    {
      id: 'ch560',
      name: 'DeepCool CH560',
      price: 349
    },
    {
      id: 'lg520',
      name: 'DeepCool LG520',
      price: 399
    },
    {
      id: '4000d',
      name: 'Corsair 4000D Airflow',
      price: 299
    },
    {
      id: '5000d',
      name: 'Corsair 5000D Airflow',
      price: 399
    },
    {
      id: '7000d',
      name: 'Corsair 7000D Airflow',
      price: 599
    },
    {
      id: 'h7-flow',
      name: 'NZXT H7 Flow',
      price: 399
    },
    {
      id: 'h7-elite',
      name: 'NZXT H7 Elite',
      price: 499
    },
    {
      id: 'torrent',
      name: 'Fractal Design Torrent',
      price: 499
    },
    {
      id: 'torrent-rgb',
      name: 'Fractal Design Torrent RGB',
      price: 599
    },
    {
      id: 'o11-dynamic',
      name: 'Lian Li O11 Dynamic',
      price: 499
    },
    {
      id: 'o11-dynamic-xl',
      name: 'Lian Li O11 Dynamic XL',
      price: 699
    },
    {
      id: 'o11-dynamic-evo',
      name: 'Lian Li O11 Dynamic EVO',
      price: 599
    },
    {
      id: 'phanteks-p500a',
      name: 'Phanteks Eclipse P500A',
      price: 399
    },
    {
      id: 'phanteks-p600s',
      name: 'Phanteks Eclipse P600S',
      price: 499
    },
    {
      id: 'lancool-216',
      name: 'Lian Li Lancool 216',
      price: 349
    },
    {
      id: 'lancool-3',
      name: 'Lian Li Lancool III',
      price: 449
    },
    {
      id: 'meshflow',
      name: 'DeepCool MESHFLOW 2',
      price: 299
    },
    {
      id: 'matrexx-70',
      name: 'DeepCool MATREXX 70',
      price: 349
    }
  ],
  psu: [
    {
      id: 'cv550',
      name: 'Corsair CV550',
      price: 199,
      power: 550
    },
    {
      id: 'cv650',
      name: 'Corsair CV650',
      price: 249,
      power: 650
    },
    {
      id: 'rm750x',
      name: 'Corsair RM750x',
      price: 399,
      power: 750
    },
    {
      id: 'rm850x',
      name: 'Corsair RM850x',
      price: 499,
      power: 850
    },
    {
      id: 'rm1000x',
      name: 'Corsair RM1000x',
      price: 699,
      power: 1000
    },
    {
      id: 'a650g',
      name: 'MSI MPG A650G PCIE5',
      price: 299,
      power: 650
    },
    {
      id: 'a750g',
      name: 'MSI MPG A750G PCIE5',
      price: 399,
      power: 750
    },
    {
      id: 'a850g',
      name: 'MSI MPG A850G PCIE5',
      price: 499,
      power: 850
    },
    {
      id: 'a1000g',
      name: 'MSI MPG A1000G PCIE5',
      price: 699,
      power: 1000
    },
    {
      id: 'hx850',
      name: 'Corsair HX850',
      price: 599,
      power: 850
    },
    {
      id: 'hx1000',
      name: 'Corsair HX1000',
      price: 799,
      power: 1000
    },
    {
      id: 'hx1500',
      name: 'Corsair HX1500',
      price: 999,
      power: 1500
    },
    {
      id: 'thor-850p',
      name: 'ASUS ROG THOR 850P',
      price: 599,
      power: 850
    },
    {
      id: 'thor-1000p',
      name: 'ASUS ROG THOR 1000P',
      price: 799,
      power: 1000
    },
    {
      id: 'thor-1200p',
      name: 'ASUS ROG THOR 1200P',
      price: 899,
      power: 1200
    },
    {
      id: 'p1000gm',
      name: 'Gigabyte P1000GM',
      price: 599,
      power: 1000
    },
    {
      id: 'p1200gm',
      name: 'Gigabyte P1200GM',
      price: 799,
      power: 1200
    },
    {
      id: 'pq750m',
      name: 'DeepCool PQ750M',
      price: 349,
      power: 750
    },
    {
      id: 'pq850m',
      name: 'DeepCool PQ850M',
      price: 399,
      power: 850
    },
    {
      id: 'pq1000m',
      name: 'DeepCool PQ1000M',
      price: 599,
      power: 1000
    },
    {
      id: 'dq750m',
      name: 'DeepCool DQ750M-V2L',
      price: 349,
      power: 750
    },
    {
      id: 'dq850m',
      name: 'DeepCool DQ850M-V2L',
      price: 449,
      power: 850
    },
    {
      id: 'pm750d',
      name: 'DeepCool PM750D',
      price: 299,
      power: 750
    },
    {
      id: 'pm850d',
      name: 'DeepCool PM850D',
      price: 399,
      power: 850
    },
    {
      id: 'pm1000d',
      name: 'DeepCool PM1000D',
      price: 599,
      power: 1000
    }
  ]
}; 