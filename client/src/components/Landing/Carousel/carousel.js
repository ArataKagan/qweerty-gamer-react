import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import style from './carousel.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Slider extends Component {
    render() {
        return (
            <div className="news-main">
                <div className="d-flex bd-highlight">
                        <div className="p-2 flex-fill bd-highlight event">
                                <div className="d-flex flex-column bd-highlight mb-3 event-inner">
                                    <p className="p-2 bd-highlight ad-text">What's happening now</p>
                                    <div>
                                        <Carousel autoplay='true'>
                                            <img src="https://i.imgur.com/1EouPxr.png" alt='logo'/>
                                        </Carousel>
                                    </div>
                                </div>
                        </div>
                        <div className="p-2 flex-fill bd-highlight sign-up">
                                <div className="d-flex flex-column bd-highlight mb-3 sign-up-inner">
                                    <p className="p-2 bd-highlight text1">Come Join Us</p>
                                    <p className="p-2 bd-highlight text2">Email</p>
                                </div>
                        </div>
                </div>
            </div>
        )
    }
}

export default Slider;