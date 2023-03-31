import React from 'react';

import './App.css';
import { Header } from './components/Header/Header';
import { MainPanel } from './components/MainPanel/MainPanel';
import { SideMenu } from './components/SideMenu/SideMenu';

function App() {
  return (
    <div className="App">
      <Header />
      <MainPanel />
    </div>
  );
}

export default App;
