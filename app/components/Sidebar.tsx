import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faComputer, faWrench, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { configs } from '../../data/configs';
import { components } from '../../data/components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface SidebarProps {
  onConfigChange: (config: any) => void;
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  address: string;
}

interface Component {
  id: string;
  name: string;
  price: number;
  socket?: string;
  power?: number;
}

export default function Sidebar({ onConfigChange }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'builds' | 'configurator'>('builds');
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedConfig, setSelectedConfig] = useState<keyof typeof configs | null>(null);
  const [formData, setFormData] = useState<FormData>({
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
    const handleOrderConfig = (e: CustomEvent<string>) => {
      setSelectedConfig(e.detail as keyof typeof configs);
      setShowConfirmModal(true);
    };
    
    document.addEventListener('toggleSidebar', handleToggle);
    document.addEventListener('orderConfig', handleOrderConfig as EventListener);
    
    return () => {
      document.removeEventListener('toggleSidebar', handleToggle);
      document.removeEventListener('orderConfig', handleOrderConfig as EventListener);
    };
  }, []);

  const handleComponentChange = (type: string, value: string) => {
    const newComponents = { ...selectedComponents, [type]: value };
    setSelectedComponents(newComponents);
    
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
          alert('Выбранные процессор и материнская плата несовместимы по сокету!');
          setSelectedComponents(prev => ({
            ...prev,
            [type]: ''
          }));
          return;
        }
      }
    }

    // Проверка мощности БП для видеокарты
    if (type === 'gpu' || type === 'psu') {
      const gpu = components.gpu.find(g => g.id === newComponents.gpu);
      const psu = components.psu.find(p => p.id === newComponents.psu);

      if (gpu && psu && gpu.power > psu.power * 0.6) {
        alert('Мощности блока питания может не хватить для данной видеокарты!');
        setSelectedComponents(prev => ({
          ...prev,
          [type]: ''
        }));
        return;
      }
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

  const handleOrderSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      let orderInfo;
      
      if (selectedConfig) {
        // Если выбрана готовая конфигурация
        const config = configs[selectedConfig];
        orderInfo = {
          ...formData,
          config: selectedConfig,
          components: config.specs,
          totalPrice: config.price
        };
      } else {
        // Если используется конфигуратор
        const cpu = components.cpu.amd.find(c => c.id === selectedComponents.cpu) || 
                   components.cpu.intel.find(c => c.id === selectedComponents.cpu);
        const gpu = components.gpu.find(g => g.id === selectedComponents.gpu);
        const motherboard = Object.values(components.motherboard)
          .flat()
          .find(m => m.id === selectedComponents.motherboard);
        const ram = [...components.ram.ddr4, ...components.ram.ddr5]
          .find(r => r.id === selectedComponents.ram);
        const pcCase = components.case.find(c => c.id === selectedComponents.case);
        const psu = components.psu.find(p => p.id === selectedComponents.psu);

        orderInfo = {
          ...formData,
          components: {
            cpu: cpu?.name,
            gpu: gpu?.name,
            motherboard: motherboard?.name,
            ram: ram?.name,
            case: pcCase?.name,
            psu: psu?.name
          },
          totalPrice: calculateTotalPrice()
        };
      }

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderInfo)
      });

      if (!response.ok) {
        throw new Error('Failed to send order');
      }

      toast.success('Заказ успешно отправлен! Мы свяжемся с вами в ближайшее время.');
      setShowConfirmModal(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        address: ''
      });
      setSelectedConfig(null);
    } catch (error) {
      console.error('Error submitting order:', error);
      toast.error('Произошла ошибка при отправке заказа. Пожалуйста, попробуйте позже.');
    }
  };

  return (
    <>
      <ToastContainer position="top-right" />
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
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Введите ваше имя"
                />
              </div>
              
              <div>
                <label className="block text-[#00ff00] mb-2">Телефон</label>
                <input
                  type="tel"
                  required
                  className="w-full bg-black border border-[#00ff00] text-white p-2 rounded focus:outline-none focus:shadow-[0_0_10px_rgba(0,255,0,0.5)]"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="+375 (__) ___-__-__"
                />
              </div>
              
              <div>
                <label className="block text-[#00ff00] mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full bg-black border border-[#00ff00] text-white p-2 rounded focus:outline-none focus:shadow-[0_0_10px_rgba(0,255,0,0.5)]"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label className="block text-[#00ff00] mb-2">Адрес доставки</label>
                <textarea
                  required
                  className="w-full bg-black border border-[#00ff00] text-white p-2 rounded focus:outline-none focus:shadow-[0_0_10px_rgba(0,255,0,0.5)]"
                  value={formData.address}
                  onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                  placeholder="Введите адрес доставки"
                  rows={3}
                />
              </div>

              <button 
                type="submit"
                className="w-full py-3 bg-[#00ff00] text-black rounded font-bold hover:bg-[#00cc00] shadow-[0_0_10px_rgba(0,255,0,0.3)] hover:shadow-[0_0_15px_rgba(0,255,0,0.5)] transition-all"
              >
                Отправить заказ
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
} 