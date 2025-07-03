export interface NavLinkMenu {
	label: string;
	id?: string;
	href: string;
	external: boolean;
	icon?: string;
}

export interface NavLinkSub {
	label: string;
	icon: string;
	href: string;
	id?: string;
	menu?: NavLinkMenu[];
}

export interface NavLink {
	label: string;
	id?: string;
	href?: string;
	external: boolean;
	videoUrl?: string;
	subMenu?: NavLinkSub[];
	title?: string;
	description?: string;
	button?: string;
	icon?: string;
}

export interface GrowthCardProps {
	title: string
	description: string
}

export interface TechnologyProps {
	id: string
	href: string
	title: string
	image: string
	description: string
}

export interface TechnologyCardProps {
	index?: number
	technology: TechnologyProps
	cardType: 'technology' | 'consulting'
}

export interface CareersProps {
	title: string
	description: string
	href: string
	location: string
	time: string
}

export interface SectionProps {
    title: string
    subtext: string
    top_image: string
    top_image_class?: string
    bottom_image: string
    bottom_image_class?: string
    description: string
    description_class: string
    sec_description?: string
    subtext_class?: string
}

export interface StatisticsProps {
	title: string
	description: string
}

export interface StatisticsArrayProps {
    list: StatisticsProps[]
}

export interface CenterpieceProps {
	text: string
}

export interface CatalogueCardProps {
  image: string
  text: string
}

export interface CatalogueProps {
  btnText?: string
  header?: string
  isHeader: boolean
  spanText?: string
  description?: string
  type: 'full' | 'sm'
  catalogues: CatalogueCardProps[]
}

export interface ServiceCardProps {
  image: string
  title: string
  description: string
  web_direction: 'normal' | 'reverse'
  mob_direction: 'normal' | 'reverse'
}
