import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Configuration } from '../data/configs';

interface ConfigModalProps {
  config: Configuration;
  onClose: () => void;
  onOrder: () => void;
}

export default function ConfigModal({ config, onClose, onOrder }: ConfigModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-black border border-[#00ff00] p-6 rounded-lg shadow-[0_0_20px_rgba(0,255,0,0.3)] max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[#00ff00] text-2xl font-bold">{config.title}</h2>
          <button 
            onClick={onClose}
            className="text-[#00ff00] hover:text-[#00cc00] transition-colors"
          >
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </button>
        </div>

        <div className="space-y-6 mb-6">
          <div>
            <h3 className="text-[#00ff00] text-xl mb-3">Характеристики</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#00ff00]">Процессор:</span>
                  <span className="text-white">{config.specs.cpu}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#00ff00]">Видеокарта:</span>
                  <span className="text-white">{config.specs.gpu}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#00ff00]">Память:</span>
                  <span className="text-white">{config.specs.ram}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#00ff00]">Накопитель:</span>
                  <span className="text-white">{config.specs.storage}</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#00ff00]">Материнская плата:</span>
                  <span className="text-white">{config.specs.motherboard}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#00ff00]">Охлаждение:</span>
                  <span className="text-white">{config.specs.cooling}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#00ff00]">Блок питания:</span>
                  <span className="text-white">{config.specs.psu}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#00ff00]">Корпус:</span>
                  <span className="text-white">{config.specs.case}</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-[#00ff00] text-xl mb-3">Производительность в играх</h3>
            <div className="grid grid-cols-1 gap-4">
              {config.performance.map((perf, index) => (
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

          <div className="border-t border-[#00ff00]/20 pt-4">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-[#00ff00] text-2xl font-bold">{config.price} BYN</span>
                {config.oldPrice && (
                  <span className="text-[#00ff00]/50 line-through ml-2">{config.oldPrice} BYN</span>
                )}
              </div>
              <button 
                onClick={onOrder}
                className="py-2 px-6 bg-[#00ff00] text-black rounded font-bold hover:bg-[#00cc00] shadow-[0_0_10px_rgba(0,255,0,0.3)] hover:shadow-[0_0_15px_rgba(0,255,0,0.5)] transition-all"
              >
                Заказать
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 