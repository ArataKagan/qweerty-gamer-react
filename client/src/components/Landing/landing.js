import React, { Component } from 'react';
import Slider from './Carousel/carousel';
// import News from './News/news';
import CompanyMission from "./LandingIntro/intro";
import Advertisement from './Advertisement/advertisement';

class Landing extends Component {
    render() {
        return (
            <div>
               <Advertisement />
               <Slider />           
            </div>
        )
    }
}


export default Landing;