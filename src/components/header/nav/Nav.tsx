import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {PATH} from '../../../Pages';
import s from './nav.module.scss';


const Nav = () => {

    const [catalogOpenContextMenu, setCatalogOpenContextMenu] = useState(false)
    const [servicesOpenContextMenu, setServicesOpenContextMenu] = useState(false)

    const catalogMouseEnter = () => setCatalogOpenContextMenu(true)
    const catalogMouseLeave = () => setCatalogOpenContextMenu(false)

    const servicesMouseEnter = () => setServicesOpenContextMenu(true)
    const servicesMouseLeave = () => setServicesOpenContextMenu(false)


    return (
        <>
            <NavLink
                className={s.current}
                to={PATH.MAIN}
            >
                Главная
            </NavLink>

            <div onMouseEnter={catalogMouseEnter} onMouseLeave={catalogMouseLeave} className={s.containerContextMenu}>
                <NavLink
                    className={s.current}
                    to={PATH.CATALOG}
                >
                    Каталог
                </NavLink>


                {catalogOpenContextMenu &&
                    <div className={s.contextMenu}>
                        <NavLink
                            to={PATH.CATALOG_HOUSES}
                            className={s.contextCurrent}
                        >
                            Садовые дома
                        </NavLink>
                        <NavLink
                            to={PATH.CATALOG_GAZEBOS}
                            className={s.contextCurrent}
                        >
                            Беседки
                        </NavLink>
                        <NavLink
                            to={PATH.CATALOG_HOZBLOCKS}
                            className={s.contextCurrent}
                        >
                            Хозблоки
                        </NavLink>

                    </div>
                }
            </div>

            <NavLink
                className={s.current}
                to={PATH.ABOUT}
            >
                О компании
            </NavLink>

            <div onMouseEnter={servicesMouseEnter} onMouseLeave={servicesMouseLeave} className={s.containerContextMenu}>

                <NavLink
                    className={s.current}
                    to={PATH.SERVICES}
                >
                    Услуги
                </NavLink>

                {servicesOpenContextMenu &&
                    <div className={s.contextMenu}>
                        <NavLink
                            to={PATH.SERVICES_ASSEMBLY}
                            className={s.contextCurrent}
                        >
                            Бесплатная сборка
                        </NavLink>
                        <NavLink
                            to={PATH.SERVICES_MATERIALS}
                            className={s.contextCurrent}
                        >
                            Материалы строительства
                        </NavLink>
                        <NavLink
                            to={PATH.SERVICES_ROOF}
                            className={s.contextCurrent}
                        >
                            Гибкая черепица Shinglas
                        </NavLink>
                        <NavLink
                            to={PATH.SERVICES_FOUNDATION}
                            className={s.contextCurrent}
                        >
                            Фундамент
                        </NavLink>
                        <NavLink
                            to={PATH.SERVICES_DELIVERY}
                            className={s.contextCurrent}
                        >
                            Доставка
                        </NavLink>
                        <NavLink
                            to={PATH.SERVICES_WINDOW}
                            className={s.contextCurrent}
                        >
                            Установка пластиковых окон
                        </NavLink>
                        <NavLink
                            to={PATH.SERVICES_WARMING}
                            className={s.contextCurrent}
                        >
                            Утепление строения
                        </NavLink>
                        <NavLink
                            to={PATH.SERVICES_TREATMENT}
                            className={s.contextCurrent}
                        >
                            Обработка антисептиком
                        </NavLink>
                    </div>
                }

            </div>

            <NavLink
                to={PATH.CONTACTS}
                className={s.current}
            >
                Контакты
            </NavLink>

        </>
    );
};

export default Nav;