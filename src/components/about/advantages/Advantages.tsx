import React from 'react';
import s from './advantages.module.scss';
import cash from '../../../assets/svg/cash.svg'
import money from '../../../assets/svg/money.svg'
import hammer from '../../../assets/svg/hammer.svg'
import builder from '../../../assets/svg/builder.svg'
import guarantee from '../../../assets/svg/guarantee.svg'

const Advantages = () => {
    return (
        <div className={s.advantagesContainer}>
            <div className={s.advantages}>
                <img alt={'Icon'} src={cash} className={s.icon}/>
                <p className={s.advantagesText}>низкие цены</p>
            </div>
            <div className={s.advantages}>
                <img alt={'Icon'} src={hammer} className={s.icon}/>
                <p className={s.advantagesText}>широкий ассортимент</p>
            </div>
            <div className={s.advantages}>
                <img alt={'Icon'} src={money} className={s.icon}/>
                <p className={s.advantagesText}>без предоплаты</p>
            </div>
            <div className={s.advantages}>
                <img alt={'Icon'} src={builder} className={s.icon}/>
                <p className={s.advantagesText}>высококвалифицированные специалисты</p>
            </div>
            <div className={s.advantages}>
                <img alt={'Icon'} src={guarantee} className={s.icon}/>
                <p className={s.advantagesText}>гарантия</p>
            </div>
        </div>
    );
};

export default Advantages;