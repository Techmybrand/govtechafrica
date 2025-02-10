"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import { NavLink, NavLinkMenu, NavLinkSub } from "@/interfaces";
import { navLinks } from "@/mock/navLists.mock";
import Logo from "../logo/Logo";
import Button from "../button/Button";
import { scrollTo } from "@/utils/scrollTo";

enum Scroll {
	Idle = "idle",
	InitialScroll = "initial"
}

const Header = () => {
	const [collapsed, setCollapsed] = useState<boolean>(true);
	const [scroll, setScroll] = useState<Scroll>(Scroll.Idle);
	const [activeLink, setActiveLink] = useState<string | null>(null);
	const headerRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const headerHeight: number = headerRef.current?.offsetHeight as number;
		const scrollCheck = () => {
			const currentScrollY = window.scrollY;

			if (currentScrollY > headerHeight) {
				setScroll(Scroll.InitialScroll);
			}
			if (currentScrollY <= headerHeight) setScroll(Scroll.Idle);
		};
		window.addEventListener("scroll", scrollCheck, { passive: true });

		return () => window.removeEventListener("scroll", scrollCheck);
	}, []);

	const handleActiveLink = (label: string) => {
		setActiveLink(prev => (prev === label ? null : label));
	};

	const handleScroll = (id?: string) => {
		setCollapsed(true);
		if (!id) return;
		scrollTo({ id });
	};

	return (
		<header
			className={styles.header}
			data-collapsed={!collapsed || scroll === Scroll.InitialScroll}
			ref={headerRef}
			data-scroll={scroll}
		>
			<div className={styles.container}>
				<div className={styles.background}></div>
				<Link href="/">
					<div className={styles.header_logoContainer}>
						<Logo />
					</div>
				</Link>
				<div
					className={
						styles[
							!collapsed ? "header_wrapper" : "header_wrapper__collapsed"
						]
					}
				>
					<nav className={styles.header_nav}>
						<ul className={styles.header_navList}>
							{navLinks.map((link: NavLink, index: number) => {
								return (
									<LinkItem
										setCollapsed={setCollapsed}
										collapsed={collapsed}
										link={link}
										key={index}
										isActive={activeLink === link.label}
										handleActiveLink={handleActiveLink}
										handleScroll={handleScroll}
									/>
								);
							})}
							<Button
								className={styles.button_link}
								href="contact"
								onClick={() => setCollapsed(true)}
							>
								CONTACT US
							</Button>
						</ul>
					</nav>
				</div>
				<div
					onClick={() => {
						setCollapsed(!collapsed);
					}}
					className={
						styles[collapsed ? "header_hamburger" : "header_hamburger__open"]
					}
				>
					<span className={styles.header_hamburgerBar}></span>
					<span className={styles.header_hamburgerBar}></span>
					<span className={styles.header_hamburgerBar}></span>
				</div>
			</div>
		</header>
	);
};

export default Header;

interface LinkProps {
	link: NavLink;
	setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
	collapsed: boolean;
	isActive: boolean;
	handleActiveLink: (label: string) => void;
	handleScroll: (id?: string) => void;
}
const LinkItem = ({
	link,
	collapsed,
	handleActiveLink,
	isActive,
	handleScroll
}: LinkProps) => {
	useEffect(() => {
		if (!collapsed) {
			handleActiveLink("");
		}
	}, [collapsed]);
	return (
		<li className={styles.header_navLink} data-active={isActive}>
			<div className={styles.link_row} onClick={() => handleActiveLink(link.label)}>
				<p>{link.label}</p>
				<div className={styles.link_icon}>
					<Image src="/svgs/arrow.svg" fill alt="" sizes="100vw" />
				</div>
			</div>
			{link.subMenu && (
				<div
					className={styles.subMenu_container}
					data-active={link.label === "sell gears" || link.label === "rent out"}
				>
					<div className={styles.subMenu}>
						{link.subMenu.map((subMenu: NavLinkSub, index: number) => (
							<div className={styles.subMenu_navlist} key={index}>
								<Link
									href={subMenu.href}
									className={styles.subMenu_link}
									onClick={() => handleScroll(subMenu.id)}
								>
									<h2>{subMenu.label}</h2>
									<div className={styles.subMenu_icon}>
										<Image
											src={subMenu.icon}
											fill
											alt=""
											sizes="100vw"
										/>
									</div>
								</Link>
								<ul className={styles.sub_list}>
									{subMenu.menu?.map(
										(menu: NavLinkMenu, index: number) => (
											<Link
												href={menu.href}
												key={index}
												className={styles.subMenu_link}
												onClick={() => {
													handleScroll(menu.id);
													handleActiveLink("");
												}}
											>
												<p>{menu.label}</p>
												{menu.icon && (
													<div className={styles.subMenu_icon}>
														<Image
															src={menu.icon}
															fill
															alt=""
															sizes="100vw"
														/>
													</div>
												)}
											</Link>
										)
									)}
								</ul>
							</div>
						))}
					</div>
				</div>
			)}
		</li>
	);
};
