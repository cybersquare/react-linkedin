import React from 'react';
import Header  from './components/Header/Header';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';

function App() {
  return (
    <div className="app">
      <Header/>
      <div className='app__body'>
        <Sidebar/>
        <Feed/>
      </div>
    </div>
  );
}

export default App;
