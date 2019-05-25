import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Slider extends Component {
    render() {
        var carouselStyle = {
            padding: '80px'
        }
        return (
            <div className='carousel' style={carouselStyle}>
                <Carousel>
                    <img src="https://i.imgur.com/1EouPxr.png" alt='logo'/>
                    <img src='https://i.imgur.com/hLjrsgZ.png' alt='image-two' />
                </Carousel>
            </div>
        )
    }
}

export default Slider;