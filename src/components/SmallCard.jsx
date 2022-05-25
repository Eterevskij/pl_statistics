import React from 'react';
import { Col, Divider } from 'antd';


import { ReactComponent as DifferenceArrow } from '../icons/differenceArrow.svg';
import { ReactComponent as SmallButtonPlus } from '../icons/SmallButtonPlus.svg';


const SmallCard = (props) => {

    const { title, value, Icon, difference, buttonText, ButtonIcon, rightButtonIcon } = props;


    return (
        <Col span={6}>
            <div className="statistics__card">

                <div className="statistics__card__top">

                    <div className="statistics__card__top__info">
                        <div className="statistics__card__top__info__icon">
                            <Icon />
                        </div>

                        <div className="statistics__card__top__info__text">
                            <p className="statistics__card__top__info__text__title">{title}</p>

                            <div className="statistics__card__top__info__text__numbers">
                                <p className="statistics__card__top__info__text__numbers__value">{value}</p>

                                {   difference &&
                                    <div className="statistics__card__top__info__text__numbers__difference">
                                    <p>+{difference}</p>
                                    <DifferenceArrow />
                                </div>
                                }

                            </div>
                        </div>
                    </div>

                </div>

                <Divider className="statistics__card__divider" />

                <div className="statistics__card__button__wrapper">
                    <div className={`statistics__card__button ${rightButtonIcon && `rightIcon`}`}>
                        {
                            ButtonIcon ?
                                <ButtonIcon />
                            :
                                <SmallButtonPlus />

                        }
                        
                        <p className="statistics__card__button__text">{buttonText}</p>
                    </div>
                </div>

            </div>
        </Col>
    )
}

export default SmallCard; 