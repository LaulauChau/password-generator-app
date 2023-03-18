import { useContext } from '@/contexts/options.context';

export function LengthSlider() {
  const { state, dispatch } = useContext();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({ type: 'length', payload: Number(e.target.value) });
  }

  return (
    <>
      <span className="flex items-center justify-between">
        <p className="text-almost-white text-base sm:body">Character Length</p>
        <p className="head-m sm:head-l text-neon-green">{state.length}</p>
      </span>
      <input
        type="range"
        min="1"
        max="20"
        value={state.length}
        onChange={handleChange}
        className="w-full mt-4 sm:mt-6 bg-very-dark-grey appearance-none cursor-pointer h-2"
      />
    </>
  );
}
