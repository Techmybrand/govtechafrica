import React from "react";
import styles from "./HomeHero.module.scss";
import Image from "next/image";
import { Button } from "@/shared";

const HomeHero = () => {

    return (
        <div className={styles.home_hero_body}>
            <div className={styles.home_hero_container}>
                <div className={styles.home_hero_content}>
                    <div className={styles.logo_big}>
                        <Image alt="logo" fill src="/svgs/NGPR.svg" />
                    </div>
                    <h3>
                        Digital First Governance: Rethinking How Nigerian Governments Serve, Engage 
                        and Deliver.
                    </h3>
                    <Button className={styles.btn} href="/policy-roundtable">
                        Register Now to Attend
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HomeHero