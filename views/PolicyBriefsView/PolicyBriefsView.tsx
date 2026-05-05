"use client";
import { useEffect } from "react";
import { PolicyBriefCard } from "@/shared";
import { useGetContentful } from "@/hooks";
import { BlogDetailsProps } from "@/interfaces";
import styles from "./PolicyBriefsView.module.scss";

const PolicyBriefsView = () => {
  const { fetchBlogs, sortedBlogs } = useGetContentful();
  const policyBriefs = sortedBlogs.filter((blog: BlogDetailsProps) => 
    blog.type.toLowerCase() === "policy brief" || blog.type.toLowerCase() === "case study"
  );
	useEffect(() => {
		fetchBlogs();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
  return (
    <div className={styles.section}>
			<div className={styles.section_container}>
				<div className={styles.large_card}>
					<div className={styles.details}>
						<h2>Policy Briefs</h2>
						<p>
              {`Govtech Africa's Policy Briefs translate rigorous research into clear, 
              actionable insights for policymakers, technical innovators, and development 
              practitioners engaged in the continent's digital transformation.`} <br />
              <br />
              Each brief distils complex governance and technological challenges into concise, 
              evidence-based recommendations—bridging African administrative realities with global 
              digital standards and turning research into practical policy action.
						</p>
					</div>
				</div>
				<div className={styles.divider}></div>
        		<h1>Our Latest Policy Briefs</h1>
				<div className={styles.divider}></div>
				{!policyBriefs?.length ? (
					<p>No posts available.</p>
				) : (
					<div className={styles.research_wrapper}>
						{policyBriefs?.map((blog: BlogDetailsProps, index: number) => {
							const type = blog?.type?.toLowerCase()?.replace(' ', '-');
							return (
								<PolicyBriefCard key={index} title={blog?.title}
									image={`https:${blog?.thumbnail?.fields?.file?.url}`}
									slug={blog?.slug}
									type={type}
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