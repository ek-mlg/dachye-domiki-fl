import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Error404 from './components/error404/Error404';
import Catalog from './components/catalog/Catalog';
import Services from './components/services/Services';
import Main from './components/main/Main';
import Contacts from './components/contacts/Contacts';
import About from './components/about/About';
import ProjectsPage from './components/projectsPage/ProjectsPage';
import {categories} from '../src/data';
import InfoProjectPage from './components/infoProjectPage/InfoProjectPage';
import RoofPage from './components/services/servicesPages/roofPage/RoofPage';
import WindowPage from './components/services/servicesPages/windowPage/WindowPage';
import WarmingPage from './components/services/servicesPages/warmingPage/WarmingPage';
import TreatmentPage from './components/services/servicesPages/treatmentPage/TreatmentPage';
import MaterialsPage from './components/services/servicesPages/materialsPage/MaterialsPage';
import FoundationPage from './components/services/servicesPages/foundationPage/FoundationPage';
import DeliveryPage from './components/services/servicesPages/deliveryPage/DeliveryPage';
import AssemblyPage from './components/services/servicesPages/assemblyPage/AssemblyPage';

export const PATH = {
    MAIN: '/main',
    SERVICES: '/services',
    ABOUT: '/about',
    CONTACTS: '/contacts',
    CATALOG: '/catalog',

    CATALOG_HOUSES: '/catalog/houses',
    CATALOG_GAZEBOS: '/catalog/gazebos',
    CATALOG_HOZBLOCKS: '/catalog/hozblocks',
    CATALOG_TOILETS: '/catalog/toilets',

    SERVICES_ASSEMBLY: '/services/assembly',
    SERVICES_MATERIALS: '/services/materials',
    SERVICES_ROOF: '/services/roof',
    SERVICES_FOUNDATION: '/services/foundation',
    SERVICES_DELIVERY: '/services/delivery',
    SERVICES_WINDOW: '/services/window',
    SERVICES_WARMING: '/services/warming',
    SERVICES_TREATMENT: '/services/treatment'
}

const Pages = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Navigate to={'/main'}/>}/>

            <Route path={'/main'} element={<Main/>}/>
            <Route path={'/services'} element={<Services/>}/>
            <Route path={'/about'} element={<About/>}/>
            <Route path={'/contacts'} element={<Contacts/>}/>
            <Route path={'/catalog'} element={<Catalog/>}/>
            <Route path={'/error404'} element={<Error404/>}/>

            {categories.map((el) => <Route key={el.id} path={`${el.link}`} element={<ProjectsPage data={el.data}/>}/>)}

            {categories.map((el) => el.data?.map((d)=> <Route path={`${el.link}/${d.id}`} element={<InfoProjectPage key={d.id} name={d.name} description={d.description} square={d.square} dimensions={d.dimensions} layout={d.layout} firstMaterial={d.firstMaterial} secondMaterial={d.secondMaterial} thirdMaterial={d.thirdMaterial} images={d.images} plan={d.plan} />}/>))}

            <Route path={`services/assembly`} element={<AssemblyPage />}/>
            <Route path={`services/materials`} element={<MaterialsPage />}/>
            <Route path={`services/roof`} element={<RoofPage />}/>
            <Route path={`services/foundation`} element={<FoundationPage />}/>
            <Route path={`services/delivery`} element={<DeliveryPage />}/>
            <Route path={`services/window`} element={<WindowPage />}/>
            <Route path={`services/warming`} element={<WarmingPage />}/>
            <Route path={`services/treatment`} element={<TreatmentPage />}/>

            <Route path={'/*'} element={<Navigate to={'/error404'}/>}/>
        </Routes>
    );
};

export default Pages;