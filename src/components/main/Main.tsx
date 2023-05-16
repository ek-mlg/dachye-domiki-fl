import React from 'react';
import s from './main.module.scss';
import ContactInfo from '../contacts/contactInfo/ContactInfo';
import {categories, servises} from '../../data';
import Categories from '../catalog/categories/Categories';
import Advantages from '../infoProjectPage/advantages/Advantages';
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import './style.css'
import swiperStyle from './swipperSlide.module.css'

import {Autoplay, Navigation, Pagination} from "swiper";
import Projects from '../projectsPage/projects/Projects';
import {NavLink} from 'react-router-dom';
import {PATH} from '../../Pages';
import {useWindowSize} from '../../useWindowSize';
import {Helmet} from "react-helmet";


const Main = () => {
    const title = 'Главная | Дачные домики беседки.рф';
    const description = 'Главная страница';
    const keywords = 'садовые домики, беседки, хозблоки, строительство, под ключ, гарантия, дополнительные услуги, что входит в стоимость, контактная информация, дома из бруса';
    const size = useWindowSize()
    return (
        <>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>{title}</title>
                <meta name="description" content={description}/>
                <meta name="keywords" content={keywords}/>
            </Helmet>

            <div className={s.block}>
                <div className={s.mainSlide}>
                    <div className={s.mainSlideContainer}>

                        <div className={s.textSlide}>
                            <p className={s.descriptionSlide}>
                                Строительство
                            </p>
                            <p className={s.titleSlide}>
                                садовых домиков, беседок, хозблоков
                            </p>

                            <ul className={s.ul}>
                                <li className={s.li}>за один день,</li>
                                <li className={s.li}>под ключ,</li>
                                <li className={s.li}>с гарантией</li>
                            </ul>

                            <NavLink to={PATH.CATALOG}>
                                <button className={s.button}>каталог</button>
                            </NavLink>
                        </div>
                    </div>
                </div>

                <></>
                <div className={s.container}>

                    <div className={s.categoriesContainer}>
                        <p className={s.title}>Категории проектов "Дачные домики беседки.рф"</p>
                        <div className={s.categories}>
                            {categories.map((el) => <Categories
                                key={el.id}
                                title={el.title}
                                link={el.link}
                                style={el.mainPhoto}
                            />)}
                        </div>
                    </div>
                    <p className={s.descriptionText}>"Дачные домики беседки" - компания, которая с 2015 года
                        занимается строительством качественных садовых домов, беседок, хозблоков с гарантией.
                    </p>
                    <p className={s.descriptionText}> Наша компания предлагает широкий ассортимент проектов, которые
                        подходят для любых потребностей. Предоставляем только лучшие материалы: профилированная доска
                        135 х 45 мм., мини брус 135 х 60 мм., клееный брус 135 х 75 мм.
                    </p>
                    <div className={s.advantagesContainer}>
                        <Advantages/>
                    </div>

                    <div className={s.swiperContainer}>
                        <p className={s.swiperTitle}>Наши проекты - домики, беседки, хозблоки</p>
                        <Swiper
                            autoplay={{
                                delay: 3500,
                                disableOnInteraction: false,
                            }}
                            slidesPerView={size > 1340 ? 3 : 1}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className={swiperStyle.mySwiper}
                        >
                            {categories.map((c) => c.data.map((d) => <SwiperSlide>
                                <Projects key={d.id}
                                          classId={d.class}
                                          linkId={d.id} name={d.name}
                                          price={d.minPrice}
                                          square={d.square}
                                          dimensions={d.dimensions}
                                          style={d.style}/>
                            </SwiperSlide>))}
                        </Swiper>
                    </div>

                    <div className={s.serviceContainer}>
                        <p className={s.title}>Дополнительные услуги, что входит в стоимость?</p>
                        <div className={s.service}>
                            {servises.map((s) => <Categories key={s.id} link={s.link} title={s.title}
                                                             style={s.mainPhoto}/>)}
                        </div>
                    </div>

                    <div className={s.contactsContainer}>
                        <p className={s.title}>Контактная информация</p>
                        <div className={s.contacts}>
                            <ContactInfo/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;