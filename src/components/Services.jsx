import React, { useState } from 'react';
import { Carousel } from 'antd';

import { ReactComponent as DealStoryIcon } from '../icons/DealStoryIcon.svg';
import { ReactComponent as SliderButton } from '../icons/SliderButton.svg';
import FlCheck from '../img/FlCheck.jpg';
import CRMTopnlab from '../img/CRMTopnlab.jpg';
import InsuranceCalculation from '../img/InsuranceCalculation.jpg';
import PropertyValuation from '../img/PropertyValuation.jpg';



const Services = () => {
    const ServicesArr = [
                         {title:'Оценка недвижимости', photo: PropertyValuation},
                         {title:'CRM Topnlab', photo: CRMTopnlab},
                         {title:'Расчет страховки', photo: InsuranceCalculation},
                         {title:'Проверка ФЛ', photo: FlCheck},
                         {title:'Оценка недвижимости', photo: PropertyValuation},
                         {title:'CRM Topnlab', photo: CRMTopnlab},
                         {title:'Расчет страховки', photo: InsuranceCalculation},
                         {title:'Проверка ФЛ', photo: FlCheck},
                        ];

    const [sliderRef, setSliderRef] = useState(null);
    const [disabledButtons, setDisabledButtons] = useState({'prev': true, next: false});


    const sliderSettings = {
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        dots: false
    }

    const servicesLength = ServicesArr.length;

    const changeSlideHandler = (current) => {
        debugger
        if(current >= servicesLength - sliderSettings.slidesToShow) {
            setDisabledButtons({...disabledButtons, next: true});
            console.log("Отключаем кнопку вперед")
        } else if(current === 0) {
            setDisabledButtons({...disabledButtons, prev: true});
            console.log("Отключаем кнопку назад")
        } else {
            setDisabledButtons({next: false, prev: false});
        }
            
        
    }

    const isButtonsVisible = servicesLength > sliderSettings.slidesToShow;

    return (
        <div className="Services">


            <div className="Services__header">
                <p className="Services__header__title">Сервисы</p>
                {isButtonsVisible &&
                <div className="Services__header__buttons">
                    <button disabled={disabledButtons.prev} onClick={() => { sliderRef.prev() }} className="Services__header__buttons__item prev"><SliderButton /></button>
                    <button disabled={disabledButtons.next} onClick={() => { sliderRef.next() }} className="Services__header__buttons__item next"><SliderButton /></button>
                </div>
                }
            </div>

            <Carousel
                className='ServicesList'
                ref={setSliderRef}
                {...sliderSettings}
                afterChange={changeSlideHandler}>
                    

                    {ServicesArr.map(service => {
                        return(
                            <div className='Services__item__wrapper'>
                            <div className="Services__item">
                                <p className="Services__item__title">{service.title}</p>
                                <DealStoryIcon className="Services__item__arrow" />
                                <img src={service.photo} alt="" className="Services__item__title__img" />
                            </div>
                        </div>
                        )
                    })}


            </Carousel>



        </div>

    )
}

export default Services; 