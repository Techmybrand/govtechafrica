'use client';
import React, { useState } from 'react';
import styles from './Accordion.module.scss';
interface AccordionProps {
    title?: string;
    children?: React.ReactNode;
    title_icon?: React.ReactNode;
    isBorder?: boolean;
    type?: 'default' | 'cookies';
}

const Accordion = ({ title, children, title_icon, isBorder, type = 'cookies' }: AccordionProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
	const OpenAccordion = () => setIsOpen(isOpen => !isOpen);
    return (
        <div data-active={isOpen} data-border={isBorder} className={styles.accordion_container}>
            {type === 'cookies' ? (
                <div onClick={OpenAccordion} className={styles.accordion_header_container}>
                <div className={styles.accordion_header}>
                    {isOpen ? (
                        <h3>-</h3>
                    ) : (
                        <h3>+</h3>
                    )}
                    <h1 className={styles.accordion_title}>
                        {title}
                    </h1>
                </div>
                <div className={`${styles.accordion_icon}`}
                    onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => 
                        e.stopPropagation()
                    }
                >
                    {title_icon}
                </div>
                </div>
            ) : (
                <div onClick={OpenAccordion} className={styles.accordion_header_container}>
                    <div className={styles.accordion_header}>
                        <h1 className={styles.accordion_title}>
                            {title}
                        </h1>
                    </div>
                    <div className={`${styles.accordion_icon}`}>
                        {isOpen ? (
                            <h3>-</h3>
                        ) : (
                            <h3>+</h3>
                        )}
                    </div>
                </div>
            )}
            <div className={styles.review_body}>
                {children}
            </div>
        </div>
    );
};

export default Accordion;
