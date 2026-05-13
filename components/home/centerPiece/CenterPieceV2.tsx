"use client";
import React, { useRef } from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import styles from "./CenterPieceV2.module.scss";

const CenterPieceV2 = () => {
    // const centerpieceRef = useRef<HTMLDivElement>(null);
    // const { scrollYProgress } = useScroll({
    //     target: centerpieceRef,
    //     offset: ["start end", "end center"]
    // });

    // const rawY = useTransform(scrollYProgress, [0, 0.2], [300, 0]);
    // const y = useSpring(rawY, {
    //     stiffness: 100,
    //     damping: 20,
    //     mass: 0.5
    // });
    // const rawOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
    // const opacity = useSpring(rawOpacity, {
    //     stiffness: 100,
    //     damping: 20,
    //     mass: 0.5
    // });

    // const rotateZ = useTransform(scrollYProgress, [0, 1], [0, 360]);
    // const opacityGlobe = useSpring(rawOpacity, {
    //     stiffness: 100,
    //     damping: 20,
    //     mass: 0.5
    // });

    return (
        <div className={styles.section}>
            <div className={styles.section_container}>
                <div className={styles.header}>
                    <h2>All over the world, <span>technology </span>
                        remains at the centerpiece of rapidly
                        <span> paced development.</span>
                    </h2>
                </div>

                <div className={styles.globe_container}>
                    <div className={styles.text_left}>
                        <p><span>Through</span> collaboration, capacity building, and scalable
                            solutions, <span>we are committed to</span> reimagining what
                            governance can achieve in today&apos;s digital era.
                        </p>
                    </div>

                    <div className={styles.globe_image}>
                        <div data-index={1} className={styles.ellipse_item}>
                            <div className={styles.icon}>
                                <Image alt="" fill src="/images/ellipse_item_1.png" />
                            </div>
                        </div>
                        <div data-index={2} className={styles.ellipse_item}>
                            <div className={styles.icon}>
                                <Image alt="" fill src="/images/ellipse_item_2.png" />
                            </div>
                        </div>
                        <div data-index={3} className={styles.ellipse_item}>
                            <div className={styles.icon}>
                                <Image alt="" fill src="/images/ellipse_item_3.png" />
                            </div>
                        </div>
                        <div data-index={4} className={styles.ellipse_item}>
                            <div className={styles.icon}>
                                <Image alt="" fill src="/images/ellipse_item_4.png" />
                            </div>
                        </div>
                        <div data-index={5} className={styles.ellipse_item}>
                            <div className={styles.icon}>
                                <Image alt="" fill src="/images/ellipse_item_5.png" />
                            </div>
                        </div>
                        <div className={styles.image_container}>
                            <div className={styles.image_wrapper}>
                                <Image src="/svgs/earth.svg"
                                    alt="Globe Map with connected people" fill sizes="100%"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CenterPieceV2;


// @keyframes spinGlobe {
// 	from {
// 		transform: rotateY(0deg);
// 	}

// 	to {
// 		transform: rotateY(360deg);
// 	}
// }

// @keyframes spinDotted {
// 	from {
// 		transform: rotate(0deg);
// 	}

// 	to {
// 		transform: rotate(360deg);
// 	}
// }
// @keyframes spinDottedReverse {
// 	from {
// 		transform: rotate(360deg);
// 	}

// 	to {
// 		transform: rotate(0deg);
// 	}
// }