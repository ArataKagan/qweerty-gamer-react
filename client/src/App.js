import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navbar/navbar';
import Footer from './components/Footer/footer';
import Landing from './components/Landing/landing';
import Event from './components/Event/event';
import About from './components/About/about';
import Member from './components/About/Member/member';
import ContactUs from './components/ContactUs/contact-us';
import PrivacyPolicy from './components/Footer/PrivacyPolicy/privacy-policy';
import Login from './components/Login/login';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-150899979-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => (
  <Router>
    <Fragment>
      <div className='App'>
        <Navigation />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/event' component={Event} />
          <Route exact path='/about' component={About} />
          <Route exact path='/member' component={Member} />
          <Route exact path='/privacy-policy' component={PrivacyPolicy} />
          <Route exact path='/contact-us' component={ContactUs} />
          <Route exact path='/login' component={Login} />
        </Switch>

        <Footer />
      </div>
    </Fragment>
  </Router>
);

export default App;
