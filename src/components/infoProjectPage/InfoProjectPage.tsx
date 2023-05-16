import React, {useState} from 'react';
import s from './infoProjectPage.module.scss';
import NavTitle from '../pageTitle/navTitle/NavTitle';
import Included from './included/Included';

import strappingImg from '../../assets/photos/strapping.jpeg'
import roofImg from '../../assets/photos/servicesPhotos/shinglas.jpeg'
import assemblyImg from '../../assets/photos/assembly.jpeg'
import wallsImg from '../../assets/photos/walls.jpg'
import floorImg from '../../assets/photos/floor.jpg'
import foundationImg from '../../assets/photos/servicesPhotos/foundation.jpeg'

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swiper-pagination.css'
import {Autoplay, Pagination, Navigation, FreeMode, Thumbs} from 'swiper';
import {examplesGazebosPhotos} from '../../data';
import {useLocation} from "react-router-dom";
import {PATH} from '../../Pages';
import Advantages from './advantages/Advantages';
import {Helmet} from "react-helmet";


type InfoProjectPagePropsType = {
    name: string,
    description: string,
    square: string,
    dimensions: string,
    layout: string,
    firstMaterial: { title: string, price: string },
    secondMaterial: { title: string, price: string },
    thirdMaterial: { title: string, price: string },
    images: ImagesType[],
    plan?: string
}

type ImagesType = {
    img: string
}


