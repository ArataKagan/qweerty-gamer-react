import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styles from './footer.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faMeetup, faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons'

class Footer extends Component {
    render(){
        const pStyle = {
            paddingRight: '60px'
        }

        return(
            <div className={styles['footer']}>
                <div className="container">
                   <div className="row">
                      <div className='col'>
                            <div className={styles['row']}>
                                <img src={require('./../../assets/images/qg_logo_png.png')} alt='logo' width='200px'/>
                                <div className="d-flex flex-column bd-highlight mb-3">
                                    <div className="p-2 bd-highlight">© QWEERTY GAMERS 2019. ALL RIGHTS RESERVED.</div>
                                    <div className={styles['privacy-policy-link']}>
                                        <Link to='/privacy-policy' style={{ color: '#eee', fontWeight: 'bolder' }}>
                                            <div>Privacy Policy</div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                      </div>
                      <div className={styles["social-icons"]} style={{flex: 0, paddingTop: '20px'}}>
                            <div className="d-flex flex-row bd-highlight mb-3 social-icons">
                                <p style={pStyle}>CONNECT WITH US</p>
                                <a href='https://www.facebook.com/groups/qweertygamers/'><FontAwesomeIcon icon={faFacebook} size="2x" color="#eee" /></a>
                                <a><FontAwesomeIcon icon={faInstagram} size="2x" color="#eee" /></a>
                                <a href='https://twitter.com/qweertygamers'><FontAwesomeIcon icon={faTwitter} size="2x" color="#eee" /></a>
                                <a href='https://twitter.com/qweertygamers'><FontAwesomeIcon icon={faMeetup} size="2x" color="#eee"/></a>
                                <a><FontAwesomeIcon icon={faDiscord} size="2x" color="#eee" /></a>
                            </div>
                      </div>
                   </div>
                </div>
               
            </div>

        );
    }
}

export default Footer;