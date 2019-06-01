import React, { Component } from 'react';
import Slider from './carousel';
import News from './news';

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