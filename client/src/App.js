import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navigation from './navbar';
import Footer from './footer';
import './App.css';
import Landing from './components/Landing/landing';
import About from './components/About/about';

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
        </main>
        
        <Footer />
      </div>
    );
  }
}

export default App;
