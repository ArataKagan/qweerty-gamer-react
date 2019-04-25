import React, { Component } from 'react';
import Navigation from './Navbar';
import Slider from './Carousel';

class Landing extends Component {
    render() {
        return (
            <div className='Landing'>
                <Navigation />
               <Slider />
            </div>
        )
    }
}


export default Landing;