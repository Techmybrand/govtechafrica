import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer>
      <div className={styles["footer-inner"]}>
        <div>
          <div className={styles["footer-brand"]}>GOV TECH Africa</div>
          <div className={styles["footer-tagline"]}>govtech.africa · Drivers of Change</div>
        </div>
        <div className={styles["footer-copy"]}>© 2026 GOV TECH Africa (by Gappp). All rights reserved. It's all about inclusive governance.</div>
      </div>
    </footer>
  );
};

export default Footer;
