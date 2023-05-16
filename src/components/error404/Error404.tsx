import React from 'react';
import PageTitle from '../pageTitle/PageTitle';
import img404 from '../../assets/photos/404.jpg';
import s from './error404.module.scss';
import {PATH} from '../../Pages';
import {Helmet} from "react-helmet";



const Error404 = () => {

    const bgPhoto = {
        backgroundImage: `url(${img404})`,
        height: "100%"
    };

    return (
        <>
        <Helmet>
            <title>Страница не найдена | Дачные домики беседки.рф</title>
            <meta name="description" content="Страница не найдена. Проверьте правильность введенного адреса." />
        </Helmet>
        <div className={s.block}>
            <PageTitle style={bgPhoto} pageName={'Ошибка: 404'} linkPageName={PATH.MAIN}/>
        </div>
        </>
    );
};

export default Error404;