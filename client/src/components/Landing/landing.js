import React, { Component } from 'react';
import Slider from './Carousel/carousel';
import LandingIntro from './LandingIntro/intro';
import News from './News/news';
import Advertisement from './Advertisement/advertisement';
import style from './landing.module.css';

class Landing extends Component {
    render() {
        return (
            <div className={style['landing']}>
               <Slider />
               <News />
        
               <Advertisement />
               
            </div>
        )
    }
}


export default Landing;