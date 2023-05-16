import React, {useEffect, useState} from 'react';
import s from './burger.module.scss'
import NavWithAccordion from '../navWithAccordion/NavWithAccordion';

const Burger = () => {

    const [open, setOpen] = useState(false)
    const onClickHandler = () => {
        setOpen(!open)
    }

    useEffect(() => {
        open && (document.body.style.overflow = 'hidden')
        !open && (document.body.style.overflow = 'unset')

    }, [open])


    //


    return (
        <div className={s.burger}>
            <div className={s.menuWrapper} onClick={onClickHandler}>
                <div className={open ? `${s.hamburgerMenu} ${s.animate}` : s.hamburgerMenu}>
                </div>
            </div>

            <div className={open ? `${s.burgerNavItems} ${s.show}` : s.burgerNavItems}>
                <NavWithAccordion onClick={onClickHandler}/>
            </div>
            <div onClick={onClickHandler} className={open ? `${s.background} ${s.backgroundShow}` : s.background}>
            </div>
        </div>
    );
};

export default Burger;