import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navigation from './Components/Navbar';
import './App.css';
import Landing from './Components/Landing/Landing';
import About from './Components/About/About';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)

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
      </div>
    );
  }
}

export default App;
