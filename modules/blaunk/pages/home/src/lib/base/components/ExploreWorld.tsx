'use client';

import { Link } from '@li/design/elements';
import { Routes } from '@md/blaunk/config';
import { SectionHeader } from '@md/blaunk/design';
import styles from './explore.module.css';
import { HomeBanners } from './HomeBanners';

export const ExploreWorld = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <SectionHeader sectionName="Market" />
        <Link href={Routes.home.marketPlace.path}>
          <HomeBanners />
        </Link>
      </div>
      <div className={styles.wrapper}>
        <Link href={Routes.home.marketPlace.path}>
          <HomeBanners />
        </Link>
      </div>
      <div className={styles.wrapper}>
        <SectionHeader sectionName="Cake" />
        <Link href={Routes.home.cake.path}>
          <HomeBanners />
        </Link>
      </div>
    </>
  );
};
