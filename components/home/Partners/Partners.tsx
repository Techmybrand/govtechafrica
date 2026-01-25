import React from "react";
import { Button, Carousel } from "@/shared";
import styles from './Partners.module.scss';

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
    return (
        <div className={styles.section}>
			<div className={styles.section_container}>
				<div className={styles.body}>
					<div className={styles.details}>
						<div className={styles.text}>
							<h3>
								Our <span>Partners</span>
							</h3>
                            <p>
                                In keeping with our resolution to revolutionize governance and drive 
                                digital transformation through innovative solutions tailored for the 
                                African continent, we are leveraging valuable partnerships for shared 
                                prosperity.
                            </p>
						</div>
						<Button className={styles.button}>
							Explore Partners
						</Button>
					</div>
					<Carousel items={items} direction='left' speed='slow' />
				</div>
			</div>
		</div>
    )
}

export default Partners