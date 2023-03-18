import { useContext } from '@/contexts/options.context';
import {
  calculateStrengh,
  getStrengthColor,
  getStrengthText,
} from '@/utils/password-strength';

export function Strength() {
  const { state } = useContext();
  const strength = calculateStrengh(state.length, state.options);

  return (
    <div className="bg-very-dark-grey p-4 sm:py-6 sm:px-8 mt-8 flex items-center justify-between">
      <p className="text-grey text-base sm:body">STRENGTH</p>
      <div className="flex items-center gap-4">
        <p className="text-almost-white body sm:head-m">
          {getStrengthText(strength)}
        </p>
        <div className="flex items-center gap-2">
          {Array.from({ length: 4 }, (_, i) => (
            <Rectangle key={i} index={i} strength={strength} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Rectangle({ index, strength }: { index: number; strength: number }) {
  return (
    <div
      className={`w-3 h-7 border-2 ${getStrengthColor(index, strength)}`}
    ></div>
  );
}
