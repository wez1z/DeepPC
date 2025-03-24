export interface ComponentSpecs {
  name: string;
  price: number;
  description: string;
}

export interface MotherboardSpecs extends ComponentSpecs {
  socket: string;
  chipset: string;
  formFactor: string;
  memorySlots: number;
  maxMemory: string;
  features: string[];
}

export interface CoolingSpecs extends ComponentSpecs {
  type: 'air' | 'liquid';
  socket: string[];
  tdp: number;
  noiseLevel: string;
  fanSize: string;
}

export interface CaseSpecs extends ComponentSpecs {
  formFactor: string;
  maxGpuLength: number;
  maxCpuCoolerHeight: number;
  fanMounts: {
    front: number;
    top: number;
    rear: number;
    bottom: number;
  };
  features: string[];
}

export interface PSUSpecs extends ComponentSpecs {
  wattage: number;
  efficiency: string;
  modular: 'full' | 'semi' | 'none';
  connectors: {
    cpu: string[];
    gpu: string[];
    sata: number;
    molex: number;
  };
}

export const configs = {
  'rtx-3050-basic': {
    title: 'RTX 3050 Basic',
    price: 1799,
    oldPrice: 1999,
    specs: {
      cpu: 'Intel Core i3-13100F',
      gpu: 'NVIDIA GeForce RTX 3050 4GB',
      ram: '8GB DDR5-4800',
      storage: '256GB NVMe SSD',
      motherboard: 'MSI B660M-A WiFi',
      cooling: 'DeepCool AK400',
      psu: 'MSI MPG A650G PCIE5',
      case: 'MSI MAG FORGE 100R'
    },
    performance: [
      {
        game: 'Cyberpunk 2077',
        fps: '40-50',
        settings: 'High',
        resolution: '1080p'
      },
      {
        game: 'Red Dead Redemption 2',
        fps: '50-60',
        settings: 'Medium',
        resolution: '1080p'
      },
      {
        game: 'Elden Ring',
        fps: '60-70',
        settings: 'High',
        resolution: '1080p'
      }
    ]
  },
  'rtx-3060-basic': {
    title: 'RTX 3060 Basic',
    price: 3499,
    oldPrice: 2699,
    specs: {
      cpu: 'Intel Core i3-13100F',
      gpu: 'NVIDIA GeForce RTX 3060 12GB',
      ram: '16GB DDR5-4800',
      storage: '512GB NVMe SSD',
      motherboard: 'MSI B660M-A WiFi',
      cooling: 'DeepCool AK400',
      psu: 'MSI MPG A650G PCIE5',
      case: 'MSI MAG FORGE 100R'
    },
    performance: [
      {
        game: 'Cyberpunk 2077',
        fps: '40-50',
        settings: 'High',
        resolution: '1080p'
      },
      {
        game: 'Red Dead Redemption 2',
        fps: '50-60',
        settings: 'Medium',
        resolution: '1080p'
      },
      {
        game: 'Elden Ring',
        fps: '60-70',
        settings: 'High',
        resolution: '1080p'
      }
    ]
  },
  'rtx-4060-starter': {
    title: 'RTX 4060 Starter',
    price: 5199,
    oldPrice: 3299,
    specs: {
      cpu: 'Intel Core i5-13400F',
      gpu: 'NVIDIA GeForce RTX 4060 8GB',
      ram: '32GB DDR5-6000',
      storage: '1TB NVMe SSD',
      motherboard: 'MSI B760M-A WiFi',
      cooling: 'DeepCool AK620',
      psu: 'MSI MPG A750G PCIE5',
      case: 'MSI MAG FORGE 100R'
    },
    performance: [
      {
        game: 'Cyberpunk 2077',
        fps: '60-70',
        settings: 'Ultra',
        resolution: '1080p'
      },
      {
        game: 'Red Dead Redemption 2',
        fps: '70-80',
        settings: 'High',
        resolution: '1080p'
      },
      {
        game: 'Elden Ring',
        fps: '80-90',
        settings: 'High',
        resolution: '1080p'
      }
    ]
  },
  'rtx-4060-ti-performance': {
    title: 'RTX 4060 Ti Performance',
    price: 3499,
    oldPrice: 3799,
    specs: {
      cpu: 'Intel Core i5-13600KF',
      gpu: 'NVIDIA GeForce RTX 4060 Ti 8GB',
      ram: '32GB DDR5-6400',
      storage: '2TB NVMe SSD',
      motherboard: 'MSI B760M-A WiFi',
      cooling: 'DeepCool AK620',
      psu: 'MSI MPG A750G PCIE5',
      case: 'MSI MAG FORGE 100R'
    },
    performance: [
      {
        game: 'Cyberpunk 2077',
        fps: '70-80',
        settings: 'Ultra',
        resolution: '1080p'
      },
      {
        game: 'Red Dead Redemption 2',
        fps: '80-90',
        settings: 'High',
        resolution: '1080p'
      },
      {
        game: 'Elden Ring',
        fps: '90-100',
        settings: 'High',
        resolution: '1080p'
      }
    ]
  },
  'rtx-4070-elite': {
    title: 'RTX 4070 Elite',
    price: 8999,
    oldPrice: 9299,
    specs: {
      cpu: 'Intel Core i7-13700KF',
      gpu: 'NVIDIA GeForce RTX 4070 12GB',
      ram: '32GB DDR5-6800',
      storage: '2TB NVMe SSD',
      motherboard: 'MSI B760M-A WiFi',
      cooling: 'DeepCool AK620',
      psu: 'MSI MPG A750G PCIE5',
      case: 'MSI MAG FORGE 100R'
    },
    performance: [
      {
        game: 'Cyberpunk 2077',
        fps: '80-90',
        settings: 'Ultra',
        resolution: '1080p'
      },
      {
        game: 'Red Dead Redemption 2',
        fps: '90-100',
        settings: 'High',
        resolution: '1080p'
      },
      {
        game: 'Elden Ring',
        fps: '100-110',
        settings: 'High',
        resolution: '1080p'
      }
    ]
  },
  'rtx-4070-ti-ultra': {
    title: 'RTX 4070 Ti Ultra',
    price: 9999,
    oldPrice: 10299,
    specs: {
      cpu: 'Intel Core i7-13700KF',
      gpu: 'NVIDIA GeForce RTX 4070 Ti 12GB',
      ram: '32GB DDR5-7200',
      storage: '2TB NVMe SSD',
      motherboard: 'MSI B760M-A WiFi',
      cooling: 'DeepCool AK620',
      psu: 'MSI MPG A750G PCIE5',
      case: 'MSI MAG FORGE 100R'
    },
    performance: [
      {
        game: 'Cyberpunk 2077',
        fps: '90-100',
        settings: 'Ultra',
        resolution: '1080p'
      },
      {
        game: 'Red Dead Redemption 2',
        fps: '100-110',
        settings: 'High',
        resolution: '1080p'
      },
      {
        game: 'Elden Ring',
        fps: '110-120',
        settings: 'High',
        resolution: '1080p'
      }
    ]
  },
  'rtx-4080-extreme': {
    title: 'RTX 4080 Extreme',
    price: 11999,
    oldPrice: 12299,
    specs: {
      cpu: 'Intel Core i9-13900KF',
      gpu: 'NVIDIA GeForce RTX 4080 16GB',
      ram: '32GB DDR5-7600',
      storage: '2TB NVMe SSD',
      motherboard: 'MSI B760M-A WiFi',
      cooling: 'DeepCool AK620',
      psu: 'MSI MPG A750G PCIE5',
      case: 'MSI MAG FORGE 100R'
    },
    performance: [
      {
        game: 'Cyberpunk 2077',
        fps: '100-110',
        settings: 'Ultra',
        resolution: '1080p'
      },
      {
        game: 'Red Dead Redemption 2',
        fps: '110-120',
        settings: 'High',
        resolution: '1080p'
      },
      {
        game: 'Elden Ring',
        fps: '120-130',
        settings: 'High',
        resolution: '1080p'
      }
    ]
  },
  'rtx-4090-extreme-edition': {
    title: 'RTX 4090 Extreme Edition',
    price: 14999,
    oldPrice: 15299,
    specs: {
      cpu: 'Intel Core i9-13900KF',
      gpu: 'NVIDIA GeForce RTX 4090 24GB',
      ram: '32GB DDR5-8000',
      storage: '2TB NVMe SSD',
      motherboard: 'MSI B760M-A WiFi',
      cooling: 'DeepCool AK620',
      psu: 'MSI MPG A750G PCIE5',
      case: 'MSI MAG FORGE 100R'
    },
    performance: [
      {
        game: 'Cyberpunk 2077',
        fps: '110-120',
        settings: 'Ultra',
        resolution: '1080p'
      },
      {
        game: 'Red Dead Redemption 2',
        fps: '120-130',
        settings: 'High',
        resolution: '1080p'
      },
      {
        game: 'Elden Ring',
        fps: '130-140',
        settings: 'High',
        resolution: '1080p'
      }
    ]
  },
  'rtx-5090-ultimate': {
    title: 'RTX 5090 Ultimate',
    price: 35999,
    oldPrice: 36999,
    specs: {
      cpu: 'Intel Core i9-14900KF',
      gpu: 'NVIDIA GeForce RTX 5090 32GB',
      ram: '64GB DDR5-8400',
      storage: '4TB NVMe SSD',
      motherboard: 'MSI Z790 ACE',
      cooling: 'DeepCool AK620 Digital',
      psu: 'MSI MPG A1000G PCIE5',
      case: 'MSI MAG FORGE 100R'
    },
    performance: [
      {
        game: 'Cyberpunk 2077',
        fps: '140-150',
        settings: 'Ultra',
        resolution: '4K'
      },
      {
        game: 'Red Dead Redemption 2',
        fps: '150-160',
        settings: 'Ultra',
        resolution: '4K'
      },
      {
        game: 'Elden Ring',
        fps: '160-170',
        settings: 'Ultra',
        resolution: '4K'
      }
    ]
  }
};

