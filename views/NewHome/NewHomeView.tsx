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
			/>
			<Governance type="new" />
			<Research />
			<GrowthV2 />
			<MissionV2 />
			{/* <Experience /> */}
			<CenterPieceV2 />
			<NewsLetter />
			<CookiesModal isOpen={showModal} onClose={() => setShowModal(false)} />
		</React.Fragment>
    )
}

export default NewHomeView