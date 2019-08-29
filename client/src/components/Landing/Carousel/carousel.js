import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import style from './carousel.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faMeetup } from '@fortawesome/free-brands-svg-icons'

class Slider extends Component {
    render() {
        return (
            <div className="news-main">
                    <div className="event">
                        <div className="event-inner">
                            <p className="p-2 bd-highlight ad-text">What's happening now</p>
                            <div>
                                <Carousel autoplay='true'>
                                    <img src="https://i.imgur.com/ExlV7U0.png" className="pokemon-go-event" alt='logo'/>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-column bd-highlight social-middle">
                            <div className="social-middle-inner">
                                <p className="p-2 bd-highlight text1">Connect With Us</p>
                                <div className="social-icons-middle">
                                    <a href='https://www.facebook.com/groups/qweertygamers/'><FontAwesomeIcon icon={faFacebook} className="facebook" color="#eee" /></a>
                                    <a href='https://twitter.com/qweertygamers'><FontAwesomeIcon icon={faTwitter} className="twitter" color="#eee" /></a>
                                    <FontAwesomeIcon icon={faMeetup} className="meetup" color="#eee"/>
                                </div>
                            </div>
                    </div>
            </div>
        )
    }
}

export default Slider;