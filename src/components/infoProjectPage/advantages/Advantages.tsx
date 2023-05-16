import React from 'react';
import s from './advantages.module.scss';
import moneyIcon from '../../../assets/svg/money.svg'
import sawIcon from '../../../assets/svg/saw.svg'
import cashIcon from '../../../assets/svg/cash.svg'
import guaranteeIcon from '../../../assets/svg/guarantee.svg'
import fastIcon from '../../../assets/svg/fast.svg'

const Advantages = () => {
    return (
        <div className={s.advantagesContainer}>
            <div className={s.advantages}>
                <img alt={'Icon'} src={sawIcon} className={s.icon}/>
                <p className={s.advantagesText}>cвое производство</p>
            </div>
            <div className={s.advantages}>
                <img alt={'Icon'} src={fastIcon} className={s.icon}/>
                <p className={s.advantagesText}>cборка за 1 день</p>
            </div>
            <div className={s.advantages}>
                <img alt={'Icon'} src={cashIcon} className={s.icon}/>
                <p className={s.advantagesText}>без предоплаты</p>
            </div>
            <div className={s.advantages}>
                <img alt={'Icon'} src={guaranteeIcon} className={s.icon}/>
                <p className={s.advantagesText}>гарантия</p>
            </div>
            <div className={s.advantages}>
                <img alt={'Icon'} src={moneyIcon} className={s.icon}/>
                <p className={s.advantagesText}>бесплатная сборка</p>
            </div>
        </div>
    );
};

export default Advantages;