import { NavLink } from "@/interfaces";

export const navLinks: NavLink[] = [
	{
		label: "what we do",
		href: "what-we-do",
		external: false,
		icon: "/svgs/link-main.svg",
		subMenu: [
			{
				label: "technology",
				icon: "/svgs/link-main.svg",
				href: "/what-we-do",
				id: "technology",
				menu: [
					{
						label: "Customised Software Solutions",
						href: "/what-we-do",
						id: "customised",
						icon: "/svgs/link-user.svg",
						external: false
					},
					{
						label: "Cybersecurity",
						href: "/what-we-do",
						id: "cybersecurity",
						icon: "/svgs/link-user.svg",
						external: false
					},
					{
						label: "Cloud Services",
						href: "/what-we-do",
						id: "cloud",
						icon: "/svgs/link-user.svg",
						external: false
					},
					{
						label: "Data and AI",
						href: "/what-we-do",
						id: "data",
						icon: "/svgs/link-ai.svg",
						external: false
					},
					{
						label: "Network Infrastructure Design & Implementation",
						href: "/what-we-do",
						id: "network",
						icon: "/svgs/link-user.svg",
						external: false
					},
					{
						label: "Web3 & Blockchain Technology",
						href: "/what-we-do",
						id: "web3",
						icon: "/svgs/link-user.svg",
						external: false
					},
					{
						label: "IT Support Services (Remote support & Maintenance)",
						href: "/what-we-do",
						id: "it",
						icon: "/svgs/link-user.svg",
						external: false
					}
				]
			},
			{
				label: "consulting",
				icon: "/svgs/link-main.svg",
				href: "/what-we-do",
				id: "consulting",
				menu: [
					{
						label: "IT strategy consulting & advisory",
						href: "/what-we-do",
						id: "strategy",
						icon: "/svgs/link-user.svg",
						external: false
					},
					{
						label: "IT infrastructure procument & supply",
						href: "/what-we-do",
						id: "infrastructure",
						icon: "/svgs/link-user.svg",
						external: false
					},
					{
						label: "IT compliance & regulatory consulting",
						href: "/what-we-do",
						id: "compliance",
						icon: "/svgs/link-user.svg",
						external: false
					},
					{
						label: "capacity building & Trainings",
						href: "/what-we-do",
						id: "capacity",
						icon: "/svgs/link-ai.svg",
						external: false
					},
					{
						label: "tech events design & delivery",
						href: "/what-we-do",
						id: "tech",
						icon: "/svgs/link-user.svg",
						external: false
					}
				]
			}
		]
	},
	{
		label: "who we are",
		href: "who-we-are",
		external: false,
		icon: "/svgs/link-main.svg",
		subMenu: [
			{
				label: "mission, Vision, values",
				icon: "/svgs/link-main.svg",
				href: "/who-we-are",
				id: "mision"
			},
			{
				label: "team",
				icon: "/svgs/link-user.svg",
				href: "/who-we-are",
				id: "team"
			},
			{
				label: "partners",
				icon: "/svgs/link-user.svg",
				href: "/who-we-are",
				id: "partners"
			},
			{
				label: "projects",
				icon: "/svgs/link-user.svg",
				href: "/who-we-are",
				id: "projects"
			}
		]
	},
	{
		label: "resources",
		external: false,
		icon: "/svgs/link-main.svg",
		subMenu: [
			{
				label: "insights",
				icon: "/svgs/link-main.svg",
				href: "/insights"
			},
			{
				label: "careers",
				icon: "/svgs/link-user.svg",
				href: "/careers"
			},
			{
				label: "GOVTECH AFRICA FOUNDATION (COMING SOON)",
				icon: "/svgs/link-ai.svg",
				href: "#"
			}
		]
	}
];

export const footerNavLink: NavLink[] = [
	{
		label: "footer 1",
		href: "#",
		external: false,
		icon: "/svgs/link-main.svg",
		subMenu: [
			{
				label: "Manage Cookie Preferences",
				icon: "/svgs/link-main.svg",
				href: "#"
			},
			{
				label: "Privacy Policy",
				icon: "/svgs/link-user.svg",
				href: "#"
			},
			{
				label: "Terms of Use",
				icon: "/svgs/link-ai.svg",
				href: "#"
			},
			{
				label: "Site Map",
				icon: "/svgs/link-ai.svg",
				href: "#"
			}
		]
	},
	{
		label: "footer 2",
		href: "#",
		external: false,
		icon: "/svgs/link-main.svg",
		subMenu: [
			{
				label: "Contact Us",
				icon: "/svgs/link-main.svg",
				href: "#"
			},
			{
				label: "Careers",
				icon: "/svgs/link-user.svg",
				href: "#"
			},
			{
				label: "About us",
				icon: "/svgs/link-ai.svg",
				href: "#"
			},
			{
				label: "Capabilities",
				icon: "/svgs/link-ai.svg",
				href: "#"
			}
		]
	}
];

export const socialMediaLinks = [
	{
		label: "twitter",
		href: "#",
		icon: "/svgs/twitter.svg"
	},
	{
		label: "instagram",
		href: "#",
		icon: "/svgs/instagram.svg"
	},
	{
		label: "linkedIn",
		href: "#",
		icon: "/svgs/linkedin.svg"
	}
];
