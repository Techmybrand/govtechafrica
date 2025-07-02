import React from 'react';
import styles from './Catalogue.module.scss';
import { Button } from '..';
import Image from 'next/image';
import { CatalogueCardProps, CatalogueProps } from '@/interfaces';

const Catalogue = ({ btnText, header, spanText, catalogues, description, 
  isHeader = true, type = 'full' }: CatalogueProps) => {
  return (
    <div className={styles.catalogue_section}>
      {isHeader &&  (
        <div className={styles.catalogue_header}>
          <div className={styles.header_text}>
            <h3><span>{spanText}</span>{' '}{header}</h3>
            <h6>{description}</h6>
          </div>
          <Button className={styles.catalogue_btn}>
            {btnText}
          </Button>
        </div>
      )}
      <div className={styles.catalogue_body}>
        {catalogues?.map((catalogue: CatalogueCardProps, index: number) =>
          <div key={index} className={styles.catalogue_card}>
            <div data-type={type} className={styles.catalogue_card_image}>
              <Image alt='image' fill src={catalogue?.image} />
            </div>
            {type === 'sm' && (
              <p>{catalogue?.text}</p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Catalogue