export const fullSpecs = {
  ...configs,
  'rtx-3060-basic': {
    ...configs['rtx-3060-basic'],
    specs: {
      cpu: 'Intel Core i3-13100F (4 ядра, 4.5 GHz)',
      gpu: 'NVIDIA GeForce RTX 3060 12GB GDDR6',
      ram: '16GB (2x8GB) DDR5-4800 CL40',
      storage: '512GB Samsung 990 PRO NVMe SSD',
      motherboard: 'MSI B660M-A WiFi DDR5',
      cooling: 'DeepCool AK400 (1x120mm вентилятор)',
      psu: 'MSI MPG A650G PCIE5 650W Gold',
      case: 'MSI MAG FORGE 100R (4x120mm вентилятора)'
    }
  },
  'rtx-4060-starter': {
    ...configs['rtx-4060-starter'],
    specs: {
      cpu: 'Intel Core i5-13400F (10 ядер, 4.6 GHz)',
      gpu: 'NVIDIA GeForce RTX 4060 8GB GDDR6',
      ram: '32GB (2x16GB) DDR5-6000 CL30',
      storage: '1TB Samsung 990 PRO NVMe SSD',
      motherboard: 'MSI B760M-A WiFi DDR5',
      cooling: 'DeepCool AK620 (2x120mm вентилятора)',
      psu: 'MSI MPG A750G PCIE5 750W Gold',
      case: 'MSI MAG FORGE 100R (4x120mm вентилятора)'
    }
  },
  'rtx-4060-ti-performance': {
    ...configs['rtx-4060-ti-performance'],
    specs: {
      cpu: 'Intel Core i5-13600KF (14 ядер, 5.1 GHz)',
      gpu: 'NVIDIA GeForce RTX 4060 Ti 8GB GDDR6',
      ram: '32GB (2x16GB) DDR5-6400 CL32',
      storage: '2TB Samsung 990 PRO NVMe SSD',
      motherboard: 'MSI B760M-A WiFi DDR5',
      cooling: 'DeepCool AK620 (2x120mm вентилятора)',
      psu: 'MSI MPG A750G PCIE5 750W Gold',
      case: 'MSI MAG FORGE 100R (4x120mm вентилятора)'
    }
  },
  'rtx-4070-elite': {
    ...configs['rtx-4070-elite'],
    specs: {
      cpu: 'Intel Core i7-13700KF (16 ядер, 5.4 GHz)',
      gpu: 'NVIDIA GeForce RTX 4070 12GB GDDR6X',
      ram: '32GB (2x16GB) DDR5-6800 CL34',
      storage: '2TB Samsung 990 PRO NVMe SSD',
      motherboard: 'MSI B760M-A WiFi DDR5',
      cooling: 'DeepCool AK620 (2x120mm вентилятора)',
      psu: 'MSI MPG A750G PCIE5 750W Gold',
      case: 'MSI MAG FORGE 100R (4x120mm вентилятора)'
    }
  },
  'rtx-4070-ti-ultra': {
    ...configs['rtx-4070-ti-ultra'],
    specs: {
      cpu: 'Intel Core i7-13700KF (16 ядер, 5.4 GHz)',
      gpu: 'NVIDIA GeForce RTX 4070 Ti 12GB GDDR6X',
      ram: '32GB (2x16GB) DDR5-7200 CL36',
      storage: '2TB Samsung 990 PRO NVMe SSD',
      motherboard: 'MSI B760M-A WiFi DDR5',
      cooling: 'DeepCool AK620 (2x120mm вентилятора)',
      psu: 'MSI MPG A750G PCIE5 750W Gold',
      case: 'MSI MAG FORGE 100R (4x120mm вентилятора)'
    }
  },
  'rtx-4080-extreme': {
    ...configs['rtx-4080-extreme'],
    specs: {
      cpu: 'Intel Core i9-13900KF (24 ядра, 5.8 GHz)',
      gpu: 'NVIDIA GeForce RTX 4080 16GB GDDR6X',
      ram: '32GB (2x16GB) DDR5-7600 CL38',
      storage: '2TB Samsung 990 PRO NVMe SSD',
      motherboard: 'MSI B760M-A WiFi DDR5',
      cooling: 'DeepCool AK620 (2x120mm вентилятора)',
      psu: 'MSI MPG A750G PCIE5 750W Gold',
      case: 'MSI MAG FORGE 100R (4x120mm вентилятора)'
    }
  },
  'rtx-4090-extreme-edition': {
    ...configs['rtx-4090-extreme-edition'],
    specs: {
      cpu: 'Intel Core i9-13900KF (24 ядра, 5.8 GHz)',
      gpu: 'NVIDIA GeForce RTX 4090 24GB GDDR6X',
      ram: '32GB (2x16GB) DDR5-8000 CL40',
      storage: '2TB Samsung 990 PRO NVMe SSD',
      motherboard: 'MSI B760M-A WiFi DDR5',
      cooling: 'DeepCool AK620 (2x120mm вентилятора)',
      psu: 'MSI MPG A750G PCIE5 750W Gold',
      case: 'MSI MAG FORGE 100R (4x120mm вентилятора)'
    }
  },
  'rtx-5090-ultimate': {
    ...configs['rtx-5090-ultimate'],
    specs: {
      cpu: 'Intel Core i9-14900KF (24 ядра, 6.0 GHz)',
      gpu: 'NVIDIA GeForce RTX 5090 32GB GDDR7',
      ram: '64GB (4x16GB) DDR5-8400 CL42',
      storage: '4TB Samsung 990 PRO NVMe SSD',
      motherboard: 'MSI Z790 ACE DDR5',
      cooling: 'DeepCool AK620 Digital (2x120mm вентилятора)',
      psu: 'MSI MPG A1000G PCIE5 1000W Platinum',
      case: 'MSI MAG FORGE 100R (4x120mm вентилятора)'
    }
  }
}; 