"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./Button.module.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	buttonType?: "primary" | "secondary" | "transparent";
	children: React.ReactNode;
	iconPrefix?: string;
	iconSuffix?: string;
	className?: string;
	href?: string;
	onClick?: (e?: any) => void;
}

const Button = ({
	children,
	className,
	href,
	onClick,
	iconPrefix,
	...otherProps
}: Props) => {
	const router = useRouter();
	const handleClick = () => {
		if (href) {
			router.push(href);
		}
		if (onClick) {
			onClick();
		}
	};
	return (
		<button
			onClick={handleClick}
			className={`${className} ${styles.button}`}
			{...otherProps}
		>
			{!!iconPrefix && (
				<figure className={styles.button_icon}>
					<Image src={iconPrefix} layout="fill" alt="" />
				</figure>
			)}
			<p>{children}</p>
			<figure className={styles.button_icon}>
				<Image src="/svgs/button-icon.svg" fill alt="" />
			</figure>
		</button>
	);
};

export default Button;
