import React from 'react';
import styles from './NotFoundView.module.scss';
import NotFound from '@/components/404/NotFound';

const NotFoundView = () => {
  return (
    <>
        <NotFound />
        <div className={styles.divider}></div>
    </>
  )
}

export default NotFoundView