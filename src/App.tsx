import React from 'react';

import './App.css';
import Home from "./sections/Home"
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
function App() {
  return (
    <div className="App">
      <I18nextProvider i18n={i18n}>
    <Home/>
    </I18nextProvider>
    </div>
  );
}

export default App;
