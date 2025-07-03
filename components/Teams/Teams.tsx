import React from 'react';
import { Insights } from '../home';
import styles from './Teams.module.scss';
import Image from 'next/image';

const Teams = () => {
  return (
    <div className={styles.capacity_building_section}>
      <div className={styles.divider}></div>
      <div className={styles.capacity_building_content}>
        <h3>Our Executives</h3>
        <p>The minds and brains behind Govtech Africa</p>
        <div className={styles.teams_container}>
          {[1, 2, 3, 4, 5, 6].map((item: number) =>
            <div key={item} className={styles.team_card}>
              <div className={styles.image}>
                <Image alt='image' fill src='/images/team.png' />
              </div>
              <div className={styles.info}>
                <div className={styles.info_header}>
                  <h2>Toma Fortune</h2>
                  <p>Chairman</p>
                  <div className={styles.social}>
                    <Image alt='' fill src='/svgs/linkedIn.svg' />
                  </div>
                </div>
                <div className={styles.see_more}>
                  <h3>See Bio</h3>
                </div>
              </div>
            </div>
          )}
        </div>
        <Insights isDivider={false}  />
      </div>
      <div className={styles.divider_green}></div>
    </div>
  )
}

export default Teams