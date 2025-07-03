'use client';
import { Button, Carousel } from "@/shared";
import { useRouter } from "next/navigation";
import styles from "./Partners.module.scss";

const Partners = () => {
	const items = [
		'/images/logo-1.png',
		'/images/logo-2.png',
		'/images/logo-3.png',
		'/images/logo-4.png',
		'/images/logo-1.png',
		'/images/logo-2.png',
		'/images/logo-3.png',
		'/images/logo-4.png',
  	]
	const router = useRouter();
	return (
		<div className={styles.section} id="partners">
			<div className={styles.section_container}>
				<div className={styles.body}>
					<div className={styles.details}>
						<div className={styles.text}>
							<h3>
								Our <span>Partners</span>
							</h3>
						</div>
						<Button onClick={() => router.push('/partners')} className={styles.button}>
							Explore Partners
						</Button>
					</div>
					<Carousel items={items} direction='left' speed='slow' />
				</div>
			</div>
			<div className={styles.divider}></div>
		</div>
	);
};

export default Partners;
