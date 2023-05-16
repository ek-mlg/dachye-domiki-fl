import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {PATH} from '../../../Pages';
import s from './navWithAccordion.module.scss';
import telIcon from '../../../assets/svg/phone.svg';
import location from '../../../assets/svg/location.svg';
import mailIcon from '../../../assets/svg/mail.svg';

type NavWithAccordionPropsType = {
    onClick: () => void
}

const NavWithAccordion: React.FC<NavWithAccordionPropsType> = ({onClick}) => {

    const [catalogIsActive, setCatalogIsActive] = useState(false);
    const [serviceIsActive, setServiceIsActive] = useState(false);

    const catalogOnClickHandler = () => {
        setCatalogIsActive(!catalogIsActive)
        if (serviceIsActive) {
            setServiceIsActive(false);
        }
    }

    const servicesOnClickHandler = () => {
        setServiceIsActive(!serviceIsActive)
        if (catalogIsActive) {
            setCatalogIsActive(false);
        }
    }

    return (
        <div className={s.navContainer}>
            <div className={s.navItems}>

                <NavLink
                    className={s.current}
                    to={PATH.MAIN}
                    onClick={onClick}
                >
                    Главная
                </NavLink>

                <div className={s.accordionContainer}
                     onClick={catalogOnClickHandler}
                >
                    <NavLink
                        className={s.accordionTitle}
                        to={PATH.CATALOG}
                        onClick={onClick}>
                        Каталог
                    </NavLink>
                    {catalogIsActive ? <div className={s.animateTriangle}></div> : <div className={s.triangle}></div>}

                </div>
                {catalogIsActive && <div className={s.accordionContent}>

                    <NavLink
                        to={PATH.CATALOG_HOUSES}
                        className={s.accordionCurrent}
                        onClick={onClick}
                    >
                        Садовые дома
                    </NavLink>
                    <NavLink
                        to={PATH.CATALOG_GAZEBOS}
                        className={s.accordionCurrent}
                        onClick={onClick}
                    >
                        Беседки
                    </NavLink>
                    <NavLink
                        className={s.accordionCurrent}
                        onClick={onClick}
                        to={PATH.CATALOG_HOZBLOCKS}
                    >
                        Хозблоки
                    </NavLink>

                </div>}

                <NavLink
                    to={PATH.ABOUT}
                    className={s.current}
                    onClick={onClick}
                >
                    О компании
                </NavLink>


                <div className={s.accordionContainer}
                     onClick={servicesOnClickHandler}
                >
                    <NavLink
                        className={s.accordionTitle}
                        to={PATH.SERVICES}
                        onClick={onClick}>
                        Услуги
                    </NavLink>
                    {serviceIsActive ? <div className={s.animateTriangle}></div> : <div className={s.triangle}></div>}
                </div>
                {serviceIsActive && <div className={s.accordionContent}>
                    <NavLink
                        to={PATH.SERVICES_ASSEMBLY}
                        className={s.accordionCurrent}
                        onClick={onClick}
                    >
                        Бесплатная сборка
                    </NavLink>
                    <NavLink
                        to={PATH.SERVICES_MATERIALS}
                        className={s.accordionCurrent}
                        onClick={onClick}
                    >
                        Материалы строительства
                    </NavLink>
                    <NavLink
                        to={PATH.SERVICES_ROOF}
                        className={s.accordionCurrent}
                        onClick={onClick}
                    >
                        Гибкая черепица Shinglas
                    </NavLink>
                    <NavLink
                        to={PATH.SERVICES_FOUNDATION}
                        className={s.accordionCurrent}
                        onClick={onClick}
                    >
                        Фундамент
                    </NavLink>
                    <NavLink
                        to={PATH.SERVICES_DELIVERY}
                        className={s.accordionCurrent}
                        onClick={onClick}
                    >
                        Доставка
                    </NavLink>
                    <NavLink
                        to={PATH.SERVICES_WINDOW}
                        className={s.accordionCurrent}
                        onClick={onClick}
                    >
                        Установка пластиковых окон
                    </NavLink>
                    <NavLink
                        to={PATH.SERVICES_WARMING}
                        className={s.accordionCurrent}
                        onClick={onClick}
                    >
                        Утепление строения
                    </NavLink>
                    <NavLink
                        to={PATH.SERVICES_TREATMENT}
                        className={s.accordionCurrent}
                        onClick={onClick}
                    >
                        Обработка антисептиком
                    </NavLink>
                </div>}

                <NavLink
                    to={PATH.CONTACTS}
                    className={s.current}
                    onClick={onClick}
                >
                    Контакты
                </NavLink>
            </div>
            <address className={s.addressContainer}>
                <a href={"https://yandex.ru/maps/10717/bronnizi/?ll=38.264245%2C55.425647&z=14"} className={s.info}>
                    <img src={location} className={s.Icon} alt={"Location Icon"}/>
                    <span className={s.infoSpans}>г. Бронницы, Московская обл.</span>
                </a>
                <a href={"mailto: mailto:kiryushenko.p.m@yandex.ru"} className={s.info}>
                    <img src={mailIcon} className={s.Icon} alt={"Mail Icon"}/>
                    <span className={s.infoSpans}>kiryushenko.p.m@yandex.ru</span>
                </a>
                <a className={s.telContainer} href={"tel:+7 (977) 643-23-93"}>
                    <img src={telIcon} className={s.telIcon} alt={"Telephone Icon"}/>
                    <div className={s.telSpans}>
                        <span className={s.tel}>+7 (977) 643-23-93</span>
                    </div>
                </a>
            </address>
        </div>
    );
};

export default NavWithAccordion;