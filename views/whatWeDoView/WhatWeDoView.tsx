"use client";
import React, { useEffect } from "react";
import Lenis from "lenis";
import { Consulting, Technology } from "@/components/whatWeDo";
import styles from './WhatWeDoView.module.scss';

const WhatWeDoView = () => {
	useEffect(() => {
		const lenis = new Lenis({
			duration: 1.2,
			smoothWheel: true,
		});

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);

		return () => {
			lenis.destroy();
		};
	}, []);
	return (
		<React.Fragment>
			<div className={styles.top_margin}></div>
			<Technology />
			<Consulting />
		</React.Fragment>
	);
};

export default WhatWeDoView;
