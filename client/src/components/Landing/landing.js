import React from 'react';
import LandingStatement from './LandingStatement/landing-statement';
import LandingMain from './LandingMain/landing-main';
import Mission from './Mission/mission';

const Landing = () => {
  return (
    <div>
      <LandingStatement />
      <LandingMain />
      <Mission />
    </div>
  );
};

export default Landing;
