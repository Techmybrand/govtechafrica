"use client";
import React, { useEffect, useState } from "react";
import { Hero } from "@/shared";
import { CookiesModal } from "@/shared/Modals";
import { GrowthV2, MissionV2, Research, CenterPieceV2, Experience, NPGR, IntroToFulcrum } from "@/components/home";
import { Governance } from "@/components/whoWeAre";
import { ParticipatingOrganisations } from "@/components/PolicyRoundTable";

const NewHomeView = () => {
	const [showModal, setShowModal] = useState<boolean>(false);
	const [, setConsent] = useState<string | null>(null);
	const [isMobile, setIsMobile] = useState<boolean>(false);
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 650);
		};
		const storedConsent = localStorage.getItem("cookieConsent");
		setConsent(storedConsent);
		if (!storedConsent) {
			setShowModal(true);
		}
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return (
		<React.Fragment>
			<Hero
				backgroundVideo={isMobile ? "/videos/hero_video_portrait.mp4" : "/videos/hero_video_landcape.mp4"}
				backgroundType="video"
				backgroundImage=""
				title=""
				description=""
			/>
			<Governance type="new" />
			<Research />
			<GrowthV2 />
			<MissionV2 />
			<Experience />
			<CenterPieceV2 />
			<NPGR />
			<IntroToFulcrum />
			<ParticipatingOrganisations type="new" />
			<CookiesModal isOpen={showModal} onClose={() => setShowModal(false)} />
		</React.Fragment>
	)
}

export default NewHomeView;