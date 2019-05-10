import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import Zoom from 'react-reveal/Zoom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Slider extends Component {
    render() {
        return (
            <div className='Carousel'>
                <Zoom>
                    <Carousel>
                        <img src="https://i.imgur.com/1EouPxr.png" alt='logo'/>
                        <img src='https://i.imgur.com/hLjrsgZ.png' alt='image-two' />
                    </Carousel>
                </Zoom>
            </div>
        )
    }
}

export default Slider;