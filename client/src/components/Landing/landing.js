import React, { Component } from 'react';
import Slider from './Carousel/carousel';
// import News from './News/news';
import Advertisement from './Advertisement/advertisement';

class Landing extends Component {
    render() {
        let inlineStyle = {
            backgroundColor : '#1d1e22'
        }
        return (
            <div style={inlineStyle}>
               <Slider />
               <Advertisement />
               
            </div>
        )
    }
}


export default Landing;