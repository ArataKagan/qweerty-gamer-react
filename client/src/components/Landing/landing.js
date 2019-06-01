import React, { Component } from 'react';
import Slider from './Carousel/carousel';
import News from './News/news';

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