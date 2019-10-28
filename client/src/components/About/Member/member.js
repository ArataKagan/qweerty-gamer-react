import React from 'react';
import MemberProfile from './MemberProfile/member-profile.js';
import style from './member.module.scss';

function Member(){
    return(
        <div className={style['member']}>
            <h3 style={{paddingTop: '50px'}}>Qweerty Members</h3>
            <MemberProfile />
        </div>
    )
}

export default Member;