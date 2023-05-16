import React, {useEffect, useState} from 'react';
import s from './header.module.scss';
import Nav from './nav/Nav';
import telIcon from '../../assets/svg/phone.svg'
import mailIcon from '../../assets/svg/mail.svg'
import location from '../../assets/svg/location.svg'
import logo from '../../assets/svg/logo.svg'
import {PATH} from "../../Pages";
import {NavLink} from "react-router-dom";
import Burger from './burger/Burger';
import {useWindowSize} from '../../useWindowSize';


const Header = () => {

    const size = useWindowSize()

    return (
        <header className={s.header}>
            <div className={s.headerContainer}>

                {size > 1340
                    ?
                    <>
                        <div className={s.topContent}>

                            <address className={s.addressContainer}>
                                <div className={s.infoContainer}>
                                    <a href={"https://yandex.ru/maps/10717/bronnizi/?ll=38.264245%2C55.425647&z=14"} className={s.info}>
                                        <img src={location} className={s.Icon} alt={"Location Icon"}/>
                                        <span className={s.infoSpans}>Бронницы, Московская обл.</span>
                                    </a>
                                    <a href={"mailto:kiryushenko.p.m@yandex.ru"} className={s.info}>
                                        <img src={mailIcon} className={s.Icon} alt={"Mail Icon"}/>
                                        <span className={s.infoSpans}>kiryushenko.p.m@yandex.ru</span>
                                    </a>
                                </div>
                            </address>

                        </div>

                        <div className={s.bottomContent}>

                            <NavLink
                                className={s.logoContainer}
                                to={PATH.MAIN}
                            >
                                <img className={s.logo} src={logo}/>
                                <div className={s.logoTextContainer}>
                                    <span className={s.logoText}>Дачные домики</span>
                                    <span className={s.logoTextSecond}>беседки.рф</span>
                                </div>
                            </NavLink>

                            <nav className={s.nav}>
                                <Nav/>
                            </nav>

                            <address className={s.telWrapper}>
                                <a className={s.telContainer} href={"tel:+7 (977) 643-23-93"}>
                                    <img src={telIcon} className={s.telIcon} alt={"Telephone Icon"}/>
                                    <div className={s.telSpans}>
                                        <span className={s.telDescription}>Работаем без выходных</span>
                                        <span className={s.tel}>+7 (977) 643-23-93</span>
                                    </div>
                                </a>
                            </address>
                        </div>
                    </>
                    :
                    <>
                        <div className={s.mediaLogoContainer}>
                            <NavLink to={PATH.MAIN}>
                            <img className={s.mediaLogo} src={logo}/>
                            </NavLink>
                            <div className={s.mediaLogoTextContainer}>
                                <span className={s.mediaLogoText}>Дачные домики</span>
                                <span className={s.mediaLogoTextSecond}>беседки.рф</span>
                            </div>
                            <Burger />
                        </div>

                    </>
                }


            </div>
        </header>
    );
};

export default Header;