const InfoProjectPage: React.FC<InfoProjectPagePropsType> = (props) => {

    const {
        name,
        description,
        square,
        dimensions,
        layout,
        firstMaterial,
        secondMaterial,
        thirdMaterial,
        images,
        plan
    } = props

    const strapping = {
        backgroundImage: `url(${strappingImg})`,
    };
    const roof = {
        backgroundImage: `url(${roofImg})`,
    };
    const assembly = {
        backgroundImage: `url(${assemblyImg})`,
    };
    const walls = {
        backgroundImage: `url(${wallsImg})`,
    };
    const floor = {
        backgroundImage: `url(${floorImg})`,
    };
    const foundation = {
        backgroundImage: `url(${foundationImg})`,
    };


    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

    const location = useLocation()
    const currentPath = location.pathname

    let secondPageName;
    let linkSecondPageName;

    if (currentPath.startsWith('/catalog/houses')) {
        secondPageName = 'Садовые дома';
        linkSecondPageName = '/catalog/houses'
    } else if (currentPath.startsWith('/catalog/gazebos')) {
        secondPageName = 'Беседки';
        linkSecondPageName = '/catalog/gazebos'
    } else if (currentPath.startsWith('/catalog/hozblocks')) {
        secondPageName = 'Хозблоки';
        linkSecondPageName = '/catalog/hozblocks'
    } else if (currentPath.startsWith('/catalog/toilets')) {
        secondPageName = 'Туалеты';
        linkSecondPageName = '/catalog/toilets'
    } else {
        secondPageName = 'Ошибка: 404';
        linkSecondPageName = '/main'
    }

    return (

        <>
            <Helmet>
                <title>{name} - Дачные домики беседки.рф</title>
                <meta name="description" content={description}/>
                <meta name="keywords" content="домик, дачный, проект, беседка, хозблок, садовый, строительство"/>
                <meta property="og:title" content={`Проект ${name} | Дачные домики беседки`}/>
                <meta property="og:description"
                      content={`Подробное описание проекта ${name} компании 'Дачные домики беседки.рф'. В данном проекте используются высококачественные материалы и современные технологии строительства.`}/>

            </Helmet>
            <div className={s.block}>
                <div className={s.container}>
                    <NavTitle pageName={'Каталог'} secondPageName={secondPageName} linkPageName={PATH.CATALOG}
                              linkSecondPageName={linkSecondPageName}/>
                    <h1 className={s.title}>{name}</h1>
                    <div className={s.sliderCharacteristicsContainer}>
                        <div className={s.sliderContainer}>
                            <Swiper
                                className={s.slider}
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 5500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    type: "bullets",
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Autoplay, Pagination, Navigation]}
                            >
                                {images.map((i, index) =>
                                    <SwiperSlide key={index}><img src={i.img} alt={'Изображение'}/></SwiperSlide>
                                )}
                            </Swiper>
                        </div>
                        <div className={s.characteristicsContainer}>
                            <p className={s.textTitle}>стоимость из различных материалов</p>
                            <div className={s.priceContainer}>
                                <p className={s.textSecondContainer}>{firstMaterial.title}</p>
                                <p className={s.price}>{firstMaterial.price}</p>
                            </div>
                            <div className={s.priceContainer}>
                                <p className={s.textSecondContainer}>{secondMaterial.title}</p>
                                <p className={s.price}>{secondMaterial.price}</p>
                            </div>
                            <div className={s.priceContainer}>
                                <p className={s.textSecondContainer}>{thirdMaterial.title}</p>
                                <p className={s.price}>{thirdMaterial.price}</p>
                            </div>
                            <p className={s.textTitle}>характеристики</p>
                            <div className={s.harContainer}>
                                <p className={s.textSecond}>площадь: <span
                                    className={s.textSecondStrong}>{square}</span>
                                </p>
                                <p className={s.textSecond}>размеры: <span
                                    className={s.textSecondStrong}>{dimensions}</span></p>
                                <p className={s.textSecond}>планировка: <span
                                    className={s.textSecondStrong}>{layout}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    {
                        plan === undefined
                            ? ''
                            :
                            <div className={s.planContainer}>
                                <p className={s.planTitle}>План проекта</p>
                                <div className={s.imgPlanContainer}>
                                    <img className={s.imgPlan} alt={'План проекта'} src={plan}/>
                                </div>
                            </div>
                    }
                    <div className={s.advantagesContainer}>
                        <Advantages/>
                    </div>
                    <div className={s.descriptionContainer}>
                        <p className={s.descriptionTitle}>Описание проекта</p>
                        <p className={s.descriptionText}>{description}</p>
                    </div>
                    <div className={s.includedContainer}>
                        <p className={s.includedTitle}>В стоимость включено</p>
                        <div className={s.included}>
                            <Included style={strapping} titleText={"Обвязка"} secondText={"брус 100 х 100 мм."}/>
                            <Included style={roof} titleText={"Кровля"}
                                      secondText={"мягкая черепица \"Шинглас\" цвета: Рубин, Малахит, Янтарь"}/>
                            <Included style={assembly} titleText={"Сборка на участке"}
                                      secondText={"входит в стоимость"}/>
                            <Included style={walls} titleText={"Стены и перегородки"}
                                      secondText={"материал камерной сушки, на выбор: профилированная доска 135х45 мм., мини брус 135х60 мм., клееный брус 135х75 мм."}/>
                            <Included style={floor} titleText={"Полы"}
                                      secondText={"шпунтованная доска камерной сушки, сечение - 35 мм."}/>
                            <Included style={foundation} titleText={"Фундамент"} secondText={"Блочный 30х20х20 см."}/>
                        </div>
                    </div>

                    <p className={s.examplesTitle}>Примеры наших работ</p>

                    <div className={s.examplesSliderContainer}>

                        <Swiper
                            spaceBetween={10}
                            navigation={true}
                            thumbs={{swiper: thumbsSwiper}}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2"
                        >
                            {examplesGazebosPhotos.map((img, index) =>
                                <SwiperSlide key={index}><img alt={img.alt} src={img.src}/></SwiperSlide>
                            )}
                        </Swiper>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={10}
                            slidesPerView={4}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper"
                        >
                            {examplesGazebosPhotos.map((img, index) =>
                                <SwiperSlide key={index}><img alt={img.alt} src={img.src}/></SwiperSlide>
                            )}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InfoProjectPage;