import React, { Component } from 'react';
import Slider from './Carousel/carousel';
// import News from './News/news';
import Mission from "./Mission/mission";
import Advertisement from './Advertisement/advertisement';

class Landing extends Component {
    render() {
        return (
            <div>
               <Advertisement />
               <Slider />
               <Mission />           
            </div>
        )
    }
}


export default Landing;