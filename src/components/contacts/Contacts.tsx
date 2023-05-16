import React from 'react';
import PageTitle from '../pageTitle/PageTitle';
import s from './contacts.module.scss';
import photo from '../../assets/photos/contacts.jpeg'
import {PATH} from '../../Pages';
import ContactInfo from './contactInfo/ContactInfo';
import {Helmet} from "react-helmet";

const Contacts = () => {
    const bgPhoto = {
        backgroundImage: `url(${photo})`,
    };
    return (
        <>
            <Helmet>
                <title>Контакты - Дачные домики беседки.рф</title>
                <meta name="description" content="Свяжитесь с нами для получения дополнительной информации о нашей компании."/>
                <meta name="keywords" content="контакты, связаться, адрес, телефон, электронная почта"/>
            </Helmet>


            <div className={s.block}>
                <PageTitle style={bgPhoto} pageName={'Контакты'} linkPageName={PATH.CONTACTS}/>
                <div className={s.container}>
                    <ContactInfo/>
                </div>
            </div>
        </>
    );
};

export default Contacts;