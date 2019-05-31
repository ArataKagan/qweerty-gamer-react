import React from 'react';
import styles from './about.module.css';

class About extends React.Component {
    render(){
        return (
            <div className={styles['about-main']}>
                <h1 className={styles['h1']}>About Qweerty Gamers</h1>
                <p className={styles['about-paragraph']}>Qweerty Gamers is a nonprofit organization with the goal of integrating LGBTQ Gamers into the gamer community, to provide the opportunity for local developers to reach out to LGBTQ Gamers, and to provide programs & workshops for upcoming and emerging careers and hobbies within the industry.</p>
                <h3 className={styles['h3']}>Member</h3>
            </div>
        )
    }
}

export default About;