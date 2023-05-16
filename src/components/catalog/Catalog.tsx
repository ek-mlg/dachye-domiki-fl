import React from 'react';
import s from './catalog.module.scss';
import PageTitle from '../pageTitle/PageTitle';
import photo from '../../assets/photos/catalog.jpeg'

import Categories from './categories/Categories';
import {categories} from '../../data';
import {PATH} from '../../Pages';
import {Helmet} from "react-helmet";

const Catalog = () => {
    const bgPhoto = {
        backgroundImage: `url(${photo})`,
    };


    return (
        <>
            <Helmet>
                <title>Каталог | Дачные домики беседки.рф</title>
                <meta name="description"
                      content="Каталог проектов, в котором предоставлена информация о каждом проекте, представлены садовые дома, беседки хозблоки, метриалы профилированная доска: 135 х 45 мм, профилированный мини-брус: 135 х 60 мм, клееный брус: 135 х 75 мм"/>
            </Helmet>

            <div className={s.block}>
                <PageTitle style={bgPhoto} pageName={'Каталог'} linkPageName={PATH.CATALOG}/>
                <div className={s.container}>
                    <div className={s.descriptionContainer}>
                        <p className={s.descriptionTitle}>В нашем каталоге Вы найдете информацию о каждом проекте</p>
                        <p className={s.descriptionText}>мы стремимся предоставить нашим клиентам полный и достоверный
                            набор
                            информации, чтобы Вы могли
                            выбрать подходящий проект</p>
                    </div>
                    {categories.map((el) => <Categories
                        key={el.id}
                        title={el.title}
                        link={el.link}
                        style={el.mainPhoto}
                    />)}
                </div>
            </div>

        </>
    );
};

export default Catalog;