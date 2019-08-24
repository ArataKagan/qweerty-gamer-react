import React from 'react';
import style from './intro.module.css';

function Intro(){
    return(
        <div className={style['intro-main']}>
            <span className={style['intro-p-1']}>Mission</span>
            <span className={style['intro-p-2']}>Test test test</span>
        </div>
    )
}

export default Intro;
