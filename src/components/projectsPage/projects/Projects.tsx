import React from 'react';
import s from './projects.module.scss';
import priceIcon from '../../../assets/svg/price.svg'
import dimensionsIcon from '../../../assets/svg/dimensions.svg'
import squareIcon from '../../../assets/svg/square.svg'
import {NavLink} from "react-router-dom";


type ProjectsPropsType = {
    name: string
    dimensions: string
    price: string
    square: string
    linkId: string
    classId: string
    style: { backgroundImage: string }

}

const Projects: React.FC<ProjectsPropsType> = ({linkId, name, dimensions, price, square, classId, style}) => {

    return (
        <NavLink className={s.nav} to={`/catalog/${classId}/${linkId}`}>
            <div className={s.container}>
                <div className={s.imgContainer}>
                    <div className={s.img} style={style}/>
                </div>
                <div className={s.infoContainer}>
                    <div className={s.leftBlock}>

                        <span className={s.name}>{name}</span>
                        <div className={s.descriptionContainer}>
                            <img src={dimensionsIcon} alt={"icon"} className={s.icons}/>
                            <div className={s.textContainer}>
                                <span className={s.textSecond}>размеры:</span>
                                <span className={s.textTitle}>{dimensions}</span>
                            </div>
                        </div>

                    </div>

                    <div className={s.rightBlock}>

                        <div className={s.rightTextContainer}>
                            <img src={priceIcon} alt={"icon"} className={s.icons}/>
                            <div className={s.textContainer}>
                                <span className={s.textSecond}>цена от:</span>
                                <span className={s.textTitle}>{price}</span>
                            </div>
                        </div>
                        <div className={s.rightTextContainer}>
                            <img src={squareIcon} alt={"icon"} className={s.icons}/>
                            <div className={s.textContainer}>
                                <span className={s.textSecond}>площадь:</span>
                                <span className={s.textTitle}>{square}</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </NavLink>
    );
};

export default Projects;