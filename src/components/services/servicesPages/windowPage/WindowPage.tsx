import React from 'react';
import s from './windowPage.module.scss';
import NavTitle from '../../../pageTitle/navTitle/NavTitle';
import window from '../../../../assets/photos/servicesPhotos/window.jpg'
import window_2 from '../../../../assets/photos/servicesPhotos/window_2.jpg'
import window_3 from '../../../../assets/photos/servicesPhotos/window_3.jpeg'
import {PATH} from '../../../../Pages';
import {Helmet} from "react-helmet";

const WindowPage = () => {
    return (
        <>
            <Helmet>
                <title>Установка пластиковых окон - Услуги | Дачные домики беседки.рф</title>
                <meta name="description" content="Установка пластиковых окон ПВХ - услуги" />
            </Helmet>

            <div className={s.block}>
                <div className={s.container}>
                    <NavTitle pageName={'Услуги'} linkPageName={PATH.SERVICES}/>
                    <h1 className={s.title}>Установка пластиковых окон ПВХ</h1>

                    <div className={s.imgContainer}>
                        <img className={s.img} src={window_3}/>
                        <img className={s.img} src={window}/>
                        <img className={s.img} src={window_2}/>
                    </div>

                    <div className={s.descriptionContainer}>
                        <p className={s.descriptionTitle}>Преимущества пластиковых окон</p>

                        <ol className={s.list}>
                            <li className={s.descriptionText}><strong>Долговечность</strong> – благодаря специальным
                                пластификаторам и добавкам профили из ПВХ при правильном уходе не меняют свою форму,
                                цвет и
                                размеры в течение заявленного производителями срока.
                            </li>
                            <li className={s.descriptionText}><strong>Минимальный уход</strong> – пластиковые окна
                                просто
                                поддерживать в рабочем и эстетически привлекательном состоянии. Достаточно чистить и
                                смазывать вовремя фурнитуру с уплотнительными контурами, а также периодически мыть
                                поверхность профилей и стеклопакетов.
                            </li>
                            <li className={s.descriptionText}><strong>Герметичность</strong> – конструкции из
                                ПВХ-профилей
                                не пропускают в обе стороны воздух, воду, пыль и шум.
                            </li>
                            <li className={s.descriptionText}><strong>Энергоэффективность</strong> – при правильном
                                подборе
                                типа профиля и стеклопакетов, окна из пластика не дают промерзать откосам и хорошо
                                сохраняют
                                тепло во внутренних помещениях.
                            </li>
                        </ol>
                        <div className={s.priceContainer}>
                            <div>
                                <p className={s.textSecondContainer}>1,20 х 1,00 м. (двухстворчатое), цена:</p>
                                <p className={s.text}>11 000 рублей.</p>
                            </div>
                            <div>
                                <p className={s.textSecondContainer}>0,6 х 1,00 м (одностворчатое), цена:</p>
                                <p className={s.text}>8 500 рублей.</p>
                            </div>
                            <div>
                                <p className={s.textSecondContainer}>0,5 х 0,5 м (1 створка), цена:</p>
                                <p className={s.text}>4 000 рублей.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WindowPage;