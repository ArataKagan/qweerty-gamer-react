import React from 'react';
import styles from './mission.module.css';

function mission(){
    return(
        <div className="d-flex flex-column bd-highlight">
            <div className={styles["mission-outer"]}>
                <div className={styles["mission-inner"]}>
                    <p className="p-2 bd-highlight"><div className={styles["statement-1"]}>Mission Statement</div></p>
                    <p className="p-2 bd-highlight statement-2"><div className={styles["statement-2"]}>Qweerty Gamers is a nonprofit organization with the goal of integrating LGBTQ Gamers into the gamer community, to provide the opportunity for local developers to reach out to LGBTQ Gamers, and to provide programs & workshops for upcoming and emerging careers and hobbies within the industry.</div></p>
                </div>
            </div>
        </div>
    )
}

export default mission;
