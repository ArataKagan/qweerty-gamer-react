import React from 'react';
import styles from './event.module.css';
import EventProfile from './EventProfile/event-profile.js';

function Event(){
    return(
        <div className={styles["outer"]}>
            <div className={styles["event-image"]}></div>
            <div className={styles["event-message"]}>
                <p className={styles["main-text"]}>JOIN OUR COMMUNITY</p>
            </div>
            <EventProfile />
        </div>
    )
}

export default Event;