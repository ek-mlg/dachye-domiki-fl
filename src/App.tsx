import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Pages from "./Pages";
import Footer from "./components/footer/footer";
import ScrollToTop from '../src/ScrollToTop';
import {Helmet} from "react-helmet";



function App() {

    const title = 'Дачные домики беседки.рф - строительство садовых домиков, беседок, хозблоков';
    const description = 'Мы предлагаем строительство садовых домиков, беседок, хозблоков за один день, под ключ, с гарантией!';
    const keywords = 'садовые домики, беседки, хозблоки, строительство, под ключ, гарантия';

    return (

        <div className={"App"}>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>{title}</title>
                <meta name="description" content={description}/>
                <meta name="keywords" content={keywords}/>
            </Helmet>
            <Header/>
            <Pages/>
            <Footer/>
            <ScrollToTop/>
        </div>
    );
}

export default App;
