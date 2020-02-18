import React, { Component } from 'react';
import eventData from './event-information';
import styles from './event-profile.module.css';

class EventProfile extends Component {
    constructor(props){
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

    render(){
        return(
            <div className={styles["event-data-outer"]}>
                <p>UPCOMING EVENTS</p>
                {this.state.eventData.map((item, index) => {
                        return(
                            <div>
                                <p key={index}>{item.title}</p>
                                <p key={index + 1}>{item.date}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default EventProfile;