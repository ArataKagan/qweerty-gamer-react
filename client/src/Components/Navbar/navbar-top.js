import React, { Component } from 'react';
import styles from './navbar.module.css';

class NavbarTop extends Component {
    render(){
        return(
            <div className={styles['nav-top']}>
                <p>Want to join our group? Contact us at XXX</p>
            </div>
        );
    }
}

export default NavbarTop;