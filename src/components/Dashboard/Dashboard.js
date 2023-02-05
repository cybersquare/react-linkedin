import React from 'react';
import Header  from '../Header/Header';
import './Dashboard.css';
import Sidebar from '../Sidebar/Sidebar';
import Feed from '../Feed/Feed';
import Widget from '../Widget/Widget';
import {Helmet} from "react-helmet";

function Dashboard() {
  return (
    <div className="app">
       <Helmet>
                <title>Feed | LinkedIn</title>
       </Helmet>  
      <Header/>
      <div className='app__body'>
        <Sidebar/>
        <Feed/>
        <Widget/>
      </div>
    </div>
  );
}

export default Dashboard;
