import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import style from './carousel.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Slider extends Component {
    render() {
        
        return (
            <div className={style['carousel']} style={{padding: '50px'}}>
                <Carousel 
                    autoplay='true'
                    style={{marginLeft: 'auto', marginRight: 'auto'}}
                >
                    <img src="https://i.imgur.com/1EouPxr.png" alt='logo'/>
                </Carousel>
            </div>
        )
    }
}

export default Slider;