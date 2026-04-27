"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { footerNavLink, socialMediaLinks } from "@/mock/navLists.mock";
import { CookieSettingsModal } from "@/shared/Modals";
import { Logo } from "@/shared";
import { NavLink } from "@/interfaces";
import styles from "./FooterV2.module.scss";

const date = new Date();
const year = date.getFullYear();

const FooterV2 = () => {
	const [openModal, setOpenModal] = useState<boolean>(false);

	return (
		<React.Fragment>
			<footer className={styles.footer}>
				<div className={styles.footer_container}>
					<div className={styles.footer_left}>
						<Link href="/">
							<Logo className={styles.logo} />
						</Link>
						<p className={styles.description}>
                            Delivering tier one technology systems development and deployment to governments across the African continent.
                        </p>
						<div className={styles.socials}>
							{socialMediaLinks.map((social, index) => (
								<Link href={social.href} target="_blank" rel="noreferrer" className={styles.social_icon} key={index}>
									<Image src={social.icon} alt={social.label} width={24} height={24} />
								</Link>
							))}
						</div>
					</div>

					<div className={styles.footer_right}>
						{footerNavLink.map((link: NavLink, index: number) => (
							<div className={styles.nav_column} key={index}>
                                {/* Handling potential nested structures depending on mock data */}
                                <h4>{link.label || 'Links'}</h4> 
								<ul>
									{link.subMenu?.map((menu, idx: number) => (
										<li key={idx}>
											{menu.isCookie ? (
												<button onClick={() => setOpenModal(true)} className={styles.cookie_btn}>
													{menu.label}
												</button>
											) : (
												<Link href={menu.href ?? ''}>{menu.label}</Link>
											)}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>

				<div className={styles.footer_bottom}>
					<p>&copy; {year} Govtech Africa Inc. All Rights Reserved.</p>
				</div>
                
                {/* Glow Effect / Gradient Graphic based on mockup */}
                <div className={styles.glow_effect}></div>
			</footer>
			<CookieSettingsModal isOpen={openModal} onClose={() => setOpenModal(false)} />
		</React.Fragment>
	);
};

export default FooterV2;
