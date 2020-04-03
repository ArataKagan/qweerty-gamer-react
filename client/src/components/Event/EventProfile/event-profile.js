import React, { Component } from 'react';
import eventData from './event-information';
import styles from './event-profile.module.css';

class EventProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      eventData: eventData,
      eventImage: null,
      eventTitle: null,
      eventDate: null,
      eventTime: null,
      eventVenue: null,
      eventAddress: null
    };
  }

  componentDidMount() {
    const script = document.createElement('script');
    script.src = 'https://widget.gleamjs.io/e.js';
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    return (
      <div className={styles['event-data-outer']}>
        <p className={styles['main-text-inner']}>UPCOMING EVENTS</p>

        <div className={styles['event-data-inner']}>
          {this.state.eventData.map((item, index) => {
            return (
              <div className={styles['data']}>
                <div className='row'>
                  <div className='col'>
                    <img
                      key={index - 1}
                      src={item.image}
                      style={{
                        maxWidth: '80vw',
                        height: '30vh',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                  <div className='col'>
                    <div className={styles['item-description']}>
                      <p key={index} className={styles['item-title']}>
                        {item.title}
                      </p>
                      <p key={index + 1} className={styles['item-date']}>
                        {item.date}
                      </p>
                      <p key={index + 2} className={styles['item-time']}>
                        {item.time}
                      </p>
                      <p key={index + 3} className={styles['item-venue']}>
                        {item.venue}
                      </p>
                      <p key={index + 4} className={styles['address']}>
                        {item.address1}
                      </p>
                      <p key={index + 5} className={styles['address']}>
                        {item.address2}
                      </p>
                      <a href={item.url}>
                        <p key={index + 6} className={styles['address']}>
                          {item.url}
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className={styles['animal-crossing']}>
                  <a
                    className='e-widget no-button'
                    href='https://gleam.io/rgKvy/qweerty-gamers-animal-crossing-artprint-giveaway'
                    rel='nofollow'
                  >
                    Qweerty Gamers Animal Crossing Artprint Giveaway
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default EventProfile;
