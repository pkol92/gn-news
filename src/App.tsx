import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { Header } from './components/Header/Header';
import { MainPanel } from './components/MainPanel/MainPanel';
import i18n from './i18n';
import { RootState } from './store/store';

function App() {
  const language = useSelector((state: RootState) => state.language);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <div className="App">
      <Header />
      <MainPanel />
    </div>
  );
}

export default App;
