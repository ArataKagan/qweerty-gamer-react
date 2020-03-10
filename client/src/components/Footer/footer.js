import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styles from './footer.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faMeetup, faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons'

class Footer extends Component {
    render(){
        // const pStyle = {
        //     paddingRight: '60px',
        //     position: "absolute",
        //     top: "30%",
        //     whiteSpace: "nowrap"
        // }

        return(
             <div className={styles['footer']}>
                   <div className="d-flex bd-highlight">
                      <div className="p-2 flex-fill bd-highlight">
                            <div className={styles["logo-inner"]}>
                                <div className={styles['row']}>
                                    <img src={require('./../../assets/images/qg_logo_png.png')} alt='logo' width='200px'/>
                                    <div className="d-flex flex-column bd-highlight mb-3">
                                        <div className="p-2 bd-highlight">© QWEERTY GAMERS 2019. ALL RIGHTS RESERVED.</div>
                                        <Link to='/privacy-policy'>
                                            <div className={styles["privacy-policy"]}>Privacy Policy</div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                      </div>
                      <div className="p-2 flex-fill bd-highlight" style={{position:"relative"}}>
                            <div className={styles['row']}>
                                    <p className={styles["connect-with-us"]}>CONNECT WITH US</p>
                            </div>
                      </div>
                      <div className="p-2 flex-fill bd-highlight" style={{position:"relative"}}>
                            <div className={styles["social-icons"]} style={{flex: 0, paddingTop: '20px', position:"absolute", top:"13%"}}>
                                    <div className="d-flex flex-row bd-highlight mb-3 social-icons">
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