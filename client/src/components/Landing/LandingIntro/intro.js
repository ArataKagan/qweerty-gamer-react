import React from 'react';
import style from './intro.module.css';

function Intro(){
    return(
        <div className={style['intro-main']}>
            <span className={style['intro-p-1']}>Founded in 2016</span>
            <span className={style['intro-p-2']}>1000 members</span>
        </div>
    )
}

export default Intro;
