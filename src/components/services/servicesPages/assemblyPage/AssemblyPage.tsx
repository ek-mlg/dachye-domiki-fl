import React from 'react';
import s from './assemblyPage.module.scss'
import NavTitle from '../../../pageTitle/navTitle/NavTitle';
import {PATH} from '../../../../Pages';
import bulding from '../../../../assets/photos/servicesPhotos/bulding.webp';
import {Helmet} from "react-helmet";

const AssemblyPage = () => {
    return (
        <>
            <Helmet>
                <title>Бесплатная сборка - Услуги | Дачные домики беседки.рф</title>
                <meta name="description"
                      content="Мы предлагаем бесплатную сборку садово-дачной постройки на производстве. Гарантированное качество и эстетический вид постройки. Цена включена в стоимость."/>
                <meta property="og:title" content="Бесплатная сборка - Услуги | Дачные домики беседки.рф"/>
                <meta property="og:description"
                      content="Мы предлагаем бесплатную сборку садово-дачной постройки на производстве. Гарантированное качество и эстетический вид постройки. Цена включена в стоимость."/>
                <meta property="og:image" content={bulding}/>
            </Helmet>

            <div className={s.block}>
                <div className={s.container}>
                    <NavTitle pageName={'Услуги'} linkPageName={PATH.SERVICES}/>
                    <h1 className={s.title}>Бесплатная сборка</h1>

                    <img className={s.img} src={bulding}/>

                    <div className={s.descriptionContainer}>
                        <p className={s.descriptionTitle}>Этапы строительства</p>

                        <p className={s.descriptionText}>Перед началом строительства садово-дачной постройки,
                            домокомплект изготавливается на производстве с использованием специальных станков. Это
                            позволяет точно заготовить все необходимые детали и гарантировать отсутствие неточностей и
                            ошибок при сборке. Поэтому на участок доставляется готовый домокомплект в разобранном виде,
                            и профессиональная бригада сборщиков осуществляет его сборку, которая занимает всего 1-3 дня
                            в зависимости от комплектации.</p>

                        <p className={s.descriptionText}>Такой подход имеет неоспоримые преимущества: он позволяет
                            сэкономить время и гарантирует высокое качество и эстетический вид постройки. Более того,
                            легкая конструкция домокомплекта позволяет произвести сборку без использования
                            специализированной техники.</p>

                        <p className={s.descriptionText}>На участке необходимо подготовить площадку под застройку. Это
                            включает в себя очистку от кустов, деревьев, а также выравнивание уклона и устранение других
                            возможных помех. Только после этого можно приступать к сборке домокомплекта и строительству
                            самой постройки.</p>

                        <div className={s.priceContainer}>
                            <div>
                                <p className={s.textSecondContainer}>цена:</p>
                                <p className={s.text}>Включено в стоимость</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AssemblyPage;