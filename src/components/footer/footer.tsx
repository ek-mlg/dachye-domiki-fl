import React from 'react';
import s from './footer.module.scss';
import {PATH} from '../../Pages';
import {NavLink} from 'react-router-dom';

const Footer = () => {
    const date = new Date()
    const yearDate = date.getFullYear()
    return (
        <footer className={s.footer}>
            <div className={s.footerContainer}>
                <div className={s.information}>
                    <span className={s.informationLawText}>Информация на сайте не является публичной офертой</span>

                    <span className={s.informationLawText}>
                        © {yearDate} <NavLink to={PATH.MAIN} className={s.siteName}>
                        Домики, беседки.ру
                    </NavLink> все права защищены
                    </span>
                </div>

                <address className={s.information}>
                    <span className={s.informationContactsText}>контактный телефон:  <a href={"tel:+7 (977) 643-23-93"} className={s.informationContactsTextStrong}>+7 (977) 643-23-93</a></span>
                    <span className={s.informationContactsText}>электронная почта: <a href={"mailto: kiryushenko.p.m@yandex.ru"} className={s.informationContactsTextStrong}>kiryushenko.p.m@yandex.ru</a></span>
                </address>

                <span className={s.authorInformationText}>Создание сайта: <a href={"https://ek-mlg.github.io/portfolio/"} className={s.authorName}>Егор
                    Кириллов</a></span>

            </div>
        </footer>
    );
};

export default Footer;