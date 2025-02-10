import Image from "next/image";
import styles from "./Partners.module.scss";
import { Button } from "@/shared";

const Partners = () => {
	return (
		<div className={styles.section} id="partners">
			<div className={styles.section_container}>
				<div className={styles.card}>
					<div className={styles.details}>
						<div className={styles.text}>
							<h3>
								Our <span>Partners</span>
							</h3>
							<p>
								In keeping with our resolution to revolutionize governance
								and drive digital transformation through innovative
								solutions tailored for the African continent, we are
								leveraging valuable partnerships for shared prosperity.
							</p>
						</div>
						<Button className={styles.button}>Explore Partners</Button>
					</div>
					<div className={styles.logo_row}>
						{[1, 2, 3, 4, 5].map(item => (
							<div key={item} className={styles.logo_container}>
								<div className={styles.logo}>
									<Image
										src={`/images/logo-${item === 5 ? 1 : item}.png`}
										fill
										alt={`logo-${item}`}
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className={styles.divider}></div>
		</div>
	);
};

export default Partners;
