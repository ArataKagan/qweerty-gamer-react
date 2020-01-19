import React, { Component } from 'react';
import LandingStatement from './LandingStatement/landing-statement';
import LandingMain from './LandingMain/landing-main';
import Mission from "./Mission/mission";


class Landing extends Component {
    render() {
        return (
            <div>
               <LandingStatement />
               <LandingMain />
               <Mission />           
            </div>
        )
    }
}


export default Landing;