import React from "react";
import styles from "./GreenSection.module.scss";
import Image from "next/image";
import Link from "next/link";

export const collaborators = [
    {
        image: '/svgs/govtech_logo.svg',
        text: 'Africa inc.',
        title: 'Govtech',
        href: '/',
    },
    {
        image: '/svgs/deputy_speaker.svg',
        text: 'Office of the Deputy Speaker, House of Representatives',
        href: 'https://benjaminkalu.com',
    },
    {
        image: '/svgs/national_assembly.svg',
        text: 'National Assembly Library Trust Fund',
        href: 'https://naltf.gov.ng',
    },
]
const GreenSection = () => {
    return (
        <div className={styles.green_section}>
            <div className={styles.green_container}>
                <Image alt="green_section" sizes="100%" priority fill
                    src="/images/green_section.png"
                />
            </div>
            <div className={styles.collaborators_container}>
                <div className={styles.collaborators_content}>
                    <h3>Organising partners</h3>
                    <div className={styles.collaborators}>
                        {collaborators.map((collaborator, index) =>
                            <div className={styles.collaborator} key={index}>
                                <Link href={collaborator.href}>
                                    <div data-index={index} className={styles.icon}>
                                        <Image alt="" fill src={collaborator.image} />
                                    </div>
                                </Link>
                                {/* <div className={styles.details}>
                                    {collaborator.title && (
                                        <h2>{collaborator.title}</h2>
                                    )}
                                    <p data-index={index}>{collaborator.text}</p>
                                </div> */}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className={styles.divider}></div>
        </div>
    )
}

export default GreenSection