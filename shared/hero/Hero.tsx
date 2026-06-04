"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/shared";
import Image from "next/image";
import styles from "./Hero.module.scss";
interface Props {
	title: string;
	description: string;
	button?: string;
	href?: string;
	backgroundImage: string;
	backgroundVideo?: string;
	className?: string;
	subTitle?: string;
	subDescription?: string;
	subLargeTitle?: string;
	dataType?: "home" | "do" | "are" | "new-are";
	backgroundType: "video" | "image";
	type?: "new" | "default";
}

const Hero = (props: Props) => {
	const [speed] = useState<number>(0.9);
	const videoRef = useRef<HTMLVideoElement | null>(null)
	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.playbackRate = speed
		}
	}, [speed]);
	return (
		<div className={styles.hero} data-gettype={props.type}
			data-type={props.dataType}
		>
			<div className={styles.hero_container}>
				<div className={`${styles.hero_background} ${props.className}`}>
					<div className={styles.hero_image__container}>
						{props.backgroundType === 'image' ? (
							<div data-type={props.type} className={styles.hero_image}>
								<Image src={props.backgroundImage} fill alt={props.title}
									sizes="100%" loading="lazy"
								/>
							</div>
						) : (
							<div className={styles.hero_image}>
								<video ref={videoRef} src={props.backgroundVideo} loop autoPlay
									muted playsInline preload="auto"
								/>
							</div>
						)}
					</div>
					<div data-type={props.type} className={styles.hero_content}>
						<div className={styles.text}>
							<h3>{props.title}</h3>
							<p>{props.description}</p>
						</div>
						{(props.button && props.href) && (
							props.type === 'new' ? (
								<Button href={props.href} className={styles.sec_button}>
									{props.button}
								</Button>
							) : (
								<Button href={props.href} className={styles.button_text}>
									{props.button}
								</Button>
							)
						)}
					</div>
				</div>
			</div>
			{props.subDescription && props.subTitle && (
				<div className={styles.title}>
					{props.subLargeTitle && <h2>{props.subLargeTitle}</h2>}
					<h3>{props.subTitle} <span>{props.subDescription}</span></h3>
				</div>
			)}
			{/* <div className={styles.divider}></div> */}
		</div>
	);
};

export default Hero;
