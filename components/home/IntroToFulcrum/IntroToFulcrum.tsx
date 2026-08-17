"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/shared";
import styles from "./IntroToFulcrum.module.scss";
import Link from "next/link";
import { useScroll, useSpring, useTransform, motion } from "framer-motion";
import { useRef } from "react";

interface IntroToFulcrumProps {
	type: "home" | "what_we_do"
}

const IntroToFulcrum = ({ type = "home" }: IntroToFulcrumProps) => {
	const fulcrumRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: fulcrumRef,
        offset: ["start end", "end center"]
    });

    const rawY = useTransform(scrollYProgress, [0, 0.2], [300, 0]);
    const y = useSpring(rawY, {
        stiffness: 100,
        damping: 20,
        mass: 0.5
    });
    const rawOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
    const opacity = useSpring(rawOpacity, {
        stiffness: 100,
        damping: 20,
        mass: 0.5
    });
	return (
		<motion.div style={{ y, opacity }} ref={fulcrumRef} className={styles.fulcrum_section}>
			<div className={styles.bg_pattern_wrapper}>
				<Image src="/svgs/fulcrum_pattern.svg" alt="" fill priority sizes="100vw" />
			</div>
			<div className={styles.container}>
				<div className={styles.layout_grid}>
					<div className={styles.left_column}>
						<div className={styles.section_title_wrapper}>
							<div className={styles.vertical_accent_line}></div>
							<div className={styles.fulcrum_section_icon}>
								<Image alt="fulcrum_section_logo" fill src="/svgs/fulcrum_section_icon.svg" />
							</div>
						</div>
						<div className={styles.illustration_wrapper}>
							<div className={styles.offset_box}></div>
							<div className={styles.image_container}>
								<Image src="/images/fulcrum_hero.jpg" alt="Fulcrum Illustration" fill priority
									sizes="(max-width: 1024px) 100vw, 50vw"
								/>
							</div>
						</div>
					</div>

					<div className={styles.right_column}>
						<h2 className={styles.intro_heading}>
							{type === "what_we_do" ? "Our Flagship" : "Introducing"} <br />
							<span>{type === "what_we_do" ? "Product" : "Fulcrum..."}</span>
						</h2>
						{type === "what_we_do" && (
							<div className={styles.curved_arrow}>
								<div className={styles.curved_arrow_icon}>
									<Image src="/svgs/curved_arrow.svg" alt="Curved Arrow" fill />
								</div>
							</div>
						)}

						{type === "what_we_do" && <h4>Fulcrum</h4>}

						<p className={styles.intro_description}>
							A Project Management Tool that gives leadership real-time visibility
							into project delivery, budget performance, milestones, and SDG
							alignment across ministries, departments and agencies.
						</p>
						<Link href="https://fulcrum.govtechafrica.com" target="_blank">
							<Button className={styles.visit_btn}>
								Visit Page
							</Button>
						</Link>
					</div>

					<div className={styles.left_column_mobile}>
						<div className={styles.illustration_wrapper}>
							<div className={styles.offset_box}></div>
							<div className={styles.image_container}>
								<Image src="/images/fulcrum_hero.jpg" alt="Fulcrum Illustration" fill priority
									sizes="(max-width: 1024px) 100vw, 50vw"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.bg_wrapper}>
			</div>
		</motion.div>
	);
};

export default IntroToFulcrum;