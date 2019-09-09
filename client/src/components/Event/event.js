import React from 'react';
import styles from './event.module.css';

function Event(){
    return(
        <div>
            
            <div className={styles["event-image"]}>
                <p className={styles["event-image-inner"]}>Be Part of Our Community</p>
            </div>
            
            <div className={styles["event-main"]}>
                <p>Upcoming Events</p>
                <div>
                    <img className={styles["pokego-event-0915"]} src="https://i.imgur.com/6EL0c42.jpg" alt='logo'/>
                </div>
            </div>

        </div>
    )
}

export default Event;