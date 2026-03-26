import React from "react";
import styles from "./Footer.module.scss"
import Image from "next/image";
import Link from "next/link";
import { socialMediaLinks } from "@/mock/navLists.mock";
import { collaborators } from "../GreenSection/GreenSection";

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className={styles.footer_body}>
            <div className={styles.footer_container}>
                <div className={styles.footer_content}>
                    <h1>National GovTech Policy Roundtable 2026 - 
                        <span> 30th March 2026, Abuja</span>
                    </h1>
                </div>
                <div className={styles.footer_details}>
                    <div className={styles.collaborators_content}>
                        <h3>Organising partners</h3>
                        <div className={styles.collaborators}>
                            {collaborators.map((collaborator, index) =>
                                <Link key={index} href={collaborator.href}>
                                    <div data-index={index} className={styles.icon}>
                                        <Image alt="" fill src={collaborator.image} />
                                    </div>
                                </Link>
                            )}
                        </div>
                    </div>
                    <div className={styles.legal}>
                        <Link href="/privacy-policy">
                            <h2>Privacy policy</h2>
                        </Link>
                        <Link href="/terms-of-use">
                            <h3>Legal</h3>
                        </Link>
                    </div>
                    <div className={styles.socials_container}>
                        <div className={styles.socials}>
                            {socialMediaLinks.map((social, index: number) => (
                                <Link
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={styles.social}
                                    key={index}
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
                        <p>© {year} Govtech Africa Inc.</p>
                    </div>
                </div>
            </div>
            <div className={styles.footer_bg}>
                <Image alt="footer_image" fill src="/svgs/npgr_footer.svg" />
            </div>
        </div>
    )
}

export default Footer