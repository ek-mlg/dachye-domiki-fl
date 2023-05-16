import React from 'react';
import s from './pageTitle.module.scss';
import {PATH} from '../../Pages';
import {useLocation} from 'react-router-dom';
import NavTitle from './navTitle/NavTitle';


type PageTitlePropsType = {
    style?: { backgroundImage: string }
    pageName: string
    secondPageName?: string
    linkPageName: string
}

const PageTitle: React.FC<PageTitlePropsType> = ({style, pageName, secondPageName, linkPageName}) => {

    const location = useLocation()
    const currentPath = location.pathname

    const title =
        currentPath === PATH.CATALOG ? 'Каталог'
            : currentPath === PATH.ABOUT ? 'О компании'
                : currentPath === PATH.SERVICES ? 'Услуги'
                    : currentPath === PATH.CONTACTS ? 'Контакты'
                        : currentPath === PATH.CATALOG_HOUSES ? 'Проекты садовых домиков'
                            : currentPath === PATH.CATALOG_GAZEBOS ? 'Проекты беседок'
                                : currentPath === PATH.CATALOG_HOZBLOCKS ? 'Проекты хозблоков'
                                    : currentPath === PATH.CATALOG_TOILETS ? 'Проекты туалетов'
                                        : "Страница не найдена"

    return (
        <div className={s.titleContainer} style={style}>
            <h1 className={s.title}>{title}</h1>
                <NavTitle pageName={pageName} secondPageName={secondPageName} linkPageName={linkPageName}/>
        </div>
    );
};

export default PageTitle;