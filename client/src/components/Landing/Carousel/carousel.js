import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import style from './carousel.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Slider extends Component {
    render() {
        
        return (
            <div className={style['carousel']}>
                <Carousel 
                    autoplay='true'
                >
                    <img src="https://i.imgur.com/1EouPxr.png" alt='logo'/>
                    <img src='https://i.imgur.com/hLjrsgZ.png' alt='image-two' />
                </Carousel>
            </div>
        )
    }
}

export default Slider;