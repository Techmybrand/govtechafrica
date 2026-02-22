import { cookiesPolicyDataProps, NavLink, PrivacyPolicyProps, TechnologyProps } from "@/interfaces";

export const navLinks: NavLink[] = [
	{
		label: "what we do",
		href: "what-we-do",
		external: false,
		icon: "/svgs/link-main.svg",
		subMenu: [
			// {
			// 	label: "technology",
			// 	icon: "/svgs/link-main.svg",
			// 	href: "/what-we-do#technology",
			// 	id: "technology",
			// 	// menu: [
			// 	// 	{
			// 	// 		label: "Customised Software Solutions",
			// 	// 		href: "/customised-software-solutions",
			// 	// 		id: "customised",
			// 	// 		icon: "/svgs/link-user.svg",
			// 	// 		external: false
			// 	// 	},
			// 	// 	{
			// 	// 		label: "Cybersecurity",
			// 	// 		href: "/cybersecurity",
			// 	// 		id: "cybersecurity",
			// 	// 		icon: "/svgs/link-user.svg",
			// 	// 		external: false
			// 	// 	},
			// 	// 	{
			// 	// 		label: "Cloud Services",
			// 	// 		href: "/cloud-services",
			// 	// 		id: "cloud",
			// 	// 		icon: "/svgs/link-user.svg",
			// 	// 		external: false
			// 	// 	},
			// 	// 	{
			// 	// 		label: "Data and AI",
			// 	// 		href: "/data-and-ai",
			// 	// 		id: "data",
			// 	// 		icon: "/svgs/link-ai.svg",
			// 	// 		external: false
			// 	// 	},
			// 	// 	{
			// 	// 		label: "Network Infrastructure Design & Implementation",
			// 	// 		href: "/network-infrastructure",
			// 	// 		id: "network",
			// 	// 		icon: "/svgs/link-user.svg",
			// 	// 		external: false
			// 	// 	},
			// 	// 	{
			// 	// 		label: "Web3 & Blockchain Technology",
			// 	// 		href: "/web3-and-blockchain",
			// 	// 		id: "web3",
			// 	// 		icon: "/svgs/link-user.svg",
			// 	// 		external: false
			// 	// 	},
			// 	// 	{
			// 	// 		label: "IT Support Services (Remote support & Maintenance)",
			// 	// 		href: "/support-services",
			// 	// 		id: "it",
			// 	// 		icon: "/svgs/link-user.svg",
			// 	// 		external: false
			// 	// 	}
			// 	// ]
			// },
			// {
			// 	label: "consulting",
			// 	icon: "/svgs/link-main.svg",
			// 	href: "/what-we-do#consulting",
			// 	id: "consulting",
			// 	// menu: [
			// 	// 	{
			// 	// 		label: "IT strategy consulting & advisory",
			// 	// 		href: "/strategy-consulting-and-advisory",
			// 	// 		id: "strategy",
			// 	// 		icon: "/svgs/link-user.svg",
			// 	// 		external: false
			// 	// 	},
			// 	// 	{
			// 	// 		label: "IT infrastructure procument & supply",
			// 	// 		href: "/infrastructure-procurement-and-supply",
			// 	// 		id: "infrastructure",
			// 	// 		icon: "/svgs/link-user.svg",
			// 	// 		external: false
			// 	// 	},
			// 	// 	{
			// 	// 		label: "IT compliance & regulatory consulting",
			// 	// 		href: "/compliance-and-regulatory-consulting",
			// 	// 		id: "compliance",
			// 	// 		icon: "/svgs/link-user.svg",
			// 	// 		external: false
			// 	// 	},
			// 	// 	{
			// 	// 		label: "capacity building & Trainings",
			// 	// 		href: "/capacity-building-and-trainings",
			// 	// 		id: "capacity",
			// 	// 		icon: "/svgs/link-ai.svg",
			// 	// 		external: false
			// 	// 	},
			// 	// 	{
			// 	// 		label: "tech events design & delivery",
			// 	// 		href: "/tech-events",
			// 	// 		id: "tech",
			// 	// 		icon: "/svgs/link-user.svg",
			// 	// 		external: false
			// 	// 	}
			// 	// ]
			// }
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
				isHref: true,
				isCookie: true,
			},
			{
				label: "Privacy Policy",
				icon: "/svgs/link-user.svg",
				href: "/privacy-policy",
				isHref: true,
			},
			{
				label: "Terms of Use",
				icon: "/svgs/link-ai.svg",
				href: "/terms-of-use",
				isHref: true,
			},
			{
				label: "Site Map",
				icon: "/svgs/link-ai.svg",
				// href: "/site-map",
				href: "",
				isHref: false,
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
				href: "/contact",
				isHref: true,
			},
			{
				label: "Careers",
				icon: "/svgs/link-user.svg",
				href: "/careers",
				isHref: true,
			},
			{
				label: "About us",
				icon: "/svgs/link-ai.svg",
				href: "/who-we-are",
				isHref: true,
			},
			{
				label: "Capabilities",
				icon: "/svgs/link-ai.svg",
				href: "/what-we-do",
				isHref: true,
			}
		]
	}
];

