import React from 'react';
import s from './warmingPage.module.css';
import NavTitle from '../../../pageTitle/navTitle/NavTitle';
import {PATH} from '../../../../Pages';
import warming from '../../../../assets/photos/servicesPhotos/warming_2.jpeg'
import {Helmet} from "react-helmet";

const WarmingPage = () => {
    return (
        <>
            <Helmet>
                <title>Утепление строения - Услуги | Дачные домики беседки.рф</title>
                <meta name="description" content="Утепление деревянного дома - услуги" />
            </Helmet>

            <div className={s.block}>
                <div className={s.container}>
                    <NavTitle pageName={'Услуги'} linkPageName={PATH.SERVICES}/>
                    <h1 className={s.title}>Утепление строения</h1>

                    <img className={s.img} src={warming}/>

                    <div className={s.descriptionContainer}>

                        <p className={s.descriptionTitle}>Утепление деревянного дома имеет несколько важных причин:</p>

                        <ol className={s.list}>
                            <li className={s.descriptionText}><strong>Сохранение тепла внутри дома</strong> - утепление
                                позволяет сократить расходы
                                на отопление, так как тепло будет лучше задерживаться внутри дома.
                            </li>

                            <li className={s.descriptionText}><strong>Защита от перепадов температуры</strong> -
                                утепление
                                защищает деревянные
                                стены от быстрых перепадов температуры, что может привести к образованию трещин и
                                повреждений
                                стен.
                            </li>

                            <li className={s.descriptionText}><strong>Предотвращение образования конденсата</strong> -
                                утепление помогает
                                предотвратить образование конденсата на внутренней поверхности стен, что может привести
                                к
                                развитию плесени и гниению дерева.
                            </li>

                            <li className={s.descriptionText}><strong>Защита от ветра</strong> - утепление уменьшает
                                проникновение холодного
                                воздуха и ветра внутрь дома, что делает жилые помещения более комфортными.
                            </li>

                            <li className={s.descriptionText}><strong>Улучшение звукоизоляции</strong> - утепление может
                                помочь улучшить
                                звукоизоляцию дома, что делает его более тихим и спокойным местом для жизни.
                            </li>

                            <li className={s.descriptionText}><strong>Увеличение срока службы дома</strong> - утепление
                                защищает деревянные стены
                                от внешних воздействий, таких как дождь, снег и ветер, что может увеличить срок службы
                                дома.
                            </li>
                        </ol>

                        <div className={s.priceContainer}>
                            <div>
                                <p className={s.textSecondContainer}>Полы, цена за м²:</p>
                                <p className={s.text}>1 500 рублей.</p>
                            </div>
                            <div>
                                <p className={s.textSecondContainer}>Потолки, цена за м²:</p>
                                <p className={s.text}>2 300 рублей.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default WarmingPage;