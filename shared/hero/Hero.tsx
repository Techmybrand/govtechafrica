import React from "react";
import styles from "./Hero.module.scss";
import Button from "../button/Button";
import Image from "next/image";

interface Props {
	title: string;
	description: string;
	button?: string;
	href?: string;
	backgroundImage: string;
	className?: string;
	subTitle?: string;
	subDescription?: string;
	subLargeTitle?: string;
	dataType?: "home" | "do" | "are";
}

const Hero = (props: Props) => {
	return (
		<div className={styles.hero} data-type={props.dataType}>
			<div className={styles.grad}></div>
			<div className={styles.hero_container}>
				<div className={`${styles.hero_background} ${props.className}`}>
					<div className={styles.hero_image__container}>
						<div className={styles.hero_image}>
							<Image src={props.backgroundImage} fill alt={props.title} />
						</div>
					</div>
					<div className={styles.hero_content}>
						<div className={styles.text}>
							<h3>{props.title}</h3>
							<p>{props.description}</p>
						</div>
						{props.button && props.href && <Button>{props.button}</Button>}
					</div>
				</div>
			</div>
			{props.subDescription && props.subTitle && (
				<div className={styles.title}>
					{props.subLargeTitle && <h2>{props.subLargeTitle}</h2>}
					<h3>
						{props.subTitle} <span>{props.subDescription}</span>
					</h3>
				</div>
			)}
			<div className={styles.divider}></div>
		</div>
	);
};

export default Hero;
