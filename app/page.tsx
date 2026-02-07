"use client";
import React, { useEffect } from "react";
import Lenis from "lenis";
import { HomeView } from "@/views";

export default function Home() {
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
			<HomeView />
		</React.Fragment>
	);
}
