import React from 'react';
import s from './foundationPage.module.scss';
import NavTitle from '../../../pageTitle/navTitle/NavTitle';
import {PATH} from '../../../../Pages';
import piles from '../../../../assets/photos/servicesPhotos/piles.jpeg'
import blockSecond from '../../../../assets/photos/servicesPhotos/block.jpeg'
import block from '../../../../assets/photos/servicesPhotos/blockF.jpeg'
import {Helmet} from "react-helmet";

const FoundationPage = () => {

    const pageTitle = "Установка фундамента - Услуги | Дачные домики беседки.рф";
    const pageDescription = "Мы предлагаем услуги по установке фундамента: блочный, блочный + армированная плита, сваи.";
    const pageKeywords = "установка фундамента, блочный фундамент, армированная плита, сваи";

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription}/>
                <meta name="keywords" content={pageKeywords}/>
                <meta property="og:description" content={pageDescription}/>
                <meta name="twitter:title" content={pageTitle}/>
                <meta name="twitter:description" content={pageDescription}/>
            </Helmet>
            <div className={s.block}>
                <div className={s.container}>
                    <NavTitle pageName={'Услуги'} linkPageName={PATH.SERVICES}/>
                    <p className={s.title}>Блочный фундамент</p>
                    <img className={s.img} src={blockSecond}/>
                    <div className={s.descriptionContainer}>
                        <p className={s.descriptionText}>Блочный фундамент - это один из видов фундаментов, который
                            используется для установки легких или средней нагрузки зданий. Он состоит из ряда блоков из
                            железобетона или других материалов, которые размещаются на подготовленной поверхности земли
                            и
                            соединяются между собой.</p>
                        <p className={s.descriptionTitle}>Преимущества блочного фундамента включают</p>
                        <ol className={s.list}>
                            <li className={s.descriptionText}><strong>Экономичность</strong> - блочный фундамент стоит
                                дешевле, чем традиционный монолитный фундамент, что может быть важно при строительстве
                                на
                                небольшом бюджете.
                            </li>
                            <li className={s.descriptionText}><strong>Простота установки</strong> - блоки легче и проще
                                устанавливать, чем лить бетонную конструкцию на месте, что ускоряет процесс
                                строительства и
                                снижает затраты на трудовые ресурсы.
                            </li>
                            <li className={s.descriptionText}><strong>Универсальность</strong> - блочный фундамент может
                                быть использован для различных типов зданий, таких как садовые дома, беседки, хозблоки и
                                т.д.
                            </li>
                        </ol>
                    </div>

                    <p className={s.title}>Блочный фундамент с армированной плитой</p>
                    <img className={s.img} src={block}/>
                    <div className={s.descriptionContainer}>
                        <p className={s.descriptionText}>Блочный фундамент с армированной плитой - это вид фундамента,
                            который используется для поддержки зданий, которые будут подвергаться значительным
                            нагрузкам. Он
                            состоит из ряда железобетонных блоков, установленных на заранее подготовленной поверхности
                            земли
                            и соединенных между собой, а также из армированной бетонной плиты, которая является основным
                            элементом фундамента.</p>
                        <p className={s.descriptionTitle}>Преимущества блочного фундамента с армированной плитой
                            включают</p>
                        <ol className={s.list}>
                            <li className={s.descriptionText}><strong>Высокая нагрузочная способность</strong> -
                                благодаря
                                использованию арматуры и железобетонных блоков, фундамент обладает высокой носительной
                                способностью и может поддерживать тяжелые конструкции.
                            </li>
                            <li className={s.descriptionText}><strong>Простота установки</strong> - блочный фундамент с
                                армированной плитой устанавливается быстрее, чем традиционный монолитный.
                            </li>
                        </ol>
                    </div>

                    <p className={s.title}>Свайный фундамент</p>
                    <img className={s.img} src={piles}/>
                    <div className={s.descriptionContainer}>
                        <p className={s.descriptionText}>Свайный фундамент - это тип фундамента, который используется
                            для
                            построения зданий на слабых грунтах или для поддержания больших нагрузок. Он состоит из
                            серии
                            свай, которые устанавливаются в землю до устойчивых слоев или до определенной глубины.</p>
                        <p className={s.descriptionTitle}>Свайный фундамент имеет несколько преимуществ по сравнению с
                            блочным фундаментом:</p>
                        <ol className={s.list}>
                            <li className={s.descriptionText}><strong>Устойчивость</strong> - свайный фундамент устойчив
                                на любых грунтах, так как сваи устанавливаются до устойчивых слоев грунта. Это позволяет
                                распределить нагрузку на всю площадь свай и уменьшить вероятность деформаций и
                                провисания фундамента.
                            </li>
                            <li className={s.descriptionText}><strong>Экономичность</strong> - свайный фундамент может
                                быть построен быстрее, чем блочный, так как не требуется большое количество времени на
                                выравнивание и установку блоков. Также для свайного фундамента необходимо меньшее
                                количество материалов и ресурсов.
                            </li>
                            <li className={s.descriptionText}><strong>Эффективность</strong> - свайный фундамент может
                                выдерживать большие нагрузки, поэтому он широко используется в строительстве
                                многоэтажных зданий, мостов и других сооружений.
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FoundationPage;