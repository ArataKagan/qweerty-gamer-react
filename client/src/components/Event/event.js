import React from 'react';
import styles from './event.module.css';
import EventProfile from './EventProfile/event-profile.js';

function Event(){
    return(
        <div className={styles["outer"]}>
            <div className={styles["event-image"]}></div>
            <div className="d-flex flex-column bd-highlight mb-3">
                <div className="p-2 bd-highlight">
                    <div className={styles["event-message"]}>
                        <p className={styles["main-text"]}>JOIN OUR COMMUNITY</p>
                    </div>
                </div>
                <div className="p-2 bd-highlight">
                    <div className={styles["event-profile-outer"]}>
                        <EventProfile />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Event;