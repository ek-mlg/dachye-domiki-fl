import React from 'react';
import s from './materialsPage.module.scss';
import NavTitle from '../../../pageTitle/navTitle/NavTitle';
import {PATH} from '../../../../Pages';
import material from '../../../../assets/photos/servicesPhotos/material_1.png'
import material2 from '../../../../assets/photos/servicesPhotos/material_2.png'
import material3 from '../../../../assets/photos/servicesPhotos/material_3.png'
import {Helmet} from "react-helmet";

const MaterialsPage = () => {
    return (
        <>
            <Helmet>
                <title>Используемые материалы | Дачные домики беседки.рф</title>
                <meta name="description"
                      content="Наши домики изготавливаются из качественных материалов, таких как доски, мини-брус и клееный брус. Мы используем материалы высокого качества, чтобы обеспечить долговечность и прочность наших строений."/>
            </Helmet>
            <div className={s.block}>
                <div className={s.container}>
                    <NavTitle pageName={'Услуги'} linkPageName={PATH.SERVICES}/>
                    <h1 className={s.title}>Используемые материалы</h1>

                    <div className={s.imgContainer}>
                        <div className={s.imgDescription}>
                            <img className={s.img} src={material}/>
                            <p className={s.descriptionTitle}>доска 135 х 45 мм</p>
                        </div>
                        <div className={s.imgDescription}>
                            <img className={s.img} src={material2}/>
                            <p className={s.descriptionTitle}>мини-брус 135 х 60 мм</p>
                        </div>
                        <div className={s.imgDescription}>
                            <img className={s.img} src={material3}/>
                            <p className={s.descriptionTitle}>клееный брус 135 х 75 мм</p>
                        </div>
                    </div>

                    <div className={s.descriptionContainer}>
                        <p className={s.descriptionText}>Наши строения домики отличаются высоким качеством и
                            долговечностью благодаря использованию сухого материала камерной сушки. Этот процесс
                            позволяет
                            удалить из древесины лишнюю влагу, что в свою очередь делает материал
                            более прочным и устойчивым к внешним воздействиям.
                        </p>
                        <p className={s.descriptionText}>
                            Наша компания предлагает широкий выбор домиков различных размеров и конфигураций, чтобы
                            каждый
                            клиент мог выбрать оптимальный вариант для своих потребностей. Все домики изготавливаются в
                            соответствии с высокими стандартами качества и имеют гарантию на длительный срок
                            эксплуатации.</p>
                        <p className={s.descriptionText}>
                            Выбирая нас, вы получаете не только качественный продукт, но и профессиональный подход
                            к работе. Наша команда опытных специалистов готова предоставить вам полную консультацию по
                            всем
                            вопросам, связанным с выбором и установкой домика или беседки. Мы ценим наших клиентов и
                            делаем
                            все возможное, чтобы обеспечить им максимальный комфорт и удовлетворение от нашей
                            продукции.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MaterialsPage;