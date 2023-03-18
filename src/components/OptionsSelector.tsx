import { useContext } from '@/contexts/options.context';

const possibleCharacters = [
  { option: 'uppercase', label: 'Uppercase Letters' },
  { option: 'lowercase', label: 'Lowercase Letters' },
  { option: 'numbers', label: 'Numbers' },
  { option: 'symbols', label: 'Symbols' },
];

export function OptionsSelector() {
  const { state, dispatch } = useContext();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, checked } = e.target;

    dispatch({ type: name, payload: checked });
  }

  return (
    <div className="pt-8">
      {possibleCharacters.map((option) => (
        <div
          className="flex items-center mt-4 sm:mt-6 gap-5 sm:gap-6"
          key={option.label}
        >
          <input
            type="checkbox"
            className="cursor-pointer w-5 h-5 accent-neon-green"
            checked={state.options[option.option]}
            name={option.option}
            onChange={handleChange}
          />
          <label className="text-almost-white text-base sm:body">{`Include ${option.label}`}</label>
        </div>
      ))}
    </div>
  );
}
