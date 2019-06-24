import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navigation from './components/Navbar/navbar';
import Footer from './components/Footer/footer';
import './App.css';
import Landing from './components/Landing/landing';
import About from './components/About/about';
import Member from './components/About/Member/member';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <nav>
          <Navigation />
        </nav>
        <main>
          <Route exact path='/' component={ Landing } />
          <Route path='/about' component={ About } />
          <Route path='/about/member' component={ Member } />
        </main>
        
        <Footer />
      </div>
    );
  }
}

export default App;
