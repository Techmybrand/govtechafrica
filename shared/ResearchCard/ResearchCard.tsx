"use client";
import React, { useEffect, useRef, useState } from "react";
// import { formatURL } from "@/utils/formatUrl";
import { Button } from "@/shared";
import Link from "next/link";
import Image from "next/image";
import styles from "./ResearchCard.module.scss";
interface ResearchCardProps {
    btnText?: string;
    image: string;
    title: string;
    slug: string;
    description?: string;
    alt?: string;
    index?: number;
    researchType?: string;
}

const ResearchCard = ({ image, slug, alt, btnText, title, description, researchType }: ResearchCardProps) => {
    const [hover, setHover] = useState<boolean>(false);
    const onHover = () => setHover(true);
    const offHover = () => setHover(false);
    const cardRef = useRef<HTMLElement | null>(null);
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [isTab, setIsTab] = useState<boolean>(false);
    const mobile = isMobile;

    useEffect(() => {
        if (!mobile || !hover) return;
        const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
            if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
                setHover(false);
            }
        };
        document.addEventListener("mousedown", handleOutsideClick);
        document.addEventListener("touchstart", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
            document.removeEventListener("touchstart", handleOutsideClick);
        };
    }, [mobile, hover]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767);
            setIsTab(window.innerWidth > 767 && window.innerWidth < 1024);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <React.Fragment>
            {mobile ? (
                <article data-active={hover} className={styles.card_container}
                    onClick={onHover} ref={cardRef}
                >
                    <div className={styles.card_content}>
                        {hover ? (
                            <div className={styles.background_wrapper}>
                                <div className={styles.blur_bg}></div>
                                <div className={styles.image}>
                                    <Image alt={alt ? alt : 'image'} fill src={image}
                                        sizes="100%" loading="lazy"
                                    />
                                </div>
                            </div>
                        ) : (
                            <div className={styles.image_wrapper}>
                                <div className={styles.blur_bg}></div>
                                <div className={styles.image}>
                                    <Image alt={alt ? alt : 'image'} fill src={image}
                                        sizes="100%" loading="lazy"
                                    />
                                </div>
                            </div>
                        )}
                        <div className={styles.btn_text_container}>
                            <p>{btnText}</p>
                        </div>
                        <div className={styles.card_header}>
                            <div className={styles.btn_text_container_sm}>
                                <p>{btnText}</p>
                            </div>
                            {hover && (
                                <div className={styles.close_icon}
                                    onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                                        e.stopPropagation();
                                        setHover(false);
                                    }}
                                >
                                    <Image alt="" fill src="/svgs/close.svg" />
                                </div>
                            )}
                        </div>
                        <h2>{title}</h2>
                        <h4>{description}</h4>
                    </div>
                    <Link href={`/insights/research/${slug}?type=${researchType}`}
                        onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>
                            e.stopPropagation()}
                    >
                        <Button className={styles.button}>
                            Learn More
                        </Button>
                    </Link>
                </article>
            ) : (
                <article data-active={hover} className={styles.card_container}
                    onMouseOver={onHover}
                    onMouseOut={offHover}
                >
                    <div className={styles.card_content}>
                        {hover ? (
                            <div className={styles.background_wrapper}>
                                <div className={styles.blur_bg}></div>
                                <div className={styles.image}>
                                    <Image alt={alt ? alt : 'image'} fill src={image}
                                        sizes="100%" loading="lazy"
                                    />
                                </div>
                            </div>
                        ) : (
                            <div className={styles.image_wrapper}>
                                <div className={styles.image}>
                                    <Image alt={alt ? alt : 'image'} fill src={image}
                                        sizes="100%" loading="lazy"
                                    />
                                </div>
                            </div>
                        )}
                        <div className={styles.btn_text_container}>
                            <p>{btnText}</p>
                        </div>
                        <div className={styles.card_header}>
                            <div className={styles.btn_text_container_sm}>
                                <p>{btnText}</p>
                            </div>
                            {hover && (
                                <div onClick={() => setHover(false)} className={styles.close_icon}>
                                    <Image alt="" fill src="/svgs/close.svg" />
                                </div>
                            )}
                        </div>
                        <h2>{title}</h2>
                        <h4>{isTab ? `${description?.slice(0, 120)}...` :
                            `${description?.slice(0, 90)}...`}
                        </h4>
                    </div>
                    <Link href={`/insights/research/${slug}?type=${researchType}`}>
                        <Button className={styles.button}>
                            Learn More
                        </Button>
                    </Link>
                </article>
            )}
        </React.Fragment>
    )
}

export default ResearchCard