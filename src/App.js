import React, {useState} from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Select } from 'antd';

import StatisticsCards from './components/StatisticsCards';
import Services from './components/Services';

import { ReactComponent as Calendar } from './icons/Calendar.svg';
import { ReactComponent as SelectIcon } from './icons/SelectIcon.svg';


const { Option } = Select;

function App() {


  return (
    <div className="App">
      <div className="container">
        <div className="statistics">

          <div className="statistics__header">
            <p className="statistics__header__title">Статистика</p>
            <div className="statistics__header__period">
              <Calendar className="statistics__header__period__icon" />

              <Select className="statistics__header__period__select"
                defaultValue="allTime"
                suffixIcon={<SelectIcon />}>
                <Option value="allTime">За все время</Option>
                <Option value="option2">Вариант 2</Option>
                <Option value="option3">Вариант 3</Option>

              </Select>

            </div>
          </div>

          <div className="statistics__wrapper">

            <StatisticsCards />

          </div>

        </div>

      
        <Services />


      </div>
    </div>
  );
}

export default App;
