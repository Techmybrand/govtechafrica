import { ResearchDetails } from "@/components";
interface ResearchPageProps {
	params: {
		id: string;
	};
}

export default async function ResearchPage({  }: ResearchPageProps) {
    return <ResearchDetails />;
}