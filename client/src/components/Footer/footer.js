import React from 'react';
import { Link } from 'react-router-dom';
import styles from './footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faMeetup,
  faInstagram,
  faDiscord,
  faTwitch
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className={styles['footer']}>
      <div className='row'>
        <div className='col-md-4 text-center text-md-left'>
          <div className={styles['first-row']}>
            <img
              src={require('./../../assets/images/qg_logo_png.png')}
              alt='logo'
              width='200px'
            />
            <div className='d-flex flex-column bd-highlight mb-3'>
              <div className='p-2 bd-highlight'>
                © QWEERTY GAMERS 2020. ALL RIGHTS RESERVED.
              </div>
              <Link to='/privacy-policy'>
                <div className={styles['privacy-policy']}>Privacy Policy</div>
              </Link>
            </div>
          </div>
        </div>
        <div className='col-md-4 text-center text-md-left'>
          <div className={styles['second-row']}>
            <p>CONNECT WITH US</p>
          </div>
        </div>
        <div
          className='col-md-4 text-center text-md-left'
          style={{ position: 'relative' }}
        >
          <div className={styles['third-row']}>
            <a href='https://www.facebook.com/groups/qweertygamers/'>
              <FontAwesomeIcon icon={faFacebook} size='2x' color='#eee' />
            </a>
            <a href='https://www.instagram.com/qweertygamers/'>
              <FontAwesomeIcon icon={faInstagram} size='2x' color='#eee' />
            </a>
            <a href='https://twitter.com/qweertygamers'>
              <FontAwesomeIcon icon={faTwitter} size='2x' color='#eee' />
            </a>
            <a href='https://www.meetup.com/qweertygamers'>
              <FontAwesomeIcon icon={faMeetup} size='2x' color='#eee' />
            </a>
            <a href='https://www.twitch.tv/qweertygamers'>
              <FontAwesomeIcon icon={faTwitch} size='2x' color='#eee' />
            </a>
            <a href='https://discord.gg/wjg4JUC'>
              <FontAwesomeIcon icon={faDiscord} size='2x' color='#eee' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
