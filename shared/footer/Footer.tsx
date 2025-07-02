"use client";

import Link from "next/link";
import styles from "./Footer.module.scss";
import Image from "next/image";
import { footerNavLink, socialMediaLinks } from "@/mock/navLists.mock";
import Logo from "../logo/Logo";
import { NavLink } from "@/interfaces";

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer_body}>
				<div className={styles.details}>
					<div className={styles.logo_and_socials}>
						<Logo className={styles.footer_logo} />
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
										sizes="100vw"
									/>
								</Link>
							))}
						</div>
					</div>
					<div className={styles.copyWrite}>
						<p>&copy; {year} Govtech Africa Inc.</p>
					</div>
				</div>
				<div className={styles.footer_navSection}>
					{footerNavLink.map((link: NavLink, index: number) => (
						<div className={styles.footer_nav} key={index}>
							<nav className={styles.footer_navBody}>
								<ul>
									{link.subMenu?.map((menu, index: number) => (
										<li key={index}>
											<Link href={menu.href}>{menu.label}</Link>
										</li>
									))}
								</ul>
							</nav>
						</div>
					))}
				</div>
				<div className={styles.image}>
					<Image src="/images/govtechafri.png" alt="govtech" fill />
				</div>
			</div>
			<div className={styles.grad}></div>
		</footer>
	);
};

export default Footer;
