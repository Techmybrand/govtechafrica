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
							{`Govtech Africa's Reports provide in-depth analysis and comprehensive overviews of key trends, 
							challenges, and opportunities within the African digital ecosystem and public sector.`} <br />
              				<br />
							Each report offers detailed, data-driven insights and strategic recommendations—empowering stakeholders, 
							governments, and innovators to navigate complex digital landscapes and foster sustainable technological advancement 
							across the continent.
						</p>
					</div>
				</div>
				{!reports?.length ? (
					<p>No posts available.</p>
				) : (
					<div className={styles.research_wrapper}>
						{reports?.map((report: BlogDetailsProps, index: number) => {
							return (
								<ReportCard key={index} title={report?.title} date={report?.date}
                                    image={`https:${report?.thumbnail?.fields?.file?.url}`} slug={report?.slug}
									externalUrl={report?.externalUrl}
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