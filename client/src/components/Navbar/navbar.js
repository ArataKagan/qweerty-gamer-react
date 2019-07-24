import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faMeetup } from '@fortawesome/free-brands-svg-icons'
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

    // onMouseEnter = (e) => {
    //    console.log('this is: ', e.target);
    //    this.setState({
    //        isHover: e.target
    //    })
    // } 

    // onMouseLeave = () => {
    //     console.log('mouse left')
    //     this.setState({
    //         isHover: false
    //     })
    // }

    render() {

        const navStyle = {
            color: "#feda6a"
        }
    
        return (
            <div>
                <Navbar style={{backgroundColor: '#1d1e22'}} light expand="md">
                <NavbarBrand href="/" className={styles['main-logo']}><img src={require('./../../assets/images/qg_logo_png.png')} alt="logo" width='200px'/></NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/" style={navStyle} className={styles['nav-item']}>Event</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/about" style={navStyle} className={styles['nav-item']}>About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/" style={navStyle} className={styles['nav-item']}>Blog</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/" style={navStyle} className={styles['nav-item']}>Shopping</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/" style={navStyle} className={styles['nav-item']}>Donate</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/contact-us" style={navStyle} className={styles['nav-item']}>Contact Us</NavLink>
                            </NavItem>
                        
                        <div className="navbar-nav flex-row mb-2"> 
                        <NavItem className={styles['social-icon']}>
                            <a href='https://www.facebook.com/groups/qweertygamers/'><FontAwesomeIcon icon={faFacebook} size="2x" color="#feda6a" /></a>
                        </NavItem> 
                        <NavItem className={styles['social-icon']}>
                            <a href='https://twitter.com/qweertygamers'><FontAwesomeIcon icon={faTwitter} size="2x" color="#feda6a" /></a>
                        </NavItem> 
                        <NavItem className={styles['social-icon']}>
                            <FontAwesomeIcon icon={faMeetup} size="2x" color="#feda6a"/>
                        </NavItem>
                        </div>
                    </Nav>
                </Collapse>
                </Navbar>
            </div>
            
        );
    }
}

export default Navigation;