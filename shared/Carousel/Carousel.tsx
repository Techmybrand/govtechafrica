'use client';
import React, { useEffect, useRef } from 'react';
import styles from './Carousel.module.scss';
import Image from 'next/image';
interface ScrollerProps {
  items: string[];
  direction?: 'left' | 'right';
  speed?: 'normal' | 'fast' | 'slow';
}

const Carousel = ({ items, direction = 'left', speed = 'normal' }: ScrollerProps) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const scrollerInnerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion && scrollerRef.current && scrollerInnerRef.current) {
      scrollerRef.current.setAttribute('data-animated', 'true');

      const scrollerInner = scrollerInnerRef.current;
      items.forEach((_, index) => {
        const item = scrollerInner.children[index];
        if (item) {
          const duplicatedItem = item.cloneNode(true) as HTMLElement;
          duplicatedItem.setAttribute('aria-hidden', 'true');
          scrollerInner.appendChild(duplicatedItem);
        }
      });
    }
  }, [items]);

  return (
    <div
      className={`${styles.scroller} ${styles[`direction-${direction}`]} ${styles[`speed-${speed}`]}`}
      ref={scrollerRef}
    >
      <ul className={styles.scroller__inner} ref={scrollerInnerRef}>
        {items?.map((item: string, index: number) => (
          <li key={index} data-index={index} className={styles.tag}>
            <Image alt='' fill src={item} sizes='100%' />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Carousel