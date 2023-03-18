import React from 'react';

import { useContext } from '@/contexts/options.context';

import CopyIcon from '@/assets/icon-copy.svg';

export function TextField() {
  const { state } = useContext();
  const [isCopied, setIsCopied] = React.useState(false);

  function handleClick() {
    setIsCopied(true);

    if (state.password) {
      navigator.clipboard.writeText(state.password);
    }
  }

  React.useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isCopied) {
      timeout = setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isCopied]);

  return (
    <div className="flex items-center justify-between bg-dark-grey p-4 sm:pt-5 sm:px-8 w-full">
      <p
        className={`head-m sm:head-l text-almost-white max-w-[21ch] break-words flex-1 ${
          !state.password ? 'opacity-25' : ''
        } ${!state.password ? 'select-none' : ''}`}
      >
        {state.password ? state.password : 'P4$5W0rD!'}
      </p>
      <div className="flex items-center justify-center gap-4">
        {isCopied ? <p className="body text-neon-green">COPIED</p> : null}
        <button
          type="button"
          onClick={handleClick}
          disabled={!state.password}
          className="hover:brightness-0 hover:invert disabled:cursor-default disabled:hover:brightness-100 disabled:hover:invert-0"
        >
          <img src={CopyIcon} alt="Copy" />
        </button>
      </div>
    </div>
  );
}
