import React from 'react';
import s from './contactInfo.module.scss';
import {FullscreenControl, Map, YMaps, ZoomControl} from "@pbe/react-yandex-maps";

const ContactInfo = () => {

    return (
        <>
            <div className={s.infoContainer}>
                <div className={s.textContainer}>
                    <p className={s.textTitle}>Не можете определиться с выбором или нужна дополнительная помощь?</p>
                    <p className={s.text}>Звоните или пишите, ответим на все Ваши
                        вопросы и поможем определиться</p>
                    <div className={s.telIconsContainer}>
                        <a className={s.tel} href={"tel:+7 (977) 643-23-93"}>
                            +7 (977) 643-23-93
                        </a>

                    </div>
                    <p className={s.textTitle}>Наша электронная почта:</p>
                    <a className={s.infoText} href={"mailto:kiryushenko.p.m@yandex.ru"}>kiryushenko.p.m@yandex.ru</a>
                    <p className={s.textTitle}>Мы находимся:</p>
                    <a className={s.infoText}
                       href={"https://yandex.ru/maps/10717/bronnizi/?ll=38.264245%2C55.425647&z=14"}>г. Бронницы,
                        Московская обл.</a>

                </div>
            </div>
            <div className={s.mapContainer}>
            <YMaps query={{apikey: 'ee8f4c3d-a8ad-4ec7-a017-767668bc87d1'}}>
                    <Map className={s.map} defaultState={{center: [55.425650, 38.264243], zoom: 13, controls: [],}}>
                        <FullscreenControl/>
                        <ZoomControl/>
                    </Map>
            </YMaps>
            </div>
        </>
    );
};

export default ContactInfo;