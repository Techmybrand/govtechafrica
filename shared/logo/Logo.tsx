import React from "react";
import Image from "next/image";
import styles from "./Logo.module.scss";
interface Props {
	className?: string;
}

const Logo = ({ className }: Props) => {
	return (
		<div className={`${styles.logo} ${className}`}>
			<Image
				src="/images/logo.png"
				loading="eager"
				priority={true}
				alt="Gear Up"
				fill
				sizes="100%"
				quality={100}
			/>
		</div>
	);
};

export default Logo;
