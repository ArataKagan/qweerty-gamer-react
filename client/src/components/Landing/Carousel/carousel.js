import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import style from './carousel.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Slider extends Component {
    render() {
        
        return (
            <div className="d-flex bd-highlight">

                    <div class="p-2 flex-grow-1 bd-highlight">
                            <div className={style['carousel']} style={{padding: '50px'}}>
                                {/* <Carousel 
                                    autoplay='true'
                                    style={{marginLeft: 'auto', marginRight: 'auto'}}
                                >
                                    <img src="https://i.imgur.com/1EouPxr.png" alt='logo'/>
                                </Carousel> */}
                            </div>
                    </div>

                    <div class="p-2 bd-highlight">
                            <div className="sign-up">
                                <p>Come Join Us</p>
                                <p>Email</p>
                            </div>
                    </div>
                
            </div>
        )
    }
}

export default Slider;