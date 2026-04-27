import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./HeroV2.module.scss";

interface Props {
	title: string;
	description: string;
	button?: string;
	href?: string;
	className?: string;
}

const HeroV2 = (props: Props) => {
	return (
		<div className={`${styles.hero} ${props.className || ""}`}>
			<div className={styles.hero_container}>
                <div className={styles.images_section}>
                    <div className={styles.green_line}></div>
                    <div className={styles.image_wrapper_side}>
                        <Image src="/images/mission.png" alt="Hero Image 1" fill sizes="100%" loading="lazy" />
                    </div>
                    <div className={styles.image_wrapper_center}>
                        <Image src="/images/vision.png" alt="Hero Image 2" fill sizes="100%" priority />
                    </div>
                    <div className={styles.image_wrapper_side}>
                        <Image src="/images/newsletter.png" alt="Hero Image 3" fill sizes="100%" loading="lazy" />
                    </div>
                    <div className={styles.green_line}></div>
                </div>

				<div className={styles.hero_content}>
                    <h1 className={styles.title}>{props.title}</h1>
                    <p className={styles.description}>{props.description}</p>
                    
                    {props.button && props.href && (
                        <Link href={props.href} className={styles.cta_button}>
                            <span>{props.button}</span>
                            <div className={styles.icon_wrapper}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12 5L19 12L12 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        </Link>
                    )}
				</div>
			</div>
		</div>
	);
};

export default HeroV2;
