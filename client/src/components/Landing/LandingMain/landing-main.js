import React from 'react';
import styles from './landing-main.module.css';

function LandingMain(){
    
    return(
       <div className={styles['ad-main']}>
            <div className='ad-text-box'>
                <p className={styles['first-text']}>Making LGBTQ</p>
                <p className={styles['second-text']}>gaming, gaming</p>
            </div>
       </div>
    ) 
}

export default LandingMain;