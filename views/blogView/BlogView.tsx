"use client";
// import fs from "fs";
import { useEffect } from "react";
import { ResearchCard, BackgrounderCard, ExpertTakeCard, PolicyBriefCard, ReportCard } from "@/shared";
import { useGetContentful } from "@/hooks";
import { BlogDetailsProps } from "@/interfaces";
import styles from "./BlogView.module.scss";

export default function BlogView() {
	const { fetchBlogs, sortedBlogs: insightsList } = useGetContentful();
	useEffect(() => {
		fetchBlogs();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div className={styles.section}>
			<div className={styles.section_container}>
				<div className={styles.large_card}>
					<div className={styles.details}>
						<h2>Insights</h2>
					</div>
				</div>
				<div className={styles.divider1}></div>
				{!insightsList?.length ? (
					<p>No posts available.</p>
				) : (
					<div className={styles.research_wrapper}>
						{insightsList?.map((blog: BlogDetailsProps, index: number) => {
							const getType = blog?.type?.toLowerCase();
							const getResearchType = getType?.replace(' ', '-');
							const isExpertTake = getType === "perspective" ||
								getType === "opinion piece" ||
								getType === "insight";
							const isPolicyBrief = getType === "policy brief" || getType === "case study";
							const isReport = getType === "report";

							return blog?.type === 'backgrounder' ? (
								<BackgrounderCard key={index} title={blog?.title}
									image={`https:${blog?.thumbnail?.fields?.file?.url}`}
									slug={blog?.slug}
									date={blog?.date}
									publishedAt={blog?.publishedAt}
								/>
							) : isExpertTake ? (
								<ExpertTakeCard key={index} title={blog?.title}
									image={`https:${blog?.thumbnail?.fields?.file?.url}`}
									slug={blog?.slug}
									date={blog?.date}
									publishedAt={blog?.publishedAt}
									author={blog?.authors?.[0]}
									type={blog?.type}
								/>
							) : isReport ? (
								<ReportCard key={index} title={blog?.title} slug={blog?.slug} date={blog?.date}
									publishedAt={blog?.publishedAt} externalUrl={blog?.externalUrl}
									image={`https:${blog?.thumbnail?.fields?.file?.url}`}
								/>
							) :
							 isPolicyBrief ? (
								<PolicyBriefCard key={index} title={blog?.title}
									image={`https:${blog?.thumbnail?.fields?.file?.url}`}
									slug={blog?.slug} description={blog?.description}
									type={blog?.type} btnText={getType}
								/>
							) : (
								<ResearchCard key={index} title={blog?.title}
									image={`https:${blog?.thumbnail?.fields?.file?.url}`}
									alt={`https:${blog?.thumbnail?.fields?.description}`}
									description={blog?.description}
									btnText={blog?.type}
									slug={blog?.slug}
									researchType={getResearchType}
								/>
							)
						})}
					</div>
				)}
			</div>
			<div className={styles.divider}></div>
		</div>
	);
}
