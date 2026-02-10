"use client";
import React, { useState } from "react";
import { useGlobalContext } from "@/context/AppContext";
import Image from "next/image";
import styles from "./ThemeToggle.module.scss";

const ThemeToggle = () => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const { theme, setTheme }: any = useGlobalContext();
	const [imageUrl, setImageUrl] = useState<string>("/svgs/light-mode.svg");

	const handleToggle = () => {
		setTheme(theme === "light" ? "dark" : "light");
		setImageUrl(theme === "light" ? "/svgs/dark-mode.svg" : "/svgs/light-mode.svg");
	};
	return (
		<div onClick={handleToggle} className={styles.container} data-theme={theme}>
			<div className={styles.image}>
				<Image alt="toggle" fill src={imageUrl} />
			</div>
		</div>
	);
};

export default ThemeToggle;