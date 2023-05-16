import React from 'react';
import s from './roofPage.module.scss';
import NavTitle from '../../../pageTitle/navTitle/NavTitle';

import sonataImg from '../../../../assets/photos/servicesPhotos/Sonata.svg';
import advImg from '../../../../assets/photos/servicesPhotos/avd.png';

import rubinImg from '../../../../assets/photos/servicesPhotos/rubin.jpeg';
import malakhitImg from '../../../../assets/photos/servicesPhotos/malakhit.jpeg';
import yantarImg from '../../../../assets/photos/servicesPhotos/yantar.jpeg';
import {PATH} from '../../../../Pages';
import {Helmet} from "react-helmet";

const RoofPage = () => {
    return (
        <>
            <Helmet>
                <title>Гибкая черепица Shinglas | Дачные домики беседки.рф</title>
                <meta name="description" content="Изящная кровля с эффектно проработанной тенью подчеркнёт неповторимый облик любого здания. Насыщенные цвета удивительных по красоте камней, издревле использовавшихся для создания ювелирных изделий, нашли свое отражение в черепице, которая станет настоящим украшением Вашего дома!"/>
                <meta name="keywords" content="кровля, черепица, Shinglas, Самба, Рубин, Малахит, Янтарь"/>
                <meta property="og:title" content="Гибкая черепица Shinglas"/>
                <meta property="og:description" content="Изящная кровля с эффектно проработанной тенью подчеркнёт неповторимый облик любого здания. Насыщенные цвета удивительных по красоте камней, издревле использовавшихся для создания ювелирных изделий, нашли свое отражение в черепице, которая станет настоящим украшением Вашего дома!"/>
            </Helmet>
            <div className={s.block}>
                <div className={s.container}>
                    <NavTitle pageName={'Услуги'} linkPageName={PATH.SERVICES}/>
                    <h1 className={s.title}>Гибкая черепица Shinglas</h1>
                    <div className={s.imgContainer}>
                        <img className={s.img} alt={'Гибкая черепица Shinglas, рубин'} src={rubinImg}/>
                        <img className={s.img} alt={'Гибкая черепица Shinglas, малахит'} src={malakhitImg}/>
                        <img className={s.img} alt={'Гибкая черепица Shinglas, янтарь'} src={yantarImg}/>
                    </div>
                    <div className={s.descriptionContainer}>
                        <p className={s.descriptionTitle}>Коллекция Самба</p>
                        <p className={s.descriptionText}>Изящная кровля с эффектно проработанной тенью подчеркнёт
                            неповторимый облик любого здания. Насыщенные цвета удивительных по красоте камней, издревле
                            использовавшихся для создания ювелирных изделий, нашли свое отражение в черепице, которая
                            станет
                            настоящим украшением Вашего дома!</p>
                        <div className={s.secondContainer}>
                            <div className={s.priceColorContainer}>
                                <p className={s.textSecondContainer}>на выбор 3 цвета:</p>
                                <p className={s.text}>Рубин, Малахит, Янтарь</p>
                            </div>
                            <div className={s.priceColorContainer}>
                                <p className={s.textSecondContainer}>Цена:</p>
                                <p className={s.text}>Включено в стоимость</p>
                            </div>

                        </div>
                    </div>
                    <div className={s.collection}>
                        <img className={s.collectionAdv} src={advImg}/>
                        <img className={s.collectionCutting} src={sonataImg}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RoofPage;