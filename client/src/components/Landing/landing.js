import React, { Component } from 'react';
import LandingStatement from './LandingStatement/landing-statement';
import LandingMain from './LandingMain/landing-main';
import Mission from './Mission/mission';
import ReactGA from 'react-ga';

class Landing extends Component {
  componentDidMount() {
    ReactGA.initialize('UA-162367118-1');
    ReactGA.pageview('/');
  }
  render() {
    return (
      <div>
        <LandingStatement />
        <LandingMain />
        <Mission />
      </div>
    );
  }
}

export default Landing;
