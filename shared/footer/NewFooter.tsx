"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { footerNavLink, socialMediaLinks } from "@/mock/navLists.mock";
import { CookieSettingsModal } from "@/shared/Modals";
import { Logo } from "@/shared";
import { NavLink } from "@/interfaces";
import NewsLetterSection from "../NewsLetterSection/NewsLetterSection";
import styles from "./NewFooter.module.scss";

const date = new Date();
const year = date.getFullYear();

const NewFooter = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);

    return (
        <React.Fragment>
            <footer className={styles.new_footer_container}>
                <div className={styles.newsletter_positioner}>
                    <NewsLetterSection />
                </div>
                <div className={styles.footer_body}>
                    <div className={styles.main_content}>
                        <div className={styles.main_content_left}>
                            <Image alt="" fill src="/svgs/brand_1.svg" />
                        </div>
                        <div className={styles.main_content_body}>
                            <div className={styles.brand_statement}>
                                <h2>
                                    Innovation. Governance.<br />
                                    <span>Impact.</span>
                                </h2>
                            </div>

                            <div className={styles.links_grid}>
                                {footerNavLink.map((link: NavLink, index: number) => (
                                    <div className={styles.link_column} key={index}>
                                        <ul>
                                            {link.subMenu?.map((menu, subIndex: number) => (
                                                <li data-active={menu?.isHref} key={subIndex}>
                                                    {menu.isCookie ? (
                                                        <div onClick={() => setOpenModal(true)} className={styles.cookie_trigger}>
                                                            {menu.label}
                                                        </div>
                                                    ) : (
                                                        <Link href={menu.href ?? ""}>
                                                            {menu.label}
                                                        </Link>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={styles.main_content_right}>
                            <Image alt="" fill src="/svgs/brand_2.svg" />
                        </div>
                    </div>

                    <div className={styles.bottom_bar}>
                        <div className={styles.logo_container}>
                            <Link href='/'>
								<Logo className={styles.footer_logo} />
							</Link>
                        </div>

                        <div className={styles.copyright}>
                            <p>© {year} Govtech Africa Inc.</p>
                        </div>

                        <div className={styles.socials_row}>
                            {socialMediaLinks.map((social, index: number) => (
                                <Link
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    key={index}
                                    className={styles.social_link}
                                >
                                    <Image
                                        src={social.icon}
                                        alt={social.label}
                                        fill
                                        sizes="100%"
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className={styles.watermark_image_wrapper}>
                        <div className={styles.watermark_inner}>
                            <Image
                                src="/images/govtechafri.png"
                                alt="GovtechAfrica Watermark"
                                fill
                                priority
                                sizes="100%"
                            />
                        </div>
                    </div>
                </div>
            </footer>

            <CookieSettingsModal isOpen={openModal} onClose={() => setOpenModal(false)} />
        </React.Fragment>
    );
};

export default NewFooter;