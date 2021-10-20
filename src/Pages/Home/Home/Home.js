// home page is here
import React from 'react';
import Banner from '../Banner/Banner';
import Doctor from '../Doctor/Doctor';
import Gallary from '../Gallary/Gallary';
import Services from '../Services/Services';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Doctor></Doctor>
            <Gallary></Gallary>
        </div>
    );
};

export default Home;