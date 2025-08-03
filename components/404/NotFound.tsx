import React from 'react';
import Image from 'next/image';
import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={styles.not_found_container}>
      <div className={styles.details}>
        <p>404 error</p>
        {/* <h1>Under maintenance</h1> */}
        <h3>
          {`Sorry, the page you are looking for doesn't exist or has been moved. 
          Try searching our site:`}
        </h3>
        <div className={styles.image}>
          <Image alt='' fill src='/svgs/404.svg' />
        </div>
      </div>
    </div>
  )
}

export default NotFound