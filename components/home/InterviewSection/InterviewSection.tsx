"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import styles from "./InterviewSection.module.scss";
import { useGetContentful } from "@/hooks";
import { BlogDetailsProps } from "@/interfaces";

const InterviewSection = () => {
    const { fetchBlogs, sortedBlogs } = useGetContentful();
	const interviews = sortedBlogs.filter((blog: BlogDetailsProps) => blog.type.toLowerCase() === "interview");
	useEffect(() => {
		fetchBlogs();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
    const interviewRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: interviewRef,
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
        <div ref={interviewRef} className={styles.interview_section}>
            <motion.div style={{ opacity, y }} className={styles.container}>
                <div className={styles.left_content}>
                    <div className={styles.tag}>
                        <span className={styles.dash}>—</span>
                        <span className={styles.tag_text}>NOW LIVE</span>
                    </div>

                    <h1 className={styles.title}>
                        Hear from the people <span className={styles.highlight}>building</span> Africa&apos;s digital Public Sector.
                    </h1>

                    <p className={styles.description}>
                        Policymakers, Govt officials, and Civic advocates talk candidly about the work behind the headlines — 
                        what&apos;s changing, what&apos;s hard, and what&apos;s next for governance and technology across the continent.
                    </p>

                    <div className={styles.action_wrapper}>
                        <Link href="/interviews" className={styles.explore_btn}>
                            <span>Explore the Interviews</span>
                            <span className={styles.arrow}>→</span>
                        </Link>
                    </div>

                    <div className={styles.voice_container}>
                        <div className={styles.wave_icon}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <p className={styles.voice_text}>
                            <span className={styles.count}>
                                {interviews?.length === 1 ? "1 voice" : `${interviews?.length} voices`}
                            </span> and counting
                        </p>
                    </div>
                </div>

                <div className={styles.right_graphic}>
                    <div className={styles.graphic_wrapper}>
                        <Image src="/svgs/interview_graphic.svg"  alt="Interview Graphic" fill priority className={styles.graphic_img} />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default InterviewSection;