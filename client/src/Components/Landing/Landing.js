import React, { Component } from 'react';
import Slider from './Carousel';
import News from './News';

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