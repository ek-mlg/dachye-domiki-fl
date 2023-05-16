import React from 'react';
import s from './categories.module.scss';
import {NavLink} from 'react-router-dom';

type ItemPropsType = {
    title: string
    style: { backgroundImage: string }
    link: string
}
const Categories: React.FC<ItemPropsType> = ({title, style, link}) => {
    return (
        <NavLink to={link} className={s.link}>
            <div className={s.itemContainer}>
                <div className={s.imgContainer}>
                    <div className={s.img} style={style}></div>
                </div>
                <span className={s.itemTitle}>{title}</span>
                <button className={s.button}>Подробнее</button>
            </div>
        </NavLink>
    );
};

export default Categories;