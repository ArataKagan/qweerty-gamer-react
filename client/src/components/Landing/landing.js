import React, { Component } from 'react';
import Slider from './Carousel/carousel';
import LandingIntro from './LandingIntro/intro';
import News from './News/news';
import Advertisement from './Advertisement/advertisement';
import style from './landing.module.css';

class Landing extends Component {
    render() {
        let inlineStyle = {
            backgroundColor : '#1d1e22'
        }
        return (
            <div style={inlineStyle}>
               <Slider />
               <News />
        
               <Advertisement />
               
            </div>
        )
    }
}


export default Landing;