import React from 'react';
import MemberProfile from './MemberProfile/member-profile.js';
import style from './member.module.css';

function Member(){
    return(
        <div className={style['member']}>
            <h1>Qweerty Members</h1>
            <MemberProfile />
        </div>
    )
}

export default Member;