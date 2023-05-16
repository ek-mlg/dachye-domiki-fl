import React from 'react';
import s from './treatmentPage.module.scss';
import NavTitle from '../../../pageTitle/navTitle/NavTitle';
import {PATH} from '../../../../Pages';
import antiseptik from '../../../../assets/photos/servicesPhotos/antiseptik-dlya-dereva.jpeg';
import {Helmet} from "react-helmet";

const TreatmentPage = () => {
    return (
        <>
            <Helmet>
                <title>Обработка дерева антисептиком - Услуги | Дачные домики беседки.рф</title>

                <meta name="description"
                      content="Обработка древесных строений антисептиком необходима для защиты древесины от разрушения и порчи, вызванной различными видами микроорганизмов. Обработка древесины антисептиком позволяет увеличить срок службы древесных конструкций и уменьшить затраты на их ремонт и замену в будущем."/>
                <meta name="keywords"
                      content="обработка антисептиком, древесина, защита от грибков, защита от насекомых, срок службы древесины"/>
            </Helmet>

            <div className={s.block}>
                <div className={s.container}>
                    <NavTitle pageName={'Услуги'} linkPageName={PATH.SERVICES}/>
                    <h1 className={s.title}>Обработка антисептиком</h1>

                    <img className={s.img} src={antiseptik}/>

                    <div className={s.descriptionContainer}>
                        <p className={s.descriptionTitle}>Для чего нужна обработка дерева антисептиком?</p>
                        <p className={s.descriptionText}>Обработка древесных строений антисептиком необходима для защиты
                            древесины от разрушения и порчи, вызванной различными видами микроорганизмов, таких как
                            грибы, плесени, термиты и другие насекомые.</p>

                        <p className={s.descriptionText}>Древесина, как естественный материал, очень подвержена действию
                            влаги, насекомых и грибков, что может привести к ее быстрому разрушению. При обработке
                            древесины антисептиком, на поверхности материала образуется защитный слой, который не дает
                            микроорганизмам проникнуть внутрь древесины и разрушить ее.</p>

                        <p className={s.descriptionText}>Обработка древесины антисептиком особенно важна для
                            строительных конструкций, таких как балки, столбы, ростверки и другие элементы, которые
                            находятся под постоянным воздействием влаги и насекомых. Это позволяет увеличить срок службы
                            древесных конструкций и уменьшить затраты на их ремонт и замену в будущем.</p>

                        <div className={s.priceContainer}>
                            <div>
                                <p className={s.textSecondContainer}>цена за м²:</p>
                                <p className={s.text}>400 рублей.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TreatmentPage;