export const socialMediaLinks = [
	{
		label: "twitter",
		href: "https://x.com/govtech_africa",
		icon: "/svgs/twitter_dark.svg"
	},
	{
		label: "instagram",
		href: "https://www.instagram.com/govtech_africa",
		icon: "/svgs/instagram.svg"
	},
	{
		label: "linkedIn",
		href: "https://www.linkedin.com/company/govtech-africa-inc/",
		icon: "/svgs/linkedin.svg"
	},
	// {
	// 	label: "youtube",
	// 	href: "https://www.instagram.com/govtech_africa",
	// 	icon: "/svgs/youtube.svg"
	// },
	{
		label: "facebook",
		href: "https://www.facebook.com/share/1ZietUxCgj/?mibextid=wwXIfr",
		icon: "/svgs/facebook.svg"
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

export const privacyPolicyData: PrivacyPolicyProps[] = [
	{
		title: ' Information We Collect',
		headerText: `We collect personal information directly from you, through automated means, or from 
			third parties. This may include: `,
		content: [
			'Personal Identifiers: Name, email address, phone number, and postal address.',
			'Professional Information: Job title, employer, and division.',
			'Login Credentials: Username, password, and login timestamps.',
			'Device Information: IP address, browser type, and operating system.',
			'User Submissions: Feedback, inquiries, or any content provided via forms or communications'
		]
	},
	{
		title: 'How We Use Your Information',
		headerText: 'We use the information we collect to:',
		content: [
			'Provide and improve our products and services.',
			'Personalize user experiences on our website.',
			'Respond to your inquiries or requests.',
			'Send updates, newsletters, and promotional materials (when consent is provided).',
			'Process applications, including employment or partnership opportunities.',
			'Monitor and analyze site performance and usage trends.',
			'Protect against fraudulent activity, cybersecurity threats, and illegal actions.',
			'Comply with legal and regulatory requirements. '
		]
	},
	{
		title: 'How We Share Your Information',
		headerText: `We do not sell your personal information. However, we may share your data in the 
			following circumstances:`,
		content: [
			'Service Providers: With trusted vendors who perform functions on our behalf, such as hosting, analytics, or marketing.',
			'Legal Obligations: To comply with applicable laws, court orders, or regulatory requests.',
			'Business Transactions: In the event of a merger, acquisition, or sale of assets, your information may be transferred.',
			'Protection of Rights: To enforce our policies, protect our rights, and address security concerns'
		]
	},
	{
		title: 'Your Rights',
		headerText: `Depending on your jurisdiction, you may have the following rights over your personal
			information:`,
		content: [
			'Access, correct, or update your personal data.',
			'Request deletion or restriction of your information.',
			'Object to data processing for marketing purposes.',
			'Withdraw consent where processing is based on consent.',
			'Request data portability.'
		],
		subText: 'To exercise your rights, please contact us using the details provided below',
	},
	{
		title: 'Cookies and Tracking Technologies',
		headerText: `We use cookies and similar technologies to enhance your experience on our website. 
			These technologies help us analyze usage patterns, remember preferences, and deliver targeted
			advertisements. `,
		content: [],
		subText: `You can manage your cookie preferences through our Cookie Consent Manager or adjust your
			browser settings. For more details, see our Cookies Policy`
	},
	{
		title: 'Data Security',
		headerText: `We employ administrative, technical, and physical measures to protect your data 
			against unauthorized access, disclosure, alteration, or destruction. However, no system can 
			guarantee absolute security.`,
		content: []
	},
	{
		title: 'Data Retention',
		headerText: `We retain personal information for as long as necessary to fulfill the purposes 
			outlined in this Privacy Policy or as required by law.`,
		content: []
	},
	{
		title: 'Links to Other Websites',
		headerText: `Our website may include links to third-party sites. We are not responsible for their content or
			privacy practices, and we encourage you to review their policies.`,
		content: []
	},
	{
		title: 'Updates to This Privacy Policy',
		headerText: `We may update this Privacy Policy periodically to reflect changes in our practices or legal
			requirements. The updated policy will be posted on our website with the effective date.`,
		content: [],
	},
	{
		title: 'How to Contact Us',
		headerText: `You may choose to contact us through our website. If you email us or submit comments 
			or questions using the Contact Us form on this website, we will use the information you 
			provide to respond to your inquiries.`,
		content: [],
	},
]

export const termsOfUseData: PrivacyPolicyProps[] = [
    {
        title: 'Acceptance of Terms',
        headerText: `By using this site, you acknowledge that you have read, understood, and agree to 
			these Terms of Use and our Privacy Policy. These terms apply to all visitors, users, and 
			others who access the site.`,
        content: []
    },
    {
        title: 'Use of the Site',
        headerText: `You agree to use the Site only for lawful purposes and in compliance with all 
			applicable laws and regulations. You must not:`,
        content: [
            'Use the Site in a manner that could harm, disable, overburden, or impair its functionality.',
            'Upload, transmit, or distribute any malicious or harmful content.',
            'Attempt to gain unauthorized access to the Site, its servers, or related systems',
            'Violate any intellectual property rights or proprietary rights of Govtech Africa or third parties.',
        ]
    },
    {
        title: 'Intellectual Property',
        headerText: `All content on the Site, including text, graphics, logos, images, and software, is 
			the property of Govtech Africa or its licensors and is protected by copyright, trademark, and 
			other intellectual property laws.`,
        content: [
			`You may not reproduce, distribute, modify, or create derivative works of any content without prior written permission.`,
			`You may use the content for personal, non-commercial purposes only.`
		]
    },
    {
        title: 'User Content',
        headerText: `If you submit content (e.g., comments, feedback, or suggestions) to the site, you 
			grant Govtech Africa a non-exclusive, royalty-free, perpetual, and irrevocable license to use, 
			modify, reproduce, and distribute such content in connection with its operations.`,
        content: [
			`You are solely responsible for the content you submit and must ensure it does not infringe on
				the rights of any third party or violate any laws.`
		]
    },
    {
        title: 'Third-Party Links',
        headerText: `The site may contain links to third-party websites or resources. These links are 
			provided for convenience and do not signify endorsement by Govtech Africa. We are not responsible 
			for the content, policies, or practices of any third-party websites.`,
        content: []
    },
    {
        title: 'Disclaimer of Warranties',
        headerText: `The site and its content are provided "as is" and "as available" without any 
			warranties, express or implied. Govtech Africa disclaims all warranties, including but not 
			limited to: `,
        content: [
            `The accuracy, completeness, or reliability of the Site's content.`,
			'The site being free from errors, viruses, or harmful components'
        ]
    },
    {
        title: ' Limitation of Liability ',
        headerText: 'To the fullest extent permitted by law, Govtech Africa shall not be liable for any: ',
        content: [
			` Direct, indirect, incidental, or consequential damages arising from your use or inability 
				to use the site`,
			`Loss of data, profits, or business opportunities resulting from access to the site.`
		]
    },
    {
        title: ' Indemnification',
        headerText: `You agree to indemnify and hold harmless Govtech Africa, its affiliates, employees, and 
			agents from any claims, damages, losses, or expenses (including attorney fees) arising out of 
			your use of the site, your violation of these Terms of Use, or your infringement of any rights 
			of a third party.`,
        content: []
    },
    {
        title: 'Termination',
        headerText: `Govtech Africa reserves the right to suspend or terminate your access to the Site at 
			its sole discretion, without prior notice, for any reason, including a breach of these Terms 
			of Use.`,
        content: []
    },
    {
        title: 'Governing Law',
        headerText: `These Terms of Use shall be governed by and construed in accordance with the laws of 
			the Federal Republic of Nigeria. Any disputes arising out of or related to these terms shall 
			be subject to the exclusive jurisdiction of the courts in Nigeria`,
        content: []
    },
	{
		title: 'Changes to Terms of Use',
		headerText: `Govtech Africa reserves the right to update or modify these Terms of Use at any time 
			without prior notice. The updated version will be posted on this page with the effective date. 
			Your continued use of the Site constitutes acceptance of any changes.`,
		content: []
	},
	{
		title: 'Contact Us',
		headerText: `You may choose to contact us through our website. If you email us or submit comments 
			or questions using the Contact Us form on this website, we will use the information you 
			provide to respond to your inquiries.`,
		content: []
	},
];

export const cookiesPolicyData: cookiesPolicyDataProps[] = [
    {
        title: 'What Are Cookies?',
        headerText: `Cookies are small text files stored in your browser or device by websites you visit 
			to track, personalize, and enhance your user experience.`,
        content: []
    },
    {
        title: 'Types of Cookies We Use',
        headerText: 'We use the following types of cookies on our site: ',
        content: [
            {
                title: 'Essential Cookies',
                body: [
                    'These are necessary for the website to function correctly.',
                    'They enable core functionalities, such as page navigation and access to secure areas.',
                    'Disabling these cookies may impact your ability to use certain parts of the site.',
                ]
            },
            {
                title: 'Performance Cookies',
                body: [
                    `These cookies collect information about how visitors use the site, such as which pages are
						visited most often.`,
                    'They help us improve the website’s performance and user experience.',
                    'All data collected by these cookies is aggregated and anonymous.',
                ]
            },
            {
                title: 'Functional Cookies',
                body: [
                    ' Functional cookies enable the Site to remember your preferences, such as language or region.',
                    'They enhance personalization and make the Site more user-friendly.'
                ]
            },
            {
                title: 'Advertising Cookies',
                body: [
                    'These cookies are used to deliver ads relevant to your interests.',
                    `They track your online activity across the Site and other websites to build a 
						profile of your preferences.`,
					'They may also limit how often you see an ad',
                ]
            },
            {
                title: 'Social Media Cookies',
                body: [
                    'These cookies enable you to share content from our site on social media platforms.',
                    'Social media platforms may use this information, as outlined in their privacy policies.'
                ]
            },
        ]
    },
    {
        title: 'How We Use Cookies',
        headerText: 'We use cookies to: ',
        content: [
            {
                title: '',
                body: [
                    `Analyze visitor behavior and improve our website’s functionality.`,
					`Provide a personalized browsing experience.`,
					`Enhance security and prevent fraudulent activity.`,
					`Deliver tailored advertising and content.`,
					`Monitor and measure the effectiveness of our campaigns. `
                ]
            },
        ]
    },
    {
        title: 'Managing Your Cookie Preferences',
        headerText: 'You can manage or disable cookies in the following ways: ',
        content: [
			{
				title: 'Cookie Consent Manager',
				body: [
					'When you visit our site, you can manage your cookie preferences using our Cookie Consent Manager',
					' You can choose which types of cookies you want to enable or disable. '
				]
			},
			{
				title: 'Browser Settings',
				body: [
					'Most web browsers allow you to control cookies through their settings.',
					'You can delete or block cookies by adjusting your browser preferences.',
					'Note that disabling certain cookies may affect the functionality of the Site'
				]
			},
			{
				title: 'Opt-Out Tools',
				body: [
					'For advertising cookies, you can opt out of targeted advertising.',
				]
			},
		]
    },
    {
        title: 'Third-Party Cookies',
        headerText: `We may work with third-party service providers who use cookies to provide analytics,
			advertising, or social media integration. The privacy policies of the respective third parties
			govern these cookies.`,
        content: [],
    },
    {
        title: 'Changes to This Cookies Policy',
        headerText: `We may update this Cookies Policy from time to time to reflect changes in our 
			practices or legal requirements. The revised version will be posted on this page with the 
			effective date. `,
        content: []
    },
    {
        title: 'Contact Us',
        headerText: `You may choose to contact us through our website. If you email us or submit comments 
			or questions using the Contact Us form on this website, we will use the information you 
			provide to respond to your inquiries.`,
        content: []
    }
];

export const consulting: TechnologyProps[] = [
	{
		title: "IT Infrastructure Procurement & Supply",
		image: '/svgs/infrastructure.svg',
		description: "We empower African governments with the right infrastructure",
		href: "/infrastructure-procurement-and-supply",
		id: "infrastructure",
	},
	{
		title: "Capacity Building & Trainings",
		image: '/svgs/capacity.svg',
		description:
			"We equip government stakeholders with the skills and tools they need to drive meaningful change and innovation.",
		href: "/capacity-building-and-trainings",
		id: "capacity",
	},
	{
		title: "Tech Events Design and Delivery",
		image: '/svgs/tech.svg',
		description:
			"We connect Industry stakeholders for brainstorming & knowledge sharing",
		href: "/tech-events",
		id: "tech",
	},
	{
		title: "IT Strategy Consulting & Advisory",
		image: '/svgs/strategy.svg',
		description: "We guide governments toward smarter, more effective tech solutions",
		href: "/strategy-consulting-and-advisory",
		id: "strategy",
	},
	{
		title: "IT Compliance & Regulatory Consulting",
		image: '/svgs/compliance.svg',
		description:
			"Compliance is key. We ensure government IT systems stay secure, compliant, and future-ready",
		href: "/compliance-and-regulatory-consulting",
		id: "compliance"
	}
];

export const technologies: TechnologyProps[] = [
	{
		title: "Customised Software Solutions",
		description: "We co-create the best solutions tailored to each agency’s need",
		href: "customised-software-solutions",
		image: '/svgs/customized.svg',
		id: "customised",
	},
	{
		title: "Cloud Services",
		description:
			"We equip government stakeholders with the skills and tools they need to drive meaningful change and innovation.",
		href: "/cloud-services",
		image: '/svgs/cloud_services.svg',
		id: "cloud",
	},
	{
		title: "Web3 & Blockchain Technology",
		description: "Decentralized solutions for the public sector",
		href: "/web3-and-blockchain",
		image: '/svgs/web3.svg',
		id: "web3",
	},
	{
		title: "Cybersecurity",
		description:
			"Emerging threats demand revolutionary cyber protection. De-risk tomorrow by boosting cybersecurity today",
		href: "/cybersecurity",
		image: '/svgs/cybersecurity.svg',
		id: "cybersecurity",
	},
	{
		title: "Data and AI",
		description:
			"Elevating decision-making with secure and intelligent data processing, analytics and operational AI",
		href: "/data-and-ai",
		image: '/svgs/ai.svg',
		id: "data",
	},
	{
		title: "Network Infrastructure Design & Implementation",
		description:
			"Compliance is key. We ensure government IT systems stay secure, compliant, and future-ready",
		href: "/network-infrastructure",
		image: '/svgs/network.svg',
		id: "network",
	},
	{
		title: "IT Support Services (Remote support & Maintenance)",
		description:
			"Seamless IT operations with proactive remote support and maintenance",
		href: "/support-services",
		image: '/svgs/it.svg',
		id: "it",
	}
];