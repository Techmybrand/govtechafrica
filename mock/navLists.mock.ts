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
				href: "/what-we-do#technology",
				id: "technology",
				// menu: [
				// 	{
				// 		label: "Customised Software Solutions",
				// 		href: "/customised-software-solutions",
				// 		id: "customised",
				// 		icon: "/svgs/link-user.svg",
				// 		external: false
				// 	},
				// 	{
				// 		label: "Cybersecurity",
				// 		href: "/cybersecurity",
				// 		id: "cybersecurity",
				// 		icon: "/svgs/link-user.svg",
				// 		external: false
				// 	},
				// 	{
				// 		label: "Cloud Services",
				// 		href: "/cloud-services",
				// 		id: "cloud",
				// 		icon: "/svgs/link-user.svg",
				// 		external: false
				// 	},
				// 	{
				// 		label: "Data and AI",
				// 		href: "/data-and-ai",
				// 		id: "data",
				// 		icon: "/svgs/link-ai.svg",
				// 		external: false
				// 	},
				// 	{
				// 		label: "Network Infrastructure Design & Implementation",
				// 		href: "/network-infrastructure",
				// 		id: "network",
				// 		icon: "/svgs/link-user.svg",
				// 		external: false
				// 	},
				// 	{
				// 		label: "Web3 & Blockchain Technology",
				// 		href: "/web3-and-blockchain",
				// 		id: "web3",
				// 		icon: "/svgs/link-user.svg",
				// 		external: false
				// 	},
				// 	{
				// 		label: "IT Support Services (Remote support & Maintenance)",
				// 		href: "/support-services",
				// 		id: "it",
				// 		icon: "/svgs/link-user.svg",
				// 		external: false
				// 	}
				// ]
			},
			{
				label: "consulting",
				icon: "/svgs/link-main.svg",
				href: "/what-we-do#consulting",
				id: "consulting",
				// menu: [
				// 	{
				// 		label: "IT strategy consulting & advisory",
				// 		href: "/strategy-consulting-and-advisory",
				// 		id: "strategy",
				// 		icon: "/svgs/link-user.svg",
				// 		external: false
				// 	},
				// 	{
				// 		label: "IT infrastructure procument & supply",
				// 		href: "/infrastructure-procurement-and-supply",
				// 		id: "infrastructure",
				// 		icon: "/svgs/link-user.svg",
				// 		external: false
				// 	},
				// 	{
				// 		label: "IT compliance & regulatory consulting",
				// 		href: "/compliance-and-regulatory-consulting",
				// 		id: "compliance",
				// 		icon: "/svgs/link-user.svg",
				// 		external: false
				// 	},
				// 	{
				// 		label: "capacity building & Trainings",
				// 		href: "/capacity-building-and-trainings",
				// 		id: "capacity",
				// 		icon: "/svgs/link-ai.svg",
				// 		external: false
				// 	},
				// 	{
				// 		label: "tech events design & delivery",
				// 		href: "/tech-events",
				// 		id: "tech",
				// 		icon: "/svgs/link-user.svg",
				// 		external: false
				// 	}
				// ]
			}
		]
	},
	{
		label: "who we are",
		href: "who-we-are",
		external: false,
		icon: "/svgs/link-main.svg",
		subMenu: [
			// {
			// 	label: "mission, Vision, values",
			// 	icon: "/svgs/link-main.svg",
			// 	href: "/who-we-are",
			// 	id: "mision"
			// },
			// {
			// 	label: "team",
			// 	icon: "/svgs/link-user.svg",
			// 	href: "/teams",
			// 	id: "team"
			// },
			// {
			// 	label: "partners",
			// 	icon: "/svgs/link-user.svg",
			// 	href: "/partners",
			// 	id: "partners"
			// },
			// {
			// 	label: "projects",
			// 	icon: "/svgs/link-user.svg",
			// 	href: "/who-we-are",
			// 	id: "projects"
			// }
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
			// {
			// 	label: "GOVTECH AFRICA FOUNDATION (COMING SOON)",
			// 	icon: "/svgs/link-ai.svg",
			// 	href: "#"
			// }
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
				href: "",
			},
			{
				label: "Privacy Policy",
				icon: "/svgs/link-user.svg",
				// href: "/privacy-policy",
				href: "",
			},
			{
				label: "Terms of Use",
				icon: "/svgs/link-ai.svg",
				// href: "/terms-of-use",
				href: ""
			},
			{
				label: "Site Map",
				icon: "/svgs/link-ai.svg",
				// href: "/site-map",
				href: "",
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
				href: "/contact"
			},
			{
				label: "Careers",
				icon: "/svgs/link-user.svg",
				href: "/careers"
			},
			{
				label: "About us",
				icon: "/svgs/link-ai.svg",
				// href: "/about-us",
				href: ""
			},
			{
				label: "Capabilities",
				icon: "/svgs/link-ai.svg",
				// href: "/capabilities"
				href: ""
			}
		]
	}
];

