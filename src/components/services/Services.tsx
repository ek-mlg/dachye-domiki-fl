import React from 'react';
import PageTitle from '../pageTitle/PageTitle';
import s from './services.module.scss';
import photo from '../../assets/photos/service.jpeg';
import Categories from '../catalog/categories/Categories';
import {servises} from '../../data';
import {PATH} from '../../Pages';
import {Helmet} from "react-helmet";

const Services = () => {

    const bgPhoto = {
        backgroundImage: `url(${photo})`,
    };

    return (

        <>
            <Helmet>
                <title>Дополнительные услуги | Дачные домики беседки.рф</title>
                <meta name="description"
                      content="На данной странице Вы можете ознакомиться с дополнительными услугами нашей компании, которые помогут увеличить срок эксплуатации вашего дачного строения и сделать нахождение в нем более комфортным."/>
                <meta name="keywords" content="услуги, дополнительные услуги, эксплуатация дачного строения, комфорт, сруб, дома из бруса, дома из сруба"/>
            </Helmet>

            <div className={s.block}>
                <PageTitle style={bgPhoto} pageName={'Услуги'} linkPageName={PATH.SERVICES}/>
                <div className={s.container}>
                    <div className={s.descriptionContainer}>
                        <p className={s.descriptionTitle}>На данной странице Вы можете ознакомиться с дополнительными
                            услугами</p>
                        <p className={s.descriptionText}>Мы предлагаем Вам ознакомиться с дополнительными услугами нашей
                            компании, которые помогут увеличить срок эксплуатации вашего дачного строения и сделать
                            нахождение в нем более комфортным.</p>
                    </div>
                    {servises.map((s) => <Categories key={s.id} link={s.link} title={s.title} style={s.mainPhoto}/>)}
                </div>
            </div>
        </>
    );
};

export default Services;