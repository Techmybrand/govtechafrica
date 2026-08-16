"use client";
import { useEffect } from "react";
import { ResearchCard } from "@/shared";
import { useGetContentful } from "@/hooks";
import { BlogDetailsProps } from "@/interfaces";
import styles from "./PolicyBriefsView.module.scss";

const PolicyBriefsView = () => {
	const { fetchBlogs, sortedBlogs } = useGetContentful();
	const policyInsights = sortedBlogs.filter((blog: BlogDetailsProps) => blog.type.toLowerCase() === "policy insight");
	
	useEffect(() => {
		fetchBlogs();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
  return (
    <div className={styles.section}>
			<div className={styles.section_container}>
				<div className={styles.large_card}>
					<div className={styles.details}>
						<h2>Policy Insights</h2>
						<p>
							{`Govtech Africa's Policy Insights translate rigorous research into clear, practical guidance for policymakers, 
							technical innovators, and development practitioners shaping the continent's digital transformation.`} <br />
              				<br />
							Each insight distils complex governance and technological challenges into concise, evidence-based 
							recommendations—bridging African administrative realities with global digital standards and turning research 
							into informed policy decisions and meaningful action.
						</p>
					</div>
				</div>
				{/* <div className={styles.divider}></div>
        		<h1>Our Latest Policy Briefs</h1>
				<div className={styles.divider}></div> */}
				{!policyInsights?.length ? (
					<p>No posts available.</p>
				) : (
					<div className={styles.research_wrapper}>
						{policyInsights?.map((blog: BlogDetailsProps, index: number) => {
							// const type = blog?.type?.toLowerCase()?.replace(' ', '-');
							return (
								<ResearchCard key={index} title={blog?.title}
									image={`https:${blog?.thumbnail?.fields?.file?.url}`} slug={blog?.slug}
									description={blog?.description} btnText={blog?.type}
								/>
							)
						})}
					</div>
				)}
			</div>
	  </div>
  )
}

export default PolicyBriefsView