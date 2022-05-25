import React from 'react';
import { Row } from 'antd';

import SmallCard from './SmallCard';

import { ReactComponent as Clients } from '../icons/Clients.svg';
import { ReactComponent as Applications } from '../icons/Applications.svg';
import { ReactComponent as Home } from '../icons/Home.svg';
import { ReactComponent as CheckCircle } from '../icons/CheckCircle.svg';
import { ReactComponent as DealStoryIcon } from '../icons/DealStoryIcon.svg';

const StatisticsCards = () => {

    return (
        <div className="statistics__smallCardWrapper">
        <Row gutter={24}>

          <SmallCard title='Мои клиенты' value={78} difference={1} Icon={Clients} buttonText={'Добавить клиента'} />
          <SmallCard title='Мои заявки' value={42} difference={1} Icon={Applications} buttonText={'Создать заявку'} />
          <SmallCard title='Ипотечные заявки' value={7} Icon={Home} buttonText={'Создать заявку'} />
          <SmallCard title='Сделок проведено' value={13} Icon={CheckCircle} buttonText={'История сделок'} rightButtonIcon ButtonIcon={DealStoryIcon} />

        </Row>
      </div>

    )
}

export default StatisticsCards; 