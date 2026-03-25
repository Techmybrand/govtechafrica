import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./NpgrHeader.module.scss";

const NpgrHeader = () => {
    const navItems = [
        {
            name: 'about ngpr 2026',
            href: 'about'
        },
        {
            name: 'programme snapshot',
            href: 'agenda'
        },
        {
            name: 'speakers',
            href: 'speakers'
        },
    ]
    return (
        <header className={styles.header}>
			<div className={styles.container}>
				<Link href="#">
					<div className={styles.header_logoContainer}>
						<Image alt="logo" fill src="/svgs/npgr_logo.svg" />
					</div>
				</Link>
                <nav className={styles.header_nav}>
                    <ul className={styles.header_navList}>
                        {navItems.map((item, index) =>
                            <Link key={index} href={`#${item.href}`}>
                                <h3>{item.name}</h3>
                            </Link>
                        )}
                    </ul>
                </nav>
                <div className={styles.ctas}>
                    <Link href="#register">
                        <div className={styles.register_btn}>
                            <h3>register (Media)</h3>
                        </div>
                    </Link>
                    <Link href="#register">
                        <div className={styles.media_btn}>
                            <h3>register (participant)</h3>
                        </div>
                    </Link>
                </div>
			</div>
		</header>
    )
}

export default NpgrHeader