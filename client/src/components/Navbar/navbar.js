import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faMeetup
} from '@fortawesome/free-brands-svg-icons';
import styles from './navbar.module.css';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isHover: false,
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const navStyle = {
      color: '#ffffff',
      fontFamily: 'Bungee',
      textDecoration: 'none'
    };

    const donateNavStyle = {
      color: '#C4D759',
      fontFamily: 'Bungee',
      textDecoration: 'none',
      border: '2px solid #C4D759',
      boxSizing: 'border-box',
      borderRadius: '13px'
    };

    return (
      <div>
        <Navbar style={{ backgroundColor: '#1d1e22' }} light expand='md'>
          <NavbarBrand href='/' className={styles['main-logo']}>
            <img
              src={require('./../../assets/images/qg_logo_png.png')}
              alt='logo'
              width='200px'
            />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink
                  href='/'
                  style={navStyle}
                  className={styles['nav-item']}
                >
                  HOME
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href='/event'
                  style={navStyle}
                  className={styles['nav-item']}
                >
                  EVENTS
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href='/about'
                  style={navStyle}
                  className={styles['nav-item']}
                >
                  ABOUT
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href='https://www.etsy.com/shop/qweertygamers/'
                  style={navStyle}
                  className={styles['nav-item']}
                >
                  SHOPPING
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href='/contact-us'
                  style={navStyle}
                  className={styles['nav-item']}
                >
                  CONTACT US
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href='https://tiltify.com/qweerty-gamers'
                  style={donateNavStyle}
                  className={styles['nav-item']}
                >
                  DONATE
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
