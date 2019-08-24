import React, { Component } from 'react';
import Slider from './Carousel/carousel';
// import News from './News/news';
import CompanyMission from "./LandingIntro/intro";
import Advertisement from './Advertisement/advertisement';

class Landing extends Component {
    render() {
        let inlineStyle = {
            backgroundColor : '#1d1e22'
        }
        return (
            <div style={inlineStyle}>
               <Advertisement />
               <Slider />
               <CompanyMission />
               
               
            </div>
        )
    }
}


export default Landing;