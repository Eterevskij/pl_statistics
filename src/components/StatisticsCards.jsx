import React from 'react';
import { Row, Select } from 'antd';

import SmallCard from './SmallCard';

import { ReactComponent as Clients } from '../icons/Clients.svg';
import { ReactComponent as Applications } from '../icons/Applications.svg';
import { ReactComponent as Home } from '../icons/Home.svg';
import { ReactComponent as CheckCircle } from '../icons/CheckCircle.svg';
import { ReactComponent as DealStoryIcon } from '../icons/DealStoryIcon.svg';
import { ReactComponent as Calendar } from '../icons/Calendar.svg';
import { ReactComponent as SelectIcon } from '../icons/SelectIcon.svg';

const { Option } = Select;

const StatisticsCards = () => {

  return (
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
        <div className="statistics__smallCardWrapper">
          <Row gutter={24}>

            <SmallCard title='Мои клиенты' value={78} difference={1} Icon={Clients} buttonText={'Добавить клиента'} />
            <SmallCard title='Мои заявки' value={42} difference={1} Icon={Applications} buttonText={'Создать заявку'} />
            <SmallCard title='Ипотечные заявки' value={7} Icon={Home} buttonText={'Создать заявку'} />
            <SmallCard title='Сделок проведено' value={13} Icon={CheckCircle} buttonText={'История сделок'} rightButtonIcon ButtonIcon={DealStoryIcon} />

          </Row>
        </div>

      </div>

    </div>

  )
}

export default StatisticsCards; 