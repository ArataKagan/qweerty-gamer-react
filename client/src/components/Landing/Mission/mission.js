import React from 'react';
import styles from './mission.module.css';

function mission(){
    return(
        <div className="d-flex flex-column bd-highlight">
            <div className={styles["mission-outer"]}>
                <div className={styles["mission-inner"]}>
                    <p className="p-2 bd-highlight"><div className={styles["statement-1"]}>MISSION</div></p>
                    <p className="p-2 bd-highlight statement-2"><div className={styles["statement-2"]}>Qweerty Gamers is a nonprofit 501(c)(3) organization that champions the inclusion and visibility of LGBTQ Gamers into the broader gaming world.</div></p>
                    <p className="p-2 bd-highlight"><div className={styles["statement-1"]}>WHAT WE DO</div></p>
                    <p className="p-2 bd-highlight statement-2"><div className={styles["statement-2"]}>Qweerty Gamers provides a safe platform for both developers and LGBTQ Gamers to connect and learn from each other. We offer developers access to the unique perspectives of dedicated LBGTQ Gamers, consultations on queer representation, focus groups on game development, as well as programs and workshops to develop skills and prepare LGBTQ Gamers for careers within the industry.</div></p>
                    <p className="p-2 bd-highlight statement-2"><div className={styles["statement-2"]}>Whether you’re just a fan of gamers or work in the industry, at its core, Qweerty puts <b>Gaming First</b>.</div></p>

                </div>
            </div>
        </div>
    )
}

export default mission;
