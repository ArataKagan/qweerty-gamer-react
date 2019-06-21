import React, { Component } from 'react';
import Slider from './Carousel/carousel';
import News from './News/news';
import Advertisement from './Advertisement/advertisement';

class Landing extends Component {
    render() {
        return (
            <div className='Landing'>
                
               <Slider />
               <News />
               <Advertisement />
            </div>
        )
    }
}


export default Landing;