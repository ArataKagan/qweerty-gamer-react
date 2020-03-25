import React from 'react';
import styles from './landing-statement.module.css';

function LandingStatement(){
    return(
        <div className={styles["main"]}>
            <div className="d-flex justify-content-center">
                <p className={styles["landing-statement"]}>MAKING LGBTQ GAMING, GAMING</p>
            </div>
        </div>
    )
}

export default LandingStatement;