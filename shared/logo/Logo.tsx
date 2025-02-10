import styles from "./Logo.module.scss";
import React from "react";

import Image from "next/image";

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
				sizes="100vw"
				quality={100}
			/>
		</div>
	);
};

export default Logo;
