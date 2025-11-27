"use client";
import { footerNavLink, socialMediaLinks } from "@/mock/navLists.mock";
import { Logo } from "@/shared";
import { NavLink } from "@/interfaces";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.scss";

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
					<Image src="/images/govtechafri.png" sizes="100%" priority alt="govtech" fill />
				</div>
			</div>
			<div className={styles.grad}></div>
		</footer>
	);
};

export default Footer;
