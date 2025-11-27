import { ResearchDetails } from "@/components";

interface ResearchPageProps {
	params: {
		id: string;
	};
}

export default async function ResearchPage({ params }: ResearchPageProps) {
    console.log(params.id)
    return <ResearchDetails />
}