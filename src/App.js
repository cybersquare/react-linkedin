import React from 'react';
import Header  from './components/Header/Header';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      <Header/>
      <div className='app__body'>
        <Sidebar/>
      </div>
    </div>
  );
}

export default App;
