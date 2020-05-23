import React from 'react';
import MemberProfile from './MemberProfile/member-profile.js';
import style from './member.module.scss';

const Member = () => {
  return (
    <div className={style['member-outer']}>
      <p className={style['main-text']}>Qweerty Staff</p>
      <MemberProfile />
    </div>
  );
};

export default Member;
