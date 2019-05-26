import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navigation from './Components/Navbar/navbar';
import Footer from './Components/Footer/footer';
import './App.css';
import Landing from './Components/landing';
import About from './Components/About/about';

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
