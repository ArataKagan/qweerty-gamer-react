import React from 'react';
import styles from './about.module.scss';
// import CardList from './Card/cardList';
import Member from './Member/member';

const About = () => {
  return (
    <div className={styles['about-main']}>
      <div className={styles['about-image']}></div>
      <p className={styles['about-paragraph']}>
        Qweerty Gamers is a growing nonprofit 501(c)(3) based in Los Angeles,
        CA. In 2015, Qweerty existed as a small Facebook Group for a shared
        Minecraft server. In late 2017, Qweerty focused on a new mission, to
        "Game for good". Quickly after, Qweerty began launching fundraisers for
        organizations like the National Center for Lesbian Rights, and the
        Translatina Coalition. Qweerty's goals were reciprocated in the
        community quickly. Later in 2018, Qweerty was approached by sympathetic
        lawyers and helped Qweerty file for nonprofit status. Qweerty works with
        organizations such as RIOT, Niantic, Blizzard, and other major and
        independent video game studios to provide free events, workshops, and
        more.
      </p>
      <Member />
    </div>
  );
};

export default About;
