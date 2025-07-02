import React from 'react';
import styles from './Statistics.module.scss'
import { StatisticsArrayProps, StatisticsProps } from '@/interfaces';

const Statistics = ({ list }: StatisticsArrayProps) => {
  return (
    <div className={styles.statistics_section}>
        {
            list.map((statistic: StatisticsProps, index: number) =>
                <div key={index} className={styles.statistics_card}>
                    <h1>{statistic.title}</h1>
                    <span></span>
                    <p>{statistic.description}</p>
                </div>
            )
        }
    </div>
  )
}

export default Statistics