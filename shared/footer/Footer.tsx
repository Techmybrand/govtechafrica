"use client";
import React, { useState } from "react";
import { footerNavLink, socialMediaLinks } from "@/mock/navLists.mock";
import { CookieSettingsModal, CookiesModal } from "@/shared/Modals";
import { Logo } from "@/shared";
import { NavLink } from "@/interfaces";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.scss";

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
	const [openModal, setOpenModal] = useState<boolean>(false);
	const [open, setOpen] = useState<boolean>(false);
	return (
		<React.Fragment>
			<footer className={styles.footer}>
				<div className={styles.footer_body}>
					<div className={styles.footer_content}>
						<div className={styles.details}>
							<div className={styles.logo_and_socials}>
								<Link href='/'>
									<Logo className={styles.footer_logo} />
								</Link>
								<div className={styles.socials}>
									{socialMediaLinks.map((social, index: number) => (
										<Link
											href={social.href}
											target="_blank"
											rel="noreferrer"
											className={styles.social}
											key={index}
											// data-index={index}
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
							{/* <div className={styles.copyWrite}> */}
							<div onClick={() => setOpen(true)} className={styles.copyWrite}>
								<p>&copy; {year} Govtech Africa Inc.</p>
							</div>
						</div>
						<div className={styles.footer_navSection}>
							{footerNavLink.map((link: NavLink, index: number) => (
								<div className={styles.footer_nav} key={index}>
									<nav className={styles.footer_navBody}>
										<ul>
											{link.subMenu?.map((menu, index: number) => (
												<li data-href={menu.isHref} key={index}>
													{index === 0 ? (
														<div onClick={() => setOpenModal(true)} className={styles.list_p}>
															<p>{menu.label}</p>
														</div>
													) : (
														<Link href={menu.href}>{menu.label}</Link>
													)}
												</li>
											))}
										</ul>
									</nav>
								</div>
							))}
						</div>
					</div>
					<div className={styles.image}>
						<Image src="/images/govtechafri.png" sizes="100%" priority alt="govtech" fill />
					</div>
				</div>
				<div className={styles.grad}></div>
			</footer>
			<CookieSettingsModal isOpen={openModal} onClose={() => setOpenModal(false)} />
			<CookiesModal isOpen={open} onClose={() => setOpen(false)} />
		</React.Fragment>
	);
};

export default Footer;
