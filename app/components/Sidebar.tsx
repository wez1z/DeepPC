import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faComputer, faWrench, faTimes } from '@fortawesome/free-solid-svg-icons';

interface SidebarProps {
  onConfigChange: (config: any) => void;
}

export default function Sidebar({ onConfigChange }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'builds' | 'configurator'>('builds');
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [orderDetails, setOrderDetails] = useState({
    name: '',
    phone: '',
    email: '',
    address: ''
  });
  const [selectedComponents, setSelectedComponents] = useState({
    cpu: '',
    gpu: '',
    motherboard: '',
    ram: '',
    case: '',
    psu: ''
  });

  useEffect(() => {
    const handleToggle = () => setIsOpen(prev => !prev);
    document.addEventListener('toggleSidebar', handleToggle);
    return () => document.removeEventListener('toggleSidebar', handleToggle);
  }, []);

  // База данных комплектующих
  const components = {
    cpu: {
      amd: [
        { id: 'r5-5600', name: 'AMD Ryzen 5 5600', socket: 'AM4', price: 449 },
        { id: 'r5-5600x', name: 'AMD Ryzen 5 5600X', socket: 'AM4', price: 549 },
        { id: 'r7-5700x', name: 'AMD Ryzen 7 5700X', socket: 'AM4', price: 749 },
        { id: 'r7-5800x3d', name: 'AMD Ryzen 7 5800X3D', socket: 'AM4', price: 999 },
        { id: 'r9-5950x', name: 'AMD Ryzen 9 5950X', socket: 'AM4', price: 1299 },
        { id: 'r5-7600', name: 'AMD Ryzen 5 7600', socket: 'AM5', price: 899 },
        { id: 'r5-7600x', name: 'AMD Ryzen 5 7600X', socket: 'AM5', price: 999 },
        { id: 'r7-7700x', name: 'AMD Ryzen 7 7700X', socket: 'AM5', price: 1299 },
        { id: 'r7-7800x3d', name: 'AMD Ryzen 7 7800X3D', socket: 'AM5', price: 1699 },
        { id: 'r9-7900x', name: 'AMD Ryzen 9 7900X', socket: 'AM5', price: 1899 },
        { id: 'r9-7950x', name: 'AMD Ryzen 9 7950X', socket: 'AM5', price: 2499 },
        { id: 'r9-7950x3d', name: 'AMD Ryzen 9 7950X3D', socket: 'AM5', price: 2799 }
      ],
      intel: [
        { id: 'i3-12100f', name: 'Intel Core i3-12100F', socket: 'LGA1700', price: 349 },
        { id: 'i5-12400f', name: 'Intel Core i5-12400F', socket: 'LGA1700', price: 549 },
        { id: 'i5-12600k', name: 'Intel Core i5-12600K', socket: 'LGA1700', price: 749 },
        { id: 'i7-12700k', name: 'Intel Core i7-12700K', socket: 'LGA1700', price: 999 },
        { id: 'i5-13400f', name: 'Intel Core i5-13400F', socket: 'LGA1700', price: 649 },
        { id: 'i5-13600kf', name: 'Intel Core i5-13600KF', socket: 'LGA1700', price: 999 },
        { id: 'i7-13700kf', name: 'Intel Core i7-13700KF', socket: 'LGA1700', price: 1399 },
        { id: 'i9-13900k', name: 'Intel Core i9-13900K', socket: 'LGA1700', price: 1999 },
        { id: 'i5-14600kf', name: 'Intel Core i5-14600KF', socket: 'LGA1700', price: 1199 },
        { id: 'i7-14700k', name: 'Intel Core i7-14700K', socket: 'LGA1700', price: 1599 },
        { id: 'i9-14900k', name: 'Intel Core i9-14900K', socket: 'LGA1700', price: 2299 },
        { id: 'i9-14900ks', name: 'Intel Core i9-14900KS', socket: 'LGA1700', price: 2699 }
      ]
    },
    gpu: [
      { id: 'rtx3060-gaming', name: 'MSI RTX 3060 GAMING X 12GB', power: 170, price: 999 },
      { id: 'rtx3060ti-gaming', name: 'MSI RTX 3060 Ti GAMING X 8GB', power: 200, price: 1199 },
      { id: 'rtx3070-gaming', name: 'MSI RTX 3070 GAMING X TRIO 8GB', power: 220, price: 1499 },
      { id: 'rtx3070ti-gaming', name: 'MSI RTX 3070 Ti GAMING X TRIO 8GB', power: 290, price: 1699 },
      { id: 'rtx3080-gaming', name: 'MSI RTX 3080 GAMING X TRIO 10GB', power: 320, price: 1999 },
      { id: 'rtx4060-gaming', name: 'MSI RTX 4060 GAMING X 8GB', power: 115, price: 1199 },
      { id: 'rtx4060-aorus', name: 'GIGABYTE RTX 4060 AORUS ELITE 8GB', power: 115, price: 1299 },
      { id: 'rtx4060ti-gaming', name: 'MSI RTX 4060 Ti GAMING X 8GB', power: 160, price: 1499 },
      { id: 'rtx4060ti-aorus', name: 'GIGABYTE RTX 4060 Ti AORUS ELITE 8GB', power: 160, price: 1599 },
      { id: 'rtx4070-gaming', name: 'MSI RTX 4070 GAMING X TRIO 12GB', power: 200, price: 2299 },
      { id: 'rtx4070-aorus', name: 'GIGABYTE RTX 4070 AORUS MASTER 12GB', power: 200, price: 2399 },
      { id: 'rtx4070ti-gaming', name: 'MSI RTX 4070 Ti GAMING X TRIO 12GB', power: 285, price: 2799 },
      { id: 'rtx4070ti-aorus', name: 'GIGABYTE RTX 4070 Ti AORUS MASTER 12GB', power: 285, price: 2899 },
      { id: 'rtx4080-gaming', name: 'MSI RTX 4080 GAMING X TRIO 16GB', power: 320, price: 3499 },
      { id: 'rtx4080-aorus', name: 'GIGABYTE RTX 4080 AORUS MASTER 16GB', power: 320, price: 3599 },
      { id: 'rtx4090-gaming', name: 'MSI RTX 4090 GAMING X TRIO 24GB', power: 450, price: 4999 },
      { id: 'rtx4090-aorus', name: 'GIGABYTE RTX 4090 AORUS MASTER 24GB', power: 450, price: 5199 }
    ],
    motherboard: {
      am4: [
        { id: 'b550m-pro', name: 'MSI B550M PRO-VDH WIFI', price: 299 },
        { id: 'b550-gaming', name: 'MSI B550 GAMING PLUS', price: 399 },
        { id: 'b550-aorus', name: 'GIGABYTE B550 AORUS PRO', price: 499 },
        { id: 'b550-strix', name: 'ASUS ROG STRIX B550-F GAMING', price: 549 },
        { id: 'x570-gaming', name: 'MSI MPG X570 GAMING PLUS', price: 599 },
        { id: 'x570-aorus', name: 'GIGABYTE X570 AORUS ELITE', price: 649 },
        { id: 'x570-strix', name: 'ASUS ROG STRIX X570-E GAMING', price: 799 }
      ],
      am5: [
        { id: 'b650m-pro', name: 'MSI PRO B650M-A WIFI', price: 499 },
        { id: 'b650-gaming', name: 'MSI B650 GAMING PLUS WIFI', price: 699 },
        { id: 'b650-aorus', name: 'GIGABYTE B650 AORUS ELITE AX', price: 799 },
        { id: 'b650-strix', name: 'ASUS ROG STRIX B650-E GAMING WIFI', price: 899 },
        { id: 'x670-gaming', name: 'MSI MPG X670E CARBON WIFI', price: 999 },
        { id: 'x670-aorus', name: 'GIGABYTE X670 AORUS ELITE AX', price: 1099 },
        { id: 'x670-strix', name: 'ASUS ROG STRIX X670E-E GAMING WIFI', price: 1299 }
      ],
      lga1700: [
        { id: 'b660m-pro', name: 'MSI PRO B660M-A WIFI', price: 349 },
        { id: 'b660-gaming', name: 'MSI MAG B660 GAMING PLUS WIFI', price: 449 },
        { id: 'b660-aorus', name: 'GIGABYTE B660 AORUS MASTER', price: 549 },
        { id: 'b660-strix', name: 'ASUS ROG STRIX B660-F GAMING WIFI', price: 649 },
        { id: 'z690-gaming', name: 'MSI MPG Z690 EDGE WIFI', price: 749 },
        { id: 'z690-aorus', name: 'GIGABYTE Z690 AORUS ELITE AX', price: 849 },
        { id: 'z790-gaming', name: 'MSI MPG Z790 EDGE WIFI', price: 899 },
        { id: 'z790-aorus', name: 'GIGABYTE Z790 AORUS ELITE AX', price: 999 },
        { id: 'z790-strix', name: 'ASUS ROG STRIX Z790-E GAMING WIFI', price: 1199 }
      ]
    },
    ram: {
      ddr4: [
        { id: 'ddr4-3200-16', name: '16GB DDR4 3200MHz', price: 159 },
        { id: 'ddr4-3600-32', name: '32GB DDR4 3600MHz', price: 319 }
      ],
      ddr5: [
        { id: 'ddr5-5600-32', name: '32GB DDR5 5600MHz', price: 599 },
        { id: 'ddr5-6000-32', name: '32GB DDR5 6000MHz', price: 799 }
      ]
    },
    case: [
      { id: 'cc560', name: 'DeepCool CC560', price: 199 },
      { id: 'lancool205', name: 'Lian Li LANCOOL 205 Mesh', price: 249 },
      { id: '4000d', name: 'Corsair 4000D Airflow', price: 299 },
      { id: '500dx', name: 'be quiet! Pure Base 500DX', price: 349 },
      { id: 'p500a', name: 'Phanteks P500A', price: 399 },
      { id: 'lancool216', name: 'Lian Li LANCOOL 216', price: 399 },
      { id: '5000d', name: 'Corsair 5000D Airflow', price: 449 },
      { id: 'torrent', name: 'Fractal Design Torrent', price: 499 },
      { id: 'o11air', name: 'Lian Li O11 Air Mini', price: 399 },
      { id: 'o11dynamic', name: 'Lian Li O11 Dynamic EVO', price: 599 }
    ],
    psu: [
      { id: 'rm650', name: 'Corsair RM650', power: 650, price: 299 },
      { id: 'rm750', name: 'Corsair RM750', power: 750, price: 349 },
      { id: 'rm850', name: 'Corsair RM850', power: 850, price: 399 },
      { id: 'rm1000', name: 'Corsair RM1000', power: 1000, price: 499 },
      { id: 'rm750x', name: 'Corsair RM750x', power: 750, price: 399 },
      { id: 'rm850x', name: 'Corsair RM850x', power: 850, price: 499 },
      { id: 'rm1000x', name: 'Corsair RM1000x', power: 1000, price: 699 },
      { id: 'straight850', name: 'be quiet! Straight Power 11 850W', power: 850, price: 549 },
      { id: 'straight1000', name: 'be quiet! Straight Power 11 1000W', power: 1000, price: 649 },
      { id: 'thor1000', name: 'ASUS ROG THOR 1000W', power: 1000, price: 799 },
      { id: 'thor1200', name: 'ASUS ROG THOR 1200W', power: 1200, price: 899 }
    ]
  };

  // Проверка совместимости
  const checkCompatibility = (type: string, value: string) => {
    const newComponents = { ...selectedComponents, [type]: value };
    
    // Проверка совместимости процессора и материнской платы
    if (type === 'cpu' || type === 'motherboard') {
      const cpu = components.cpu.amd.find(c => c.id === newComponents.cpu) || 
                 components.cpu.intel.find(c => c.id === newComponents.cpu);
      
      const motherboard = Object.values(components.motherboard)
        .flat()
        .find(m => m.id === newComponents.motherboard);

      if (cpu && motherboard) {
        // Проверка сокета
        const socket = cpu.socket.toLowerCase();
        const mbSocket = (Object.keys(components.motherboard) as Array<keyof typeof components.motherboard>)
          .find(s => components.motherboard[s].some((m: { id: string }) => m.id === motherboard.id));

        if (socket !== mbSocket) {
          alert('Процессор и материнская плата несовместимы по сокету!');
          return false;
        }
      }
    }

    // Проверка мощности БП для видеокарты
    if (type === 'gpu' || type === 'psu') {
      const gpu = components.gpu.find(g => g.id === newComponents.gpu);
      const psu = components.psu.find(p => p.id === newComponents.psu);

      if (gpu && psu && gpu.power > psu.power * 0.6) {
        alert('Блок питания недостаточной мощности для данной видеокарты!');
        return false;
      }
    }

    return true;
  };

  const handleComponentChange = (type: string, value: string) => {
    if (checkCompatibility(type, value)) {
      setSelectedComponents(prev => ({ ...prev, [type]: value }));
    }
  };

  const calculateTotalPrice = () => {
    let total = 0;
    
    // CPU
    const cpu = components.cpu.amd.find(c => c.id === selectedComponents.cpu) || 
               components.cpu.intel.find(c => c.id === selectedComponents.cpu);
    if (cpu) total += cpu.price;
    
    // GPU
    const gpu = components.gpu.find(g => g.id === selectedComponents.gpu);
    if (gpu) total += gpu.price;
    
    // Motherboard
    const motherboard = Object.values(components.motherboard)
      .flat()
      .find(m => m.id === selectedComponents.motherboard);
    if (motherboard) total += motherboard.price;
    
    // RAM
    const ram = [...components.ram.ddr4, ...components.ram.ddr5]
      .find(r => r.id === selectedComponents.ram);
    if (ram) total += ram.price;
    
    // Case
    const pcCase = components.case.find(c => c.id === selectedComponents.case);
    if (pcCase) total += pcCase.price;
    
    // PSU
    const psu = components.psu.find(p => p.id === selectedComponents.psu);
    if (psu) total += psu.price;
    
    return total;
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь можно добавить логику отправки заказа
    alert('Спасибо за заказ! Наш менеджер свяжется с вами в ближайшее время.');
    setShowConfirmModal(false);
    setShowOrderModal(false);
    setOrderDetails({
      name: '',
      phone: '',
      email: '',
      address: ''
    });
  };

  return (
    <>
      <button 
        className="fixed top-4 left-4 z-50 text-[#00ff00] hover:text-[#00cc00] transition-colors drop-shadow-[0_0_10px_rgba(0,255,0,0.5)]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon icon={faBars} size="2x" />
      </button>

      <div className={`fixed top-0 left-0 h-full w-80 bg-black border-r border-[#00ff00] shadow-[0_0_15px_rgba(0,255,0,0.3)] transform transition-transform duration-300 ease-in-out z-40 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 pt-20">
          <div className="flex space-x-4 mb-8">
            <button
              className={`flex-1 py-2 px-4 rounded ${activeTab === 'builds' ? 'bg-[#00ff00] text-black shadow-[0_0_10px_rgba(0,255,0,0.5)]' : 'text-[#00ff00] border border-[#00ff00] hover:shadow-[0_0_10px_rgba(0,255,0,0.3)]'} transition-all`}
              onClick={() => setActiveTab('builds')}
            >
              <FontAwesomeIcon icon={faComputer} className="mr-2" />
              Наши Сборки
            </button>
            <button
              className={`flex-1 py-2 px-4 rounded ${activeTab === 'configurator' ? 'bg-[#00ff00] text-black shadow-[0_0_10px_rgba(0,255,0,0.5)]' : 'text-[#00ff00] border border-[#00ff00] hover:shadow-[0_0_10px_rgba(0,255,0,0.3)]'} transition-all`}
              onClick={() => setActiveTab('configurator')}
            >
              <FontAwesomeIcon icon={faWrench} className="mr-2" />
              Конфигуратор
            </button>
          </div>

          {activeTab === 'configurator' && (
            <div className="space-y-4 max-h-[calc(100vh-180px)] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#00ff00] scrollbar-track-black">
              <div>
                <label className="block text-[#00ff00] mb-2 drop-shadow-[0_0_5px_rgba(0,255,0,0.5)]">Процессор</label>
                <select 
                  className="w-full bg-black border border-[#00ff00] text-white p-2 rounded hover:shadow-[0_0_10px_rgba(0,255,0,0.3)] focus:shadow-[0_0_10px_rgba(0,255,0,0.5)] transition-all max-h-[120px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#00ff00] scrollbar-track-black"
                  value={selectedComponents.cpu}
                  onChange={(e) => handleComponentChange('cpu', e.target.value)}
                  size={5}
                >
                  <option value="">Выберите процессор</option>
                  <optgroup label="AMD">
                    {components.cpu.amd.map(cpu => (
                      <option key={cpu.id} value={cpu.id}>
                        {cpu.name} - {cpu.price} BYN
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Intel">
                    {components.cpu.intel.map(cpu => (
                      <option key={cpu.id} value={cpu.id}>
                        {cpu.name} - {cpu.price} BYN
                      </option>
                    ))}
                  </optgroup>
                </select>
              </div>

              <div>
                <label className="block text-[#00ff00] mb-2 drop-shadow-[0_0_5px_rgba(0,255,0,0.5)]">Видеокарта</label>
                <select 
                  className="w-full bg-black border border-[#00ff00] text-white p-2 rounded hover:shadow-[0_0_10px_rgba(0,255,0,0.3)] focus:shadow-[0_0_10px_rgba(0,255,0,0.5)] transition-all max-h-[120px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#00ff00] scrollbar-track-black"
                  value={selectedComponents.gpu}
                  onChange={(e) => handleComponentChange('gpu', e.target.value)}
                  size={5}
                >
                  <option value="">Выберите видеокарту</option>
                  {components.gpu.map(gpu => (
                    <option key={gpu.id} value={gpu.id}>
                      {gpu.name} - {gpu.price} BYN
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[#00ff00] mb-2 drop-shadow-[0_0_5px_rgba(0,255,0,0.5)]">Материнская плата</label>
                <select 
                  className="w-full bg-black border border-[#00ff00] text-white p-2 rounded hover:shadow-[0_0_10px_rgba(0,255,0,0.3)] focus:shadow-[0_0_10px_rgba(0,255,0,0.5)] transition-all max-h-[120px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#00ff00] scrollbar-track-black"
                  value={selectedComponents.motherboard}
                  onChange={(e) => handleComponentChange('motherboard', e.target.value)}
                  size={5}
                >
                  <option value="">Выберите материнскую плату</option>
                  {Object.entries(components.motherboard).map(([socket, boards]) => (
                    <optgroup key={socket} label={socket.toUpperCase()}>
                      {boards.map(board => (
                        <option key={board.id} value={board.id}>
                          {board.name} - {board.price} BYN
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[#00ff00] mb-2 drop-shadow-[0_0_5px_rgba(0,255,0,0.5)]">Оперативная память</label>
                <select 
                  className="w-full bg-black border border-[#00ff00] text-white p-2 rounded hover:shadow-[0_0_10px_rgba(0,255,0,0.3)] focus:shadow-[0_0_10px_rgba(0,255,0,0.5)] transition-all max-h-[120px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#00ff00] scrollbar-track-black"
                  value={selectedComponents.ram}
                  onChange={(e) => handleComponentChange('ram', e.target.value)}
                  size={5}
                >
                  <option value="">Выберите память</option>
                  <optgroup label="DDR4">
                    {components.ram.ddr4.map(ram => (
                      <option key={ram.id} value={ram.id}>
                        {ram.name} - {ram.price} BYN
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="DDR5">
                    {components.ram.ddr5.map(ram => (
                      <option key={ram.id} value={ram.id}>
                        {ram.name} - {ram.price} BYN
                      </option>
                    ))}
                  </optgroup>
                </select>
              </div>

              <div>
                <label className="block text-[#00ff00] mb-2 drop-shadow-[0_0_5px_rgba(0,255,0,0.5)]">Корпус</label>
                <select 
                  className="w-full bg-black border border-[#00ff00] text-white p-2 rounded hover:shadow-[0_0_10px_rgba(0,255,0,0.3)] focus:shadow-[0_0_10px_rgba(0,255,0,0.5)] transition-all max-h-[120px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#00ff00] scrollbar-track-black"
                  value={selectedComponents.case}
                  onChange={(e) => handleComponentChange('case', e.target.value)}
                  size={5}
                >
                  <option value="">Выберите корпус</option>
                  {components.case.map(c => (
                    <option key={c.id} value={c.id}>
                      {c.name} - {c.price} BYN
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[#00ff00] mb-2 drop-shadow-[0_0_5px_rgba(0,255,0,0.5)]">Блок питания</label>
                <select 
                  className="w-full bg-black border border-[#00ff00] text-white p-2 rounded hover:shadow-[0_0_10px_rgba(0,255,0,0.3)] focus:shadow-[0_0_10px_rgba(0,255,0,0.5)] transition-all max-h-[120px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#00ff00] scrollbar-track-black"
                  value={selectedComponents.psu}
                  onChange={(e) => handleComponentChange('psu', e.target.value)}
                  size={5}
                >
                  <option value="">Выберите блок питания</option>
                  {components.psu.map(psu => (
                    <option key={psu.id} value={psu.id}>
                      {psu.name} - {psu.price} BYN
                    </option>
                  ))}
                </select>
              </div>

              <button 
                className="w-full py-3 bg-[#00ff00] text-black rounded font-bold hover:bg-[#00cc00] shadow-[0_0_10px_rgba(0,255,0,0.3)] hover:shadow-[0_0_15px_rgba(0,255,0,0.5)] transition-all"
                onClick={() => {
                  if (Object.values(selectedComponents).some(v => !v)) {
                    alert('Пожалуйста, выберите все компоненты!');
                    return;
                  }
                  setShowOrderModal(true);
                }}
              >
                Собрать ПК
              </button>
            </div>
          )}

          {activeTab === 'builds' && (
            <div className="space-y-4">
              <a href="#configs" className="block p-4 border border-[#00ff00] rounded text-[#00ff00] hover:bg-[#00ff00] hover:text-black shadow-[0_0_10px_rgba(0,255,0,0.3)] hover:shadow-[0_0_15px_rgba(0,255,0,0.5)] transition-all">
                Все конфигурации
              </a>
              <a href="#gaming" className="block p-4 border border-[#00ff00] rounded text-[#00ff00] hover:bg-[#00ff00] hover:text-black shadow-[0_0_10px_rgba(0,255,0,0.3)] hover:shadow-[0_0_15px_rgba(0,255,0,0.5)] transition-all">
                Игровые ПК
              </a>
              <a href="#office" className="block p-4 border border-[#00ff00] rounded text-[#00ff00] hover:bg-[#00ff00] hover:text-black shadow-[0_0_10px_rgba(0,255,0,0.3)] hover:shadow-[0_0_15px_rgba(0,255,0,0.5)] transition-all">
                Офисные ПК
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Модальное окно с суммой */}
      {showOrderModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-black border border-[#00ff00] p-6 rounded-lg shadow-[0_0_20px_rgba(0,255,0,0.3)] max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-[#00ff00] text-xl font-bold">Ваша конфигурация</h2>
              <button 
                onClick={() => setShowOrderModal(false)}
                className="text-[#00ff00] hover:text-[#00cc00] transition-colors"
              >
                <FontAwesomeIcon icon={faTimes} size="lg" />
              </button>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-white">
                <span>Процессор:</span>
                <span>{(components.cpu.amd.find(c => c.id === selectedComponents.cpu) || 
                        components.cpu.intel.find(c => c.id === selectedComponents.cpu))?.name}</span>
              </div>
              <div className="flex justify-between text-white">
                <span>Видеокарта:</span>
                <span>{components.gpu.find(g => g.id === selectedComponents.gpu)?.name}</span>
              </div>
              <div className="flex justify-between text-white">
                <span>Материнская плата:</span>
                <span>{Object.values(components.motherboard)
                  .flat()
                  .find(m => m.id === selectedComponents.motherboard)?.name}</span>
              </div>
              <div className="flex justify-between text-white">
                <span>Память:</span>
                <span>{[...components.ram.ddr4, ...components.ram.ddr5]
                  .find(r => r.id === selectedComponents.ram)?.name}</span>
              </div>
              <div className="flex justify-between text-white">
                <span>Корпус:</span>
                <span>{components.case.find(c => c.id === selectedComponents.case)?.name}</span>
              </div>
              <div className="flex justify-between text-white">
                <span>Блок питания:</span>
                <span>{components.psu.find(p => p.id === selectedComponents.psu)?.name}</span>
              </div>
              
              <div className="border-t border-[#00ff00] pt-4">
                <div className="flex justify-between text-xl font-bold">
                  <span className="text-[#00ff00]">Итого:</span>
                  <span className="text-[#00ff00]">{calculateTotalPrice()} BYN</span>
                </div>
              </div>
            </div>
            
            <button 
              className="w-full py-3 bg-[#00ff00] text-black rounded font-bold hover:bg-[#00cc00] shadow-[0_0_10px_rgba(0,255,0,0.3)] hover:shadow-[0_0_15px_rgba(0,255,0,0.5)] transition-all"
              onClick={() => {
                setShowOrderModal(false);
                setShowConfirmModal(true);
              }}
            >
              Оформить заказ
            </button>
          </div>
        </div>
      )}

      {/* Модальное окно оформления заказа */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-black border border-[#00ff00] p-6 rounded-lg shadow-[0_0_20px_rgba(0,255,0,0.3)] max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-[#00ff00] text-xl font-bold">Оформление заказа</h2>
              <button 
                onClick={() => setShowConfirmModal(false)}
                className="text-[#00ff00] hover:text-[#00cc00] transition-colors"
              >
                <FontAwesomeIcon icon={faTimes} size="lg" />
              </button>
            </div>

            <form onSubmit={handleOrderSubmit} className="space-y-4">
              <div>
                <label className="block text-[#00ff00] mb-2">Ваше имя</label>
                <input
                  type="text"
                  required
                  className="w-full bg-black border border-[#00ff00] text-white p-2 rounded focus:outline-none focus:shadow-[0_0_10px_rgba(0,255,0,0.5)]"
                  value={orderDetails.name}
                  onChange={(e) => setOrderDetails(prev => ({ ...prev, name: e.target.value }))}
                />
              </div>
              
              <div>
                <label className="block text-[#00ff00] mb-2">Телефон</label>
                <input
                  type="tel"
                  required
                  className="w-full bg-black border border-[#00ff00] text-white p-2 rounded focus:outline-none focus:shadow-[0_0_10px_rgba(0,255,0,0.5)]"
                  value={orderDetails.phone}
                  onChange={(e) => setOrderDetails(prev => ({ ...prev, phone: e.target.value }))}
                />
              </div>
              
              <div>
                <label className="block text-[#00ff00] mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full bg-black border border-[#00ff00] text-white p-2 rounded focus:outline-none focus:shadow-[0_0_10px_rgba(0,255,0,0.5)]"
                  value={orderDetails.email}
                  onChange={(e) => setOrderDetails(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>
              
              <div>
                <label className="block text-[#00ff00] mb-2">Адрес доставки</label>
                <textarea
                  required
                  className="w-full bg-black border border-[#00ff00] text-white p-2 rounded focus:outline-none focus:shadow-[0_0_10px_rgba(0,255,0,0.5)] min-h-[100px]"
                  value={orderDetails.address}
                  onChange={(e) => setOrderDetails(prev => ({ ...prev, address: e.target.value }))}
                />
              </div>

              <button 
                type="submit"
                className="w-full py-3 bg-[#00ff00] text-black rounded font-bold hover:bg-[#00cc00] shadow-[0_0_10px_rgba(0,255,0,0.3)] hover:shadow-[0_0_15px_rgba(0,255,0,0.5)] transition-all"
              >
                Подтвердить заказ
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
} 