export const socialMediaLinks = [
	{
		label: "twitter",
		href: "https://x.com/govtech_africa",
		icon: "/svgs/twitter.svg"
	},
	{
		label: "instagram",
		href: "#https://www.instagram.com/govtech_africa",
		icon: "/svgs/instagram.svg"
	},
	{
		label: "linkedIn",
		href: "https://www.linkedin.com/company/govtech-africa-inc/",
		icon: "/svgs/linkedin.svg"
	}
];

export const posts = [
	{
		title: "Converged Cyber AI: A Paradigm Shift in Cybersecurity",
		description:
			`The advancement of generative AI capabilities presents enormous potential for 
			modernizing government operations but it also introduces new security gaps. While 
			automation allows developers to move from concept to minimum viable product faster 
			than ever, adversaries are developing similar AI-enabled techniques to discover and 
			exploit security vulnerabilities`,
		href: "",
		image: '/images/insight_image_1.jpg',
		bgColor: '#FFFFFF1A',
		tag: 'featured',
	},
	{
		title: "The intersection of AI governance and cybersecurity",
		description:
			"Learn about the impact of generative AI on cybersecurity planning and our proactive approach to AI implementation that focuses on governance and ethical use. You'll also hear about the dual nature of cloud computing, acknowledging its power for data accessibility and defensive capabilities and addressing the challenges of multi-cloud environments.",
		href: "",
		image: '/images/insight_image_2.jpg',
		bgColor: '#13361B',
		tag: 'featured',
	},
	{
		title: `Reforming the Public Sector in Africa Through Digital Transformation - Lessons from India's Digital Stack`,
		description: `This case study analyzes how India's Digital Public 
        	Infrastructure (DPI) successfully created a unified digital identity and 
        	financial system that serves one of the world's largest populations — 
            offering valuable insights for African governments.`,
		image: '/images/research_1.png',
		tag: 'insight',
	},
	{
		title: `Reforming the Public Sector in Africa Through Digital Transformation - Lessons from India's Digital Stack`,
		description: `This case study analyzes how India's Digital Public 
        	Infrastructure (DPI) successfully created a unified digital identity and 
        	financial system that serves one of the world's largest populations — 
            offering valuable insights for African governments.`,
		image: '/images/research_2.png',
		tag: 'insight',
	},
	{
		title: `Reforming the Public Sector in Africa Through Digital Transformation - Lessons from India's Digital Stack`,
		description: `This case study analyzes how India's Digital Public 
        	Infrastructure (DPI) successfully created a unified digital identity and 
        	financial system that serves one of the world's largest populations — 
            offering valuable insights for African governments.`,
		image: '/images/research_1.png',
		tag: 'insight',
	},
	{
		title: `Reforming the Public Sector in Africa Through Digital Transformation - Lessons from India's Digital Stack`,
		description: `This case study analyzes how India's Digital Public 
        	Infrastructure (DPI) successfully created a unified digital identity and 
        	financial system that serves one of the world's largest populations — 
            offering valuable insights for African governments.`,
		image: '/images/research_2.png',
		tag: 'insight',
	},
	{
		title: `Reforming the Public Sector in Africa Through Digital Transformation - Lessons from India's Digital Stack`,
		description: `This case study analyzes how India's Digital Public 
        	Infrastructure (DPI) successfully created a unified digital identity and 
        	financial system that serves one of the world's largest populations — 
            offering valuable insights for African governments.`,
		image: '/images/research_1.png',
		tag: 'insight',
	},
	{
		title: `Reforming the Public Sector in Africa Through Digital Transformation - Lessons from India's Digital Stack`,
		description: `This case study analyzes how India's Digital Public 
        	Infrastructure (DPI) successfully created a unified digital identity and 
        	financial system that serves one of the world's largest populations — 
            offering valuable insights for African governments.`,
		image: '/images/research_2.png',
		tag: 'insight',
	},
	{
		title: `Reforming the Public Sector in Africa Through Digital Transformation - Lessons from India's Digital Stack`,
		description: `This case study analyzes how India's Digital Public 
        	Infrastructure (DPI) successfully created a unified digital identity and 
        	financial system that serves one of the world's largest populations — 
            offering valuable insights for African governments.`,
		image: '/images/research_1.png',
		tag: 'insight',
	},
	{
		title: `Reforming the Public Sector in Africa Through Digital Transformation - Lessons from India's Digital Stack`,
		description: `This case study analyzes how India's Digital Public 
        	Infrastructure (DPI) successfully created a unified digital identity and 
        	financial system that serves one of the world's largest populations — 
            offering valuable insights for African governments.`,
		image: '/images/research_2.png',
		tag: 'insight',
	},
	{
		title: `Reforming the Public Sector in Africa Through Digital Transformation - Lessons from India's Digital Stack`,
		description: `This case study analyzes how India's Digital Public 
        	Infrastructure (DPI) successfully created a unified digital identity and 
        	financial system that serves one of the world's largest populations — 
            offering valuable insights for African governments.`,
		image: '/images/research_1.png',
		tag: 'insight',
	},
]
