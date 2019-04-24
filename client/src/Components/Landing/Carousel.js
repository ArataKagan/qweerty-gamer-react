import React, { Component } from 'react';
import Carousel from 'nuka-carousel';

class Slider extends Component {
    render() {
        return (
            <div className='Carousel'>
                <Carousel>
                    <img src="https://i.imgur.com/1EouPxr.png" alt='logo'/>
                </Carousel>
            </div>
        )
    }
}

export default Slider;