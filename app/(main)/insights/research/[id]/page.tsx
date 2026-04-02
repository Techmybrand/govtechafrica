import { ResearchDetails } from "@/components";
interface ResearchPageProps {
	params: {
		id: string;
	};
}

export default async function ResearchPage({ params }: ResearchPageProps) {
    console.log('id: ', params.id);
    return <ResearchDetails />
}