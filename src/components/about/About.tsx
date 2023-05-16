import React, {useState} from 'react';
import PageTitle from '../pageTitle/PageTitle';
import s from './about.module.scss';
import photo from '../../assets/photos/about.jpeg';

import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Navigation, Thumbs} from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./swipperSlide.css"

import {examplesGazebosPhotos} from '../../data'
import {PATH} from '../../Pages';
import Advantages from './advantages/Advantages';
import {Helmet} from "react-helmet";

const About = () => {

    const bgPhoto = {
        backgroundImage: `url(${photo})`,
    };

    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

    return (

        <>
            <Helmet>
                <title>О компании | Дачные домики беседки.рф</title>
                <meta name="description"
                      content="Мы - компания, которая с 2015 года занимается строительством качественных садовых домов, беседок, хозблоков с гарантией. Гарантируем качество и надежность всех наших проектов. Имеем высококвалифицированных специалистов в области строительства, которые готовы помочь нашим клиентам в реализации их идей и создании уютного и функционального пространства на их участке."/>
                <meta name="keywords"
                      content="садовые дома, беседки, хозблоки, гарантия, дома из бруса, дома из сруба, комфорт, профилированная доска 135х45 мм., мини брус 135х60 мм., клееный брус 135х75 мм."/>
            </Helmet>

            <div className={s.block}>
                <PageTitle style={bgPhoto} pageName={'О компании'} linkPageName={PATH.ABOUT}/>
                <div className={s.container}>

                    <p className={s.title}>О компании "Дачные домики беседки"</p>

                    <p className={s.secondText}>"Дачные домики беседки" - компания, которая с 2015 года
                        занимается строительством качественных садовых домов, беседок, хозблоков с гарантией.</p>

                    <p className={s.secondText}>Наша компания предлагает широкий ассортимент проектов, которые подходят
                        для любых потребностей. Предоставляем только лучшие материалы: профилированная доска 135х45 мм.,
                        мини брус 135х60 мм., клееный брус 135х75 мм.</p>

                    <p className={s.secondText}>Гарантируем качество и надежность всех наших проектов.</p>

                    <p className={s.secondText}>Мы имеем высококвалифицированных специалистов в области
                        строительства, которые готовы помочь нашим клиентам в реализации их идей и создании уютного и
                        функционального пространства на их участке.</p>

                    <Advantages/>

                    <div className={s.containerLegalInformation}>
                        <p className={s.title}>Юридическая информация</p>
                        <p className={s.secondText}>Уважаемые клиенты! Хотим обратить ваше внимание на важные
                            юридические аспекты, связанные с заключением договора на строительство садовых домиков,
                            беседок и хозблоков.</p>
                        <p className={s.secondText}>Перед началом работ мы заключаем с каждым клиентом договор
                            строительного подряда, в котором указываются все условия, сроки и стоимость работ. Договор
                            обязателен для заключения, так как он является основным документом, регулирующим отношения
                            между заказчиком и исполнителем.</p>
                        <p className={s.secondText}>Мы гарантируем, что наши услуги соответствуют всем требованиям
                            законодательства Российской Федерации, а также правилам техники безопасности и строительных
                            норм.</p>
                        <p className={s.secondText}>Скачать договор строительного подряда можно по ссылке: <a
                            href={'https://disk.yandex.ru/i/6JoRrCLySGDrbA'} rel="noreferrer" target="_blank" className={s.download}>Договор строительного подряда</a></p>
                    </div>
                    <p className={s.title}>Примеры наших работ</p>

                    <div className={s.sliderContainer}>
                        <Swiper
                            spaceBetween={10}
                            navigation={true}
                            thumbs={{swiper: thumbsSwiper}}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2"
                        >
                            {examplesGazebosPhotos.map((img, index) =>
                                <SwiperSlide key={index}><img alt={img.alt} src={img.src}/></SwiperSlide>)}
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
                                <SwiperSlide key={index}><img alt={img.alt} src={img.src}/></SwiperSlide>)}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;