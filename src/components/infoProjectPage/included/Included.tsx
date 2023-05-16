import React from 'react';
import s from './included.module.scss';

type IncludedPropsType = {
    style: { backgroundImage: string; }
    titleText: string
    secondText: string
}

const Included: React.FC<IncludedPropsType> = ({style, titleText, secondText}) => {
    return (
        <div className={s.img} style={style}>
            <span className={s.titleText}>{titleText}</span>
            <span className={s.secondText}>{secondText}</span>
        </div>
    );
};

export default Included;