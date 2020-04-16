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
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
history.listen(location => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

class App extends Component {
  render() {
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
