import React from 'react';
import ReactDOM from 'react-dom/client';

import { OptionsProvider } from '@/contexts/options.context';
import '@/styles/index.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <OptionsProvider>
      <App />
    </OptionsProvider>
  </React.StrictMode>
);
