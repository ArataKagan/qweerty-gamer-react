import React, { useEffect } from 'react';
import styles from './event.module.css';
import EventProfile from './EventProfile/event-profile.js';

function Event() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widget.gleamjs.io/e.js';
    script.async = true;
    document.body.appendChild(script);
  });

  return (
    <div className={styles['outer']}>
      <div className={styles['event-image']}></div>
      <div className={styles['event-message']}>
        <p className={styles['main-text']}>JOIN OUR COMMUNITY</p>
      </div>
      <div className='row'>
        <div className='col'>
          <EventProfile />
        </div>
        <div className='col'>
          <a
            className='e-widget no-button'
            href='https://gleam.io/rgKvy/qweerty-gamers-animal-crossing-artprint-giveaway'
            rel='nofollow'
          >
            Qweerty Gamers Animal Crossing Artprint Giveaway
          </a>
        </div>
      </div>
    </div>
  );
}

export default Event;
