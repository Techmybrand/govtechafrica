'use client';
import React, { useEffect, useRef } from "react";
import { GrowthCardProps } from "@/interfaces";
import { animateCounter } from "@/utils";
import styles from "./Growth.module.scss";

const growthList: GrowthCardProps[] = [
	{
		value: 65,
		label: '%',
		description: "African governments Offering e-Government services to citizens."
	},
	{
		value: 76,
		label: '%',
		description: "Already adopting cloud-based platforms for public service delivery as of 2024."
	},
	{
		value: 70,
		label: '%',
		description: "African governments providing mobile-based public services."
	},
	{
		value: 4.6,
		label: 'bn',
		currency: '$',
		description: "The size of the African public sector IT market in 2023, projected to reach USD 7.8 billion by 2026."
	},
	{
		value: 6,
		label: 'bn',
		currency: '$',
		description: "Cybersecurity investments by African governments from 2023 to 2026."
	},
	{
		value: 400,
		label: 'm',
		currency: '$',
		description: "In AI investments for African public services in 2024."
	}
];

const Growth = () => {
	const sectionRef = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef<boolean>(false);
    useEffect(() => {
        const currentSection = sectionRef.current
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    const counters = sectionRef.current?.querySelectorAll('[data-count]');
                    counters?.forEach((counter) => {
                        const target = parseInt(counter.getAttribute('data-count') || '0');
                            animateCounter(counter as HTMLElement, 0, target, 2000);
                        }
                    );
                    hasAnimated.current = true;
                }
                });
            },
            { threshold: 0.3 }
        );

        if (currentSection) {
            observer.observe(currentSection);
        }

        return () => {
            if (currentSection) {
                observer.unobserve(currentSection);
            }
        };
    }, []);

	return (
		<div ref={sectionRef} className={styles.section}>
			<div className={styles.section_container}>
				<div className={styles.text}>
					<h3>
						There is growing demand for technology in Africa’s public sector - {" "}
					</h3>
				</div>
				<div className={styles.grid}>
					{growthList.map((growth: GrowthCardProps, index: number) => (
						<div className={styles.card} key={index}>
							<div className={styles.card_header}>
								<h6>{growth.currency}</h6>
								<h4 data-count={growth.value}>0</h4>
								<h6>{growth.label}</h6>
							</div>
							<span></span>
							<p>{growth.description}</p>
						</div>
					))}
				</div>
				<div className={styles.text}>
					<h3>
						Govtech Africa <span>exists to lend a helping hand</span>
					</h3>
				</div>
			</div>
			<div className={styles.divider}></div>
		</div>
	);
};

export default Growth;
