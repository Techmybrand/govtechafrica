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
	dataType?: "home" | "do" | "are";
	backgroundType: 'video' | 'image';
}

const Hero = (props: Props) => {
	const [speed] = useState<number>(0.5);
	const videoRef = useRef<HTMLVideoElement | null>(null)
	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.playbackRate = speed
		}
	}, [speed]);
	return (
		<div className={styles.hero} data-type={props.dataType}>
			<div className={styles.grad}></div>
			<div className={styles.hero_container}>
				<div className={`${styles.hero_background} ${props.className}`}>
					<div className={styles.hero_image__container}>
						{props.backgroundType === 'image' ? (
							<div className={styles.hero_image}>
								<Image src={props.backgroundImage} fill alt={props.title} />
							</div>
						) : (
							<div className={styles.hero_image}>
								<video ref={videoRef} src={props.backgroundVideo} loop autoPlay 
									muted playsInline preload="auto"
								/>
							</div>
						)}
					</div>
					<div className={styles.hero_content}>
						<div className={styles.text}>
							<h3>{props.title}</h3>
							<p>{props.description}</p>
						</div>
						{(props.button && props.href) && (
							<Button className={styles.button_text}>{props.button}</Button>
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
			<div className={styles.divider}></div>
		</div>
	);
};

export default Hero;
