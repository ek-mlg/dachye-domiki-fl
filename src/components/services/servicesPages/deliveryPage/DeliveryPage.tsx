import React from 'react';
import s from './deliveryPage.module.scss'
import NavTitle from '../../../pageTitle/navTitle/NavTitle';
import {PATH} from '../../../../Pages';
import delivery from '../../../../assets/photos/servicesPhotos/delivery_2.jpeg'
import {Helmet} from "react-helmet";

const DeliveryPage = () => {
    return (
        <>
            <Helmet>
                <title>Доставка - Услуги | Дачные домики беседки.рф</title>
                <meta name="description" content="Информация о доставке Дачные домики беседки.рф" />
            </Helmet>

            <div className={s.block}>
                <div className={s.container}>
                    <NavTitle pageName={'Услуги'} linkPageName={PATH.SERVICES}/>
                    <h1 className={s.title}>Доставка</h1>

                    <img className={s.img} src={delivery}/>

                    <div className={s.descriptionContainer}>
                        <p className={s.descriptionTitle}>Транспорт и сроки</p>
                        <p className={s.descriptionText}>Мы не пользуемся услугами транспортных компаний и доставляем
                            товары
                            самостоятельно. Это позволяет нам предоставлять услуги по более доступным ценам и
                            гарантировать
                            безопасность транспортировки. Вы также можете лично принять заказ и убедиться в его
                            качестве. Мы
                            осуществляем доставку на автомобилях Газель и Валдай в Московской области и близлежащих
                            регионах.</p>

                        <p className={s.descriptionText}>Мы начинаем погрузку заказа сразу после его изготовления и
                            завершения работ на производстве. Обычно мы доставляем заказ на следующий день, согласовав
                            удобную для заказчика дату строительства за несколько дней до этого. За день до отправки
                            домокомплекта мы связываемся с вами по телефону, чтобы уточнить время, когда вам будет
                            удобно
                            принять заказ.</p>

                        <div className={s.priceContainer}>
                            <p className={s.textSecondContainer}>Цена доставки:</p>
                            <p className={s.text}>100 руб. км. погрузка/разгрузка</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DeliveryPage;