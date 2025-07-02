'use client';
import React, { useState } from 'react';
import styles from './Careers.module.scss'
import { Button, Searchbar } from '@/shared';
import Image from 'next/image';
import { CareersProps } from '@/interfaces';

const Careers = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    console.log(searchQuery);
    const list: CareersProps[] = [
        {
            title: 'Product Design Intern',
            href: '',
            location: 'Remote',
            time: 'Full-time',
            description: 'We’re looking for a mid-level product designer to join our team.',
        },
        {
            title: 'Graphics Design Intern',
            href: '',
            location: 'Remote',
            time: 'Full-time',
            description: 'We’re looking for a mid-level graphics designer to join our team.',
        },
        {
            title: 'DevOps Intern',
            href: '',
            location: 'Remote',
            time: 'Full-time',
            description: 'We’re looking for a mid-level devops to join our team.',
        },
        {
            title: 'Data Analysis Intern',
            href: '',
            location: 'Remote',
            time: 'Full-time',
            description: 'We’re looking for a mid-level data analyst to join our team.',
        },
        {
            title: 'Project Management Intern',
            href: '',
            location: 'Remote',
            time: 'Full-time',
            description: 'We’re looking for a mid-level product manager to join our team.',
        },
    ]
  return (
    <div className={styles.careers_section}>
        <div className={styles.section_container}>
            <div className={styles.grad}>
                <h3>Careers</h3>
                <p className={styles.p}>
                    Got what  it takes to join our team?
                </p>
                <p>
                    We are dedicated to building a diverse and talented workforce that 
                    drives innovation and success. Are you ready to embark on an exciting 
                    career journey with us? Please explore our open positions and submit 
                    an application today.
                </p>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.careers_container}>
                <div className={styles.filter_and_date_container}>
                    <div className={styles.search}>
                        <Searchbar placeholder='Search'
                            onSearch={(query: string) => setSearchQuery(query)}
                        />
                    </div>
                    <div className={styles.filter_and_date}>
                        <div className={styles.date}>
                            <div className={styles.date_icon}>
                                <Image alt='date' fill src='/svgs/calendar.svg' />
                            </div>
                            <h3>Jan 6, 2025 - Jan 18, 2025</h3>
                        </div>
                        <div className={styles.filter}>
                            <div className={styles.date_icon}>
                                <Image alt='date' fill src='/svgs/filter.svg' />
                            </div>
                            <h3>Filter</h3>
                        </div>
                    </div>
                </div>
                <div className={styles.career_list_wrapper}>
                    {list.map((career: CareersProps, index: number) =>
                        <div key={index} className={styles.card}>
                            <div className={styles.card_content}>
                                <h3>{career.title}</h3>
                                <p>{career.description}</p>
                                <div className={styles.time_and_location}>
                                    <div className={styles.location}>
                                        <div className={styles.location_icon}>
                                            <Image alt='' fill src='/svgs/location.svg' />
                                        </div>
                                        <h6>{career.location}</h6>
                                    </div>
                                    <div className={styles.time}>
                                        <div className={styles.location_icon}>
                                            <Image alt='' fill src='/svgs/clock.svg' />
                                        </div>
                                        <h6>{career.time}</h6>
                                    </div>
                                </div>
                            </div>
                            <Button className={styles.apply_btn}>
                                Apply
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Careers