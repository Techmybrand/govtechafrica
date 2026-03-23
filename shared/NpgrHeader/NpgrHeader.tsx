import React from "react";
import styles from "./NpgrHeader.module.scss"
import Link from "next/link";
import Button from "../button/Button";
import Image from "next/image";

const NpgrHeader = () => {
    return (
        <header className={styles.header}>
			<div className={styles.container}>
				<Link href="#">
					<div className={styles.header_logoContainer}>
						<Image alt="logo" fill src="/svgs/NGPR.svg" />
					</div>
				</Link>
                <nav className={styles.header_nav}>
                    <ul className={styles.header_navList}>
                        {['about', 'agenda', 'speakers'].map((item) =>
                            <Link key={item} href={`#${item}`}>
                                <h3>{item}</h3>
                            </Link>
                        )}
                    </ul>
                    <Button className={styles.button_link} href="#register">
						Register
				    </Button>
                </nav>
			</div>
		</header>
    )
}

export default NpgrHeader