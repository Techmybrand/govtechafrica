"use client";
import React, { useEffect, useState } from "react";
import { Hero } from "@/shared";
import { CookiesModal } from "@/shared/Modals";
import { GrowthV2, MissionV2, Research, NewsLetter, CenterPieceV2 } from "@/components/home";
import { Governance } from "@/components/whoWeAre";

const NewHomeView = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [, setConsent] = useState<string | null>(null);
    useEffect(() => {
        const storedConsent = localStorage.getItem('cookieConsent');
        setConsent(storedConsent);
        if (!storedConsent) {
            setShowModal(true);
        }
    }, []);
    return (
        <React.Fragment>
			<Hero
                backgroundImage="/images/new_hero.png"
				backgroundType="image"
				title="African Technology for Government Excellence"
				description=''
				type="new"
				// backgroundImage=""
				// backgroundVideo="/videos/Hero.mp4"
				// backgroundType="video"
				// // className={styles.hero}
				// title="African technology for Government Excellence"
				// description={`At Govtech Africa, we empower African governments to better serve their 
				// 	constituents by harnessing the power of technology for societal advancement, and 
				// 	driving positive change through transparent, efficient, and inclusive governance 
				// 	practices.
				// `}
				// button="Explore our solutions"
				// href="/what-we-do"
			/>
			<Governance type="new" />
			<Research />
			<GrowthV2 />
			<MissionV2 />
			<CenterPieceV2 />
			<NewsLetter />
			<CookiesModal isOpen={showModal} onClose={() => setShowModal(false)} />
		</React.Fragment>
    )
}

export default NewHomeView