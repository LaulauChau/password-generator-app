import React from 'react';

import { CallToAction } from '@/components/CallToAction';
import { LengthSlider } from '@/components/LengthSlider';
import { OptionsSelector } from '@/components/OptionsSelector';
import { Strength } from '@/components/Strength';
import { TextField } from '@/components/TextField';

import { useContext } from '@/contexts/options.context';
import { generatePassword } from '@/utils/generatePassword';

export default function App() {
  const { state, dispatch } = useContext();

  function handleGenerate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const password = generatePassword(state.length, state.options);
    dispatch({ type: 'password', payload: password });
  }

  return (
    <main className="h-screen bg-very-dark-grey flex flex-col items-center font-mono px-4 pt-32 pb-16 gap-4 sm:gap-8">
      <h1 className="head-m text-grey">Password Generator</h1>
      <form
        className="flex flex-col items-center gap-4 sm:gap-6 max-w-xl w-full max-h-fit"
        onSubmit={handleGenerate}
      >
        <TextField />
        <div className="flex-1 bg-dark-grey w-full p-4 sm:p-8">
          <LengthSlider />
          <OptionsSelector />
          <Strength />
          <CallToAction />
        </div>
      </form>
    </main>
  );
}
