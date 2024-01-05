'use client';

import { CategorySelection } from './CategorySelection';
import { useState } from 'react';
import { SubCategories, getRandomImagesArray } from '@md/blaunk/config';
import { Divider, TagGroup } from '@li/design/elements';
import { ImageCardOverlay } from '@li/design/components';
import { Star } from '@li/design/icons';
import { SectionHeader } from '@md/blaunk/design';
import styles from './category-search.module.css';
import clsx from 'clsx';
import { sbs } from '@li/config/design';

const images = getRandomImagesArray(12)(225);

export const CategorySearch = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    'accessories_general',
  );

  return (
    <div className={styles.wrapper}>
      <SectionHeader sectionName="Search by category" basic />
      <div className={styles['content-wrapper']}>
        <div className={styles['section-wrapper']}>
          <CategorySelection
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
        <div className={styles.viewer}>
          <TagGroup
            items={
              SubCategories[selectedCategory] || [{ id: 'all', label: 'All' }]
            }
          />
          {<Divider color="var(--primary)" />}
          <div className={clsx(styles['item-wrapper'], sbs.dark)}>
            {images.map((src) => (
              <ImageCardOverlay
                isClickable
                key={src}
                image={{
                  width: 225,
                  height: 225,
                  alt: 'img',
                  src: src,
                }}
                bottom={
                  <div className={styles['item-label']}>
                    <div>
                      <div className={styles['item-title']}>Product name</div>
                      <div className={styles['item-sub-title']}>
                        Sub-category name
                      </div>
                    </div>
                    ₹ 1,000
                  </div>
                }
                top={
                  <div className={styles['item-rating-wrapper']}>
                    <div className={styles['item-rating']}>
                      4.5{' '}
                      <Star
                        fill="var(--backgroundsecondary)"
                        width={16}
                        height={16}
                      />
                    </div>
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
