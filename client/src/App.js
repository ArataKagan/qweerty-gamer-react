import React, { Component } from 'react';
import { Route } from 'react-router-dom';
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

class App extends Component {
  render() {
    function initializeReactGA() {
      ReactGA.initialize('UA-162367118-1');
      ReactGA.pageview('/');
    }
    return (
      <div className='App'>
        <nav>
          <Navigation />
        </nav>
        <main>
          <Route exact path='/' component={Landing} />
          <Route path='/event' component={Event} />
          <Route path='/about' component={About} />
          <Route path='/member' component={Member} />
          <Route path='/privacy-policy' component={PrivacyPolicy} />
          <Route path='/contact-us' component={ContactUs} />
          <Route path='/login' component={Login} />
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
