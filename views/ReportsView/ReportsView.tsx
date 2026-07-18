"use client";
import React, { useEffect } from "react";
import { ReportCard } from "@/shared";
import { useGetContentful } from "@/hooks";
import { BlogDetailsProps } from "@/interfaces";
import styles from "./ReportsView.module.scss";

const ReportsView = () => {
    const { fetchBlogs, sortedBlogs } = useGetContentful();
    const reports = sortedBlogs.filter((blog: BlogDetailsProps) => blog.type.toLowerCase() === "report");

	useEffect(() => {
		fetchBlogs();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
    return (
        <div className={styles.section}>
			<div className={styles.section_container}>
				<div className={styles.large_card}>
					<div className={styles.details}>
						<h2>Reports</h2>
						<p>
							{reports?.length} results
						</p>
					</div>
				</div>
				<div className={styles.divider}></div>
				{!reports?.length ? (
					<p>No posts available.</p>
				) : (
					<div className={styles.research_wrapper}>
						{reports?.map((report: BlogDetailsProps, index: number) => {
							return (
								<ReportCard key={index} title={report?.title}
                                    image={`https:${report?.thumbnail?.fields?.file?.url}`}
									slug={report?.slug} publishedAt={report?.publishedAt} externalUrl={report?.externalUrl}
                                />
							)
						})}
					</div>
				)}
			</div>
		</div>
    )
}

export default ReportsView