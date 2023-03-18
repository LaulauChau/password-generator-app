import React from 'react';

export const OptionsContext = React.createContext<any>(null);

const initialState = {
  password: '',
  length: 10,
  options: {
    uppercase: true,
    lowercase: true,
    numbers: false,
    symbols: false,
  },
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'password':
      return { ...state, password: action.payload };
    case 'length':
      return { ...state, length: action.payload };
    case 'uppercase':
      return {
        ...state,
        options: { ...state.options, uppercase: action.payload },
      };
    case 'lowercase':
      return {
        ...state,
        options: { ...state.options, lowercase: action.payload },
      };
    case 'numbers':
      return {
        ...state,
        options: { ...state.options, numbers: action.payload },
      };
    case 'symbols':
      return {
        ...state,
        options: { ...state.options, symbols: action.payload },
      };
    default:
      return state;
  }
}

export function OptionsProvider({ children }: any) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const store = React.useMemo(() => ({ state, dispatch }), [state]);

  return (
    <OptionsContext.Provider value={store}>{children}</OptionsContext.Provider>
  );
}

export const useContext = () => {
  const context = React.useContext(OptionsContext);

  if (context === undefined) {
    throw new Error('useContext must be used within a OptionsProvider');
  }

  return context;
};
