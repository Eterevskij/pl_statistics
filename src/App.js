import React, {useState} from 'react';
import 'antd/dist/antd.css';
import './App.css';

import StatisticsCards from './components/StatisticsCards';
import Services from './components/Services';





function App() {


  return (
    <div className="App">
      <div className="container">

          <StatisticsCards />
          <Services />


      </div>
    </div>
  );
}

export default App;
