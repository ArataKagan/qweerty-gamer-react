import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styles from './footer.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faMeetup } from '@fortawesome/free-brands-svg-icons'

class Footer extends Component {
    render(){
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
                      <div className="col navigation">
                            <div className="d-flex flex-column bd-highlight mb-3" style={{marginTop: "10px"}}>
                                <Link to="/event"><div className="d-flex flex-column bd-highlight mb-3 footer-list" style={{color:"#eee"}}>Event</div></Link>
                                <Link to="/about"><div className="d-flex flex-column bd-highlight mb-3 footer-list" style={{color:"#eee"}}>About</div></Link>
                                <Link to="https://tiltify.com/qweerty-gamers"><div className="d-flex flex-column bd-highlight mb-3 footer-list" style={{color:"#eee"}}>Donate</div></Link>
                                <Link to="/contact-us"><div className="d-flex flex-column bd-highlight mb-3 footer-list" style={{color:"#eee"}}>Contact Us</div></Link>
                            </div>
                      </div>
                      <div className={styles["social-icons"]} style={{flex: 0, paddingTop: '20px'}}>
                            <div className="d-flex flex-column bd-highlight mb-3 social-icons">
                                <a href='https://www.facebook.com/groups/qweertygamers/'><FontAwesomeIcon icon={faFacebook} size="2x" color="#eee" /></a>
                                <a href='https://twitter.com/qweertygamers'><FontAwesomeIcon icon={faTwitter} size="2x" color="#eee" /></a>
                                <a href='https://twitter.com/qweertygamers'><FontAwesomeIcon icon={faMeetup} size="2x" color="#eee"/></a>
                            </div>
                      </div>
                   </div>
                </div>
               
            </div>

        );
    }
}

export default Footer;