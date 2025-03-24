'use client';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMicrochip, 
  faDesktop, 
  faServer, 
  faLaptop, 
  faChevronRight,
  faTimes,
  faSort,
  faSortUp,
  faSortDown,
  faRocket,
  faShieldAlt,
  faHeadset,
  faBars
} from '@fortawesome/free-solid-svg-icons';
import { configs, fullSpecs, contacts } from '../data/configs';
import type { ComponentSpecs, MotherboardSpecs, CoolingSpecs, CaseSpecs, PSUSpecs } from '../data/configs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from './components/Sidebar';

interface Configuration {
  title: string;
  price: number;
  oldPrice: number;
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
  performance: {
    game: string;
    fps: string;
    settings: string;
    resolution: string;
  }[];
}

type Configurations = {
  [key: string]: Configuration;
};

const typedConfigs = configs as Configurations;
const typedFullSpecs = fullSpecs as Configurations;

type ConfigKey = keyof typeof configs;
type Configs = typeof configs;
type FullSpecs = typeof fullSpecs;

export default function Home() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isSpecsModalOpen, setIsSpecsModalOpen] = useState(false);
  const [currentConfig, setCurrentConfig] = useState('');
  const [priceRange, setPriceRange] = useState(5000);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [selectedConfig, setSelectedConfig] = useState<string | null>(null);

  useEffect(() => {
    console.log('Current email:', contacts.email);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Add body scroll lock when modal is open
  useEffect(() => {
    if (isSpecsModalOpen || isOrderModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSpecsModalOpen, isOrderModalOpen]);

  const handleOrderClick = (configId: string) => {
    setCurrentConfig(configId);
    setIsOrderModalOpen(true);
  };

  const handleSpecsClick = (configId: string) => {
    setCurrentConfig(configId);
    setIsSpecsModalOpen(true);
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Заказ успешно отправлен! Мы свяжемся с вами в ближайшее время.');
    setIsOrderModalOpen(false);
  };

  const handleSort = () => {
    setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
  };

  const filteredConfigs = Object.entries(typedConfigs)
    .filter(([_, config]) => config.price <= priceRange)
    .sort(([_, a], [__, b]) => sortOrder === 'asc' ? a.price - b.price : b.price - a.price);

  const handleConfigChange = (config: any) => {
    // Здесь будет логика обработки выбранной конфигурации
    console.log('Selected configuration:', config);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <Sidebar onConfigChange={handleConfigChange} />
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-black border-b border-[#00ff00]/20">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <button 
                className="text-[#00ff00] hover:text-[#00cc00] transition-colors"
                onClick={() => document.dispatchEvent(new Event('toggleSidebar'))}
              >
                <FontAwesomeIcon icon={faBars} size="lg" />
              </button>
              <div className="text-3xl font-bold text-[#00ff00]">DeepPC</div>
            </div>
            <div className="space-x-8">
              <a href="#about" className="text-[#00ff00] hover:text-[#00cc00] transition-colors">О нас</a>
              <a href="#configs" className="text-[#00ff00] hover:text-[#00cc00] transition-colors">Конфигурации</a>
              <a href="#contact" className="text-[#00ff00] hover:text-[#00cc00] transition-colors">Контакты</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-black">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 neon-text">
            Профессиональная сборка компьютеров
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            От бюджетных до топовых решений для любых задач
          </p>
          <a href="#configs" className="modern-button">
            Смотреть конфигурации
            <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 bg-white ${visibleSections.has('about') ? 'section-fade-in visible' : 'section-fade-in'}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">О нас</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-8 hover-card rounded-xl">
              <FontAwesomeIcon icon={faRocket} className="text-5xl text-blue-600 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Профессиональная сборка</h3>
              <p className="text-gray-600">Собираем компьютеры с учетом всех требований и пожеланий клиента</p>
            </div>
            <div className="text-center p-8 hover-card rounded-xl">
              <FontAwesomeIcon icon={faShieldAlt} className="text-5xl text-blue-600 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Гарантия качества</h3>
              <p className="text-gray-600">Предоставляем гарантию на все комплектующие и сборку</p>
            </div>
            <div className="text-center p-8 hover-card rounded-xl">
              <FontAwesomeIcon icon={faHeadset} className="text-5xl text-blue-600 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Техническая поддержка</h3>
              <p className="text-gray-600">Оказываем техническую поддержку и консультации</p>
            </div>
          </div>
        </div>
      </section>

      {/* Configurations Section */}
      <section id="configs" className={`py-20 bg-gray-50 ${visibleSections.has('configs') ? 'section-fade-in visible' : 'section-fade-in'}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Конфигурации</h2>
          
          {/* Filters */}
          <div className="mb-12 flex flex-col md:flex-row justify-between items-center gap-6 bg-white p-6 rounded-xl shadow-sm">
            <div className="w-full md:w-1/3">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Максимальная цена: {priceRange} BYN
              </label>
              <input
                type="range"
                min="0"
                max="40000"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            <button
              onClick={handleSort}
              className="modern-button flex items-center gap-2"
            >
              <span>Сортировка по цене</span>
              <FontAwesomeIcon icon={sortOrder === 'asc' ? faSortUp : faSortDown} />
            </button>
          </div>

          {/* Configurations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredConfigs.map(([key, config]) => (
              <div key={key} className="bg-black rounded-xl shadow-sm hover-card overflow-hidden border border-[#00ff00]/20">
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-semibold text-[#00ff00]">{config.title}</h3>
                    {config.oldPrice && (
                      <div className="bg-[#00ff00] text-black px-3 py-1 rounded-full text-sm font-bold">
                        -{Math.round((1 - config.price / config.oldPrice) * 100)}%
                      </div>
                    )}
                  </div>
                  <div className="flex items-end gap-2 mb-6">
                    <p className="text-3xl font-bold text-[#00ff00] price-pulse">{config.price} BYN</p>
                    {config.oldPrice && (
                      <p className="text-xl text-gray-500 line-through">{config.oldPrice} BYN</p>
                    )}
                  </div>
                  <div className="space-y-3 mb-8 text-gray-300">
                    <p className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faMicrochip} className="text-[#00ff00]" />
                      <span><strong>CPU:</strong> {config.specs.cpu}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faDesktop} className="text-[#00ff00]" />
                      <span><strong>GPU:</strong> {config.specs.gpu}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faServer} className="text-[#00ff00]" />
                      <span><strong>RAM:</strong> {config.specs.ram}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faLaptop} className="text-[#00ff00]" />
                      <span><strong>Storage:</strong> {config.specs.storage}</span>
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <button
                      onClick={() => handleSpecsClick(key)}
                      className="flex-1 px-4 py-3 bg-black border border-[#00ff00] text-[#00ff00] rounded-lg hover:bg-[#00ff00]/10 transition-all"
                    >
                      Характеристики
                    </button>
                    <button
                      onClick={() => handleOrderClick(key)}
                      className="flex-1 px-4 py-3 bg-[#00ff00] text-black rounded-lg hover:bg-[#00ff00]/90 transition-all font-bold"
                    >
                      Заказать
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 bg-white ${visibleSections.has('contact') ? 'section-fade-in visible' : 'section-fade-in'}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Контакты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-xl hover-card">
              <h3 className="text-2xl font-semibold mb-6 neon-text">Наши контакты</h3>
              <div className="space-y-4">
                <p className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faDesktop} className="text-[#00ff00]" />
                  <span><strong>Адрес: </strong>
                    <a 
                      href="https://maps.google.com/?q=Минск,+Жудро+39" 
          target="_blank"
          rel="noopener noreferrer"
                      className="hover:text-[#00ff00] transition-colors"
                    >
                      г. Минск, Жудро 39
                    </a>
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faHeadset} className="text-[#00ff00]" />
                  <span><strong>Телефон: </strong>
                    <a href="tel:+375256729705" className="hover:text-[#00ff00] transition-colors">
                      +375 (25) 672-97-05
                    </a>
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faServer} className="text-[#00ff00]" />
                  <span><strong>Email: </strong>
                    <a href={`mailto:${contacts.email}`} className="hover:text-[#00ff00] transition-colors">
                      {contacts.email}
                    </a>
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <svg className="w-4 h-4 fill-[#00ff00]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                    <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"/>
                  </svg>
                  <span><strong>Telegram: </strong>
                    <a href="https://t.me/wez1z" target="_blank" rel="noopener noreferrer" className="hover:text-[#00ff00] transition-colors">
                      @wez1z
                    </a>
                  </span>
                </p>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl hover-card">
              <h3 className="text-2xl font-semibold mb-6 neon-text">Режим работы</h3>
              <div className="space-y-4">
                <p className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faMicrochip} className="text-[#00ff00]" />
                  <span>Пн-Пт: 9:00 - 18:00</span>
                </p>
                <p className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faMicrochip} className="text-[#00ff00]" />
                  <span>Сб: 10:00 - 15:00</span>
                </p>
                <p className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faMicrochip} className="text-[#00ff00]" />
                  <span>Вс: Выходной</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order Modal */}
      {isOrderModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-8 shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-semibold gradient-text">Оформление заказа</h3>
              <button
                onClick={() => setIsOrderModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <form onSubmit={handleOrderSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Комментарий
                </label>
                <textarea
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  rows={4}
                />
              </div>
              <button
                type="submit"
                className="w-full modern-button"
              >
                Отправить заказ
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Specs Modal */}
      {isSpecsModalOpen && currentConfig && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" 
             style={{ overflow: 'hidden' }}
             onClick={(e) => {
               if (e.target === e.currentTarget) {
                 setIsSpecsModalOpen(false);
               }
             }}>
          <div className="bg-black rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto flex flex-col p-8 shadow-xl border border-[#00ff00]">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-semibold neon-text">
                {typedFullSpecs[currentConfig].title} - Характеристики
              </h3>
              <button
                onClick={() => setIsSpecsModalOpen(false)}
                className="text-[#00ff00] hover:text-[#00ff00]/70 transition-colors"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>

            <div className="space-y-8">
              {/* Характеристики */}
              <div>
                <h4 className="text-xl font-semibold text-[#00ff00] mb-4">Комплектующие</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-[#00ff00]">Процессор:</span>
                      <span className="text-white">{typedFullSpecs[currentConfig].specs.cpu}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#00ff00]">Видеокарта:</span>
                      <span className="text-white">{typedFullSpecs[currentConfig].specs.gpu}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#00ff00]">Память:</span>
                      <span className="text-white">{typedFullSpecs[currentConfig].specs.ram}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#00ff00]">Накопитель:</span>
                      <span className="text-white">{typedFullSpecs[currentConfig].specs.storage}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-[#00ff00]">Материнская плата:</span>
                      <span className="text-white">{typedFullSpecs[currentConfig].specs.motherboard}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#00ff00]">Охлаждение:</span>
                      <span className="text-white">{typedFullSpecs[currentConfig].specs.cooling}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#00ff00]">Блок питания:</span>
                      <span className="text-white">{typedFullSpecs[currentConfig].specs.psu}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#00ff00]">Корпус:</span>
                      <span className="text-white">{typedFullSpecs[currentConfig].specs.case}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Производительность в играх */}
              <div>
                <h4 className="text-xl font-semibold text-[#00ff00] mb-4">Производительность в играх</h4>
                <div className="grid grid-cols-1 gap-4">
                  {typedFullSpecs[currentConfig].performance.map((perf, index) => (
                    <div key={index} className="border border-[#00ff00]/20 rounded p-3 hover:border-[#00ff00] transition-colors">
                      <div className="flex justify-between items-center">
                        <span className="text-[#00ff00] font-bold">{perf.game}</span>
                        <span className="text-white bg-[#00ff00]/10 px-3 py-1 rounded">{perf.fps} FPS</span>
                      </div>
                      <div className="text-[#00ff00]/80 text-sm mt-1">
                        {perf.settings} • {perf.resolution}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Цена */}
              <div className="border-t border-[#00ff00]/20 pt-4">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-[#00ff00] text-2xl font-bold">{typedFullSpecs[currentConfig].price} BYN</span>
                    {typedFullSpecs[currentConfig].oldPrice && (
                      <span className="text-[#00ff00]/50 line-through ml-2">{typedFullSpecs[currentConfig].oldPrice} BYN</span>
                    )}
                  </div>
                  <button 
                    onClick={() => {
                      setIsSpecsModalOpen(false);
                      handleOrderClick(currentConfig);
                    }}
                    className="py-2 px-6 bg-[#00ff00] text-black rounded font-bold hover:bg-[#00cc00] shadow-[0_0_10px_rgba(0,255,0,0.3)] hover:shadow-[0_0_15px_rgba(0,255,0,0.5)] transition-all"
                  >
                    Заказать
                  </button>
                </div>
              </div>
            </div>
          </div>
    </div>
      )}

      <ToastContainer position="top-right" />
    </main>
  );
}
