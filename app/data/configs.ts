export interface GamePerformance {
  game: string;
  fps: string;
  settings: string;
  resolution: string;
}

export interface Configuration {
  id: string;
  title: string;
  price: number;
  oldPrice?: number;
  description: string;
  specs: {
    cpu: string;
    gpu: string;
    ram: string;
    storage: string;
    motherboard: string;
    cooling: string;
    psu: string;
    case: string;
  };
  performance: GamePerformance[];
}

export const fullSpecs: Configuration[] = [
  {
    id: 'office-start',
    title: 'Office PC Start',
    price: 599,
    description: 'Отличный выбор для офиса и учебы',
    specs: {
      cpu: 'Intel Core i3-12100F',
      gpu: 'Integrated Graphics',
      ram: '16GB DDR4 3200MHz',
      storage: '512GB NVMe SSD',
      motherboard: 'MSI PRO B660M-A',
      cooling: 'Stock CPU Cooler',
      psu: 'Corsair CV450',
      case: 'DeepCool CC560'
    },
    performance: [
      { game: 'CS2', fps: '80-100', settings: 'Medium', resolution: '1080p' },
      { game: 'Minecraft', fps: '60-80', settings: 'Normal', resolution: '1080p' },
      { game: 'Roblox', fps: '60+', settings: 'High', resolution: '1080p' },
      { game: 'GTA 5', fps: '40-50', settings: 'Low', resolution: '1080p' },
      { game: 'Fortnite', fps: '50-60', settings: 'Low', resolution: '1080p' }
    ]
  },
  {
    id: 'gaming-start',
    title: 'Gaming Start',
    price: 999,
    description: 'Начальная игровая сборка',
    specs: {
      cpu: 'AMD Ryzen 5 5600',
      gpu: 'RTX 3060 12GB',
      ram: '16GB DDR4 3600MHz',
      storage: '1TB NVMe SSD',
      motherboard: 'MSI B550 Gaming Plus',
      cooling: 'DeepCool AK400',
      psu: 'Corsair RM650',
      case: 'Lian Li LANCOOL 205 Mesh'
    },
    performance: [
      { game: 'CS2', fps: '250-300', settings: 'High', resolution: '1080p' },
      { game: 'GTA 5', fps: '80-100', settings: 'High', resolution: '1080p' },
      { game: 'Battlefield 5', fps: '80-90', settings: 'High', resolution: '1080p' },
      { game: 'Minecraft', fps: '140-160', settings: 'High + Shaders', resolution: '1080p' },
      { game: 'Fortnite', fps: '120-144', settings: 'High', resolution: '1080p' }
    ]
  },
  {
    id: 'rtx4060-gaming',
    title: 'RTX 4060 Gaming',
    price: 1499,
    oldPrice: 1699,
    description: 'Мощная игровая сборка с RTX 4060',
    specs: {
      cpu: 'Intel Core i5-13600KF',
      gpu: 'RTX 4060 Ti 8GB',
      ram: '32GB DDR4 3600MHz',
      storage: '2TB NVMe SSD',
      motherboard: 'MSI MAG B660 Gaming Plus',
      cooling: 'DeepCool AK620',
      psu: 'Corsair RM750x',
      case: 'Corsair 4000D Airflow'
    },
    performance: [
      { game: 'CS2', fps: '400+', settings: 'Ultra', resolution: '1080p' },
      { game: 'GTA 5', fps: '140-160', settings: 'Ultra', resolution: '1440p' },
      { game: 'Battlefield 5', fps: '120-140', settings: 'Ultra + RT', resolution: '1440p' },
      { game: 'Minecraft', fps: '200+', settings: 'Ultra + RTX', resolution: '1440p' },
      { game: 'Fortnite', fps: '160-200', settings: 'Epic', resolution: '1440p' }
    ]
  },
  {
    id: 'rtx4070-pro',
    title: 'RTX 4070 Pro',
    price: 2499,
    description: 'Профессиональная игровая станция',
    specs: {
      cpu: 'AMD Ryzen 7 7800X3D',
      gpu: 'RTX 4070 12GB',
      ram: '32GB DDR5 6000MHz',
      storage: '2TB NVMe PCIe 4.0',
      motherboard: 'ASUS ROG STRIX B650-E',
      cooling: 'ARCTIC Liquid Freezer II 240',
      psu: 'be quiet! Straight Power 11 850W',
      case: 'Lian Li O11 Air Mini'
    },
    performance: [
      { game: 'CS2', fps: '600+', settings: 'Ultra', resolution: '1440p' },
      { game: 'GTA 5', fps: '160-200', settings: 'Ultra', resolution: '1440p' },
      { game: 'Battlefield 5', fps: '140-160', settings: 'Ultra + RT', resolution: '1440p' },
      { game: 'Minecraft', fps: '200+', settings: 'Ultra + RTX', resolution: '1440p' },
      { game: 'Fortnite', fps: '200-240', settings: 'Epic', resolution: '1440p' }
    ]
  },
  {
    id: 'rtx4080-super',
    title: 'RTX 4080 SUPER - НОВИНКА!',
    price: 3999,
    description: 'Экстремальная игровая сборка',
    specs: {
      cpu: 'Intel Core i9-14900K',
      gpu: 'RTX 4080 SUPER 16GB',
      ram: '64GB DDR5 6400MHz',
      storage: '4TB NVMe PCIe 5.0',
      motherboard: 'ASUS ROG STRIX Z790-E',
      cooling: 'ARCTIC Liquid Freezer II 360',
      psu: 'ASUS ROG THOR 1000W',
      case: 'Lian Li O11 Dynamic EVO'
    },
    performance: [
      { game: 'CS2', fps: '800+', settings: 'Ultra', resolution: '4K' },
      { game: 'GTA 5', fps: '160-200', settings: 'Ultra', resolution: '4K' },
      { game: 'Battlefield 5', fps: '140-160', settings: 'Ultra + RT', resolution: '4K' },
      { game: 'Minecraft', fps: '200+', settings: 'Ultra + RTX', resolution: '4K' },
      { game: 'Fortnite', fps: '200-240', settings: 'Epic', resolution: '4K' }
    ]
  },
  {
    id: 'rtx4090-elite',
    title: 'RTX 4090 Elite',
    price: 4999,
    oldPrice: 5499,
    description: 'Максимальная производительность без компромиссов',
    specs: {
      cpu: 'Intel Core i9-14900KS',
      gpu: 'RTX 4090 24GB',
      ram: '64GB DDR5 7200MHz',
      storage: '4TB NVMe PCIe 5.0',
      motherboard: 'ASUS ROG MAXIMUS Z790',
      cooling: 'ARCTIC Liquid Freezer II 420',
      psu: 'ASUS ROG THOR 1200W',
      case: 'Lian Li O11 Dynamic EVO XL'
    },
    performance: [
      { game: 'CS2', fps: '1000+', settings: 'Ultra', resolution: '4K' },
      { game: 'GTA 5', fps: '200+', settings: 'Ultra + ENB', resolution: '4K' },
      { game: 'Battlefield 5', fps: '180-200', settings: 'Ultra + RT', resolution: '4K' },
      { game: 'Minecraft', fps: '200+', settings: 'Ultra + RTX', resolution: '4K' },
      { game: 'Fortnite', fps: '240+', settings: 'Epic', resolution: '4K' }
    ]
  }
]; 