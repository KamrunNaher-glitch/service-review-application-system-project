import React from 'react';
import Banner from './Banner';
import Services from './Services';
import Slider from '../Slider/Slider';
import OurPartners from '../Our Partners/Our Partners'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Slider></Slider>
            <Services></Services>
            <OurPartners></OurPartners>
        </div>
    );
};

export default Home;