import Image from "next/image";
import styles from "./CenterPiece.module.scss";

const CenterPiece = () => {
	return (
		<div className={styles.section}>
			<div className={styles.section_container}>
				<div className={styles.text}>
					<h3>
						<span>All over the world,</span> technology{" "}
						<span>remains at the centrepiece of rapidly</span> paced
						development.
					</h3>
				</div>
				<div className={styles.image}>
					<Image src="/images/centerpiece.png" fill alt="" />
				</div>
				<div className={styles.image_mob}>
					<Image src="/images/centerpiece-mob.png" fill alt="" />
				</div>
				<div className={styles.text}>
					<h3>
						Through
						<span>
							{" "}
							collaboration, capacity building, and scalable solutions,
						</span>{" "}
						we are committed to{" "}
						<span>
							reimagining what governance can achieve in today&apos;s
							digital era.
						</span>
					</h3>
				</div>
			</div>
			<div className={styles.divider}></div>
		</div>
	);
};

export default CenterPiece;
