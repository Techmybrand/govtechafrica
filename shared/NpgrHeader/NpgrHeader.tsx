"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
// import { GruveEventWidgets } from "@gruve/echo";
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
                            {/* <GruveEventWidgets */}
                                {/* eventAddress='0bfc8ff1245021bb034669ff8002133a536db1b4'
                                config={{
                                    // backgroundColor: '#00BF4D',
                                    // color: 'white',
                                    // padding: '12px 24px',
                                    // borderRadius: '8px',
                                    // themeColor: '#00BF4D',
                                    // displayText: 'REGISTER',
                                }}
                            > */}
                                <div className={styles.register_btn}>
                                    <h3>register</h3>
                                </div>
                            {/* </GruveEventWidgets> */}
                    </Link>
                    <Link href="#media">
                        <div className={styles.media_btn}>
                            <h3>media accreditation</h3>
                        </div>
                    </Link>
                </div>
			</div>
		</header>
    )
}

export default NpgrHeader