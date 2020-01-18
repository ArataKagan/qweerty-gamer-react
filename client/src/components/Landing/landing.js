import React, { Component } from 'react';
import Mission from "./Mission/mission";
import LandingMain from './LandingMain/landing-main';

class Landing extends Component {
    render() {
        return (
            <div>
               <LandingMain />
               <Mission />           
            </div>
        )
    }
}


export default Landing;