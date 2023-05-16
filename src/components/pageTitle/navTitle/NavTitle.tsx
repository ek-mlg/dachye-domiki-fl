import React from 'react';
import {NavLink} from "react-router-dom";
import {PATH} from '../../../Pages';
import s from './navTitle.module.scss'

type NavTitlePropsType = {
    pageName: string
    secondPageName?: string
    linkPageName: string
    linkSecondPageName?: string
}
const NavTitle:React.FC<NavTitlePropsType> = ({pageName, secondPageName, linkPageName, linkSecondPageName}) => {

    return (
        <h3 className={s.navPage}>
            <NavLink to={PATH.MAIN} className={s.pageMain}>Главная</NavLink>
            {pageName ? ' / ' : ''}
            <NavLink to={linkPageName} className={s.pageSecondText}>{pageName ? pageName : ''}</NavLink>
            {secondPageName ? ' / ' : ''}
            <NavLink to={linkSecondPageName!} className={s.pageSecondText}>{secondPageName ? secondPageName : ''}</NavLink>
        </h3>
    );
};

export default NavTitle;