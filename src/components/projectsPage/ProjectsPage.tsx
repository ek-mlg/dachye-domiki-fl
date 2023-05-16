import React from 'react';
import PageTitle from '../pageTitle/PageTitle';
import s from './projectsPage.module.scss'
import Projects from './projects/Projects';
import photo from '../../assets/photos/gazebosMain.jpg';
import {useLocation} from "react-router-dom";
import {PATH} from '../../Pages';
import {Helmet} from "react-helmet";


type ProjectsPropsType = {
    data?: ProjectsType[]
}

type ProjectsType = {
    id: string,
    name: string,
    minPrice: string,
    square: string,
    dimensions: string
    class: string
    style: { backgroundImage: string }
}

const ProjectsPage: React.FC<ProjectsPropsType> = ({data}) => {

    const bgPhoto = {
        backgroundImage: `url(${photo})`,
    };

    const location = useLocation()
    const currentPath = location.pathname

    const secondPageName =
        currentPath === '/catalog/houses' ? 'Садовые дома'
            : currentPath === '/catalog/gazebos' ? 'Беседки'
                : currentPath === '/catalog/hozblocks' ? 'Хозблоки'
                    : currentPath === '/catalog/toilets' ? 'Туалеты'
                        : 'Ошибка: 404'

    return (
        <>
            <Helmet>
                <title>{secondPageName} - Дачные домики беседки.рф</title>
                <meta name="description"
                      content="На странице с проектами 'Дачные домики беседки хозлоки' вы найдете различные варианты дачных построек, которые мы можем построить для вас. У нас есть множество проектов домиков, беседок, хозблоков и туалетов, которые подходят для любых потребностей. Каждый проект снабжен описанием и фотографиями, чтобы вы могли лучше представить, как будет выглядеть готовое строение на вашем участке. Мы гарантируем качество и надежность всех наших проектов, а наши высококвалифицированные специалисты всегда готовы помочь вам в реализации ваших идей."/>
                <meta name="keywords"
                      content="домики, беседки, хозблоки, дачные постройки, проекты, строительство, материалы, специалисты, гарантия"/>
            </Helmet>

            <div className={s.block}>
                <PageTitle style={bgPhoto} pageName={'Каталог'} secondPageName={secondPageName}
                           linkPageName={PATH.CATALOG}/>
                <div className={s.container}>
                    {data?.map((d) =>
                        <Projects key={d.id}
                                  classId={d.class}
                                  linkId={d.id}
                                  name={d.name}
                                  price={d.minPrice}
                                  square={d.square}
                                  dimensions={d.dimensions}
                                  style={d.style}/>)}
                </div>
            </div>
        </>
    );
};

export default ProjectsPage;