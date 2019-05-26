import React, { Component } from 'react';
import Slider from './Landing/Carousel/carousel';
import News from './Landing/News/news';

class Landing extends Component {
    render() {
        return (
            <div className='Landing'>
                
               <Slider />
               <News />
            </div>
        )
    }
}


export default Landing;