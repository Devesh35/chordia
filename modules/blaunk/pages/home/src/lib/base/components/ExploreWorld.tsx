'use client';

import { Carousal, Link } from '@li/design/elements';
import { useMedia } from '@li/design/hooks';
import { blaunkMarketPlace, Routes } from '@md/blaunk/config';
import { SectionHeader } from '@md/blaunk/design';
import Image from 'next/image';
import styles from './explore.module.css';
import { HomeBanners } from './HomeBanners';

export const ExploreWorld = () => {
  const isMobile = useMedia('mobile');
  return (
    <>
      <div className={styles.wrapper}>
        <SectionHeader sectionName="Market" />
        <Link href={Routes.home.marketPlace.path}>
          {isMobile ? (
            <div className={styles['carousal-wrapper']}>
              <Carousal hidePagination>
                {new Array(4).fill(0).map((_, i) => (
                  <Image
                    width={650}
                    height={160}
                    alt="homeBanner"
                    src={blaunkMarketPlace}
                    style={{ width: '100%', height: '100%' }}
                  />
                ))}
              </Carousal>
            </div>
          ) : (
            <>
              <HomeBanners />
              <div className="mt-4">
                <HomeBanners />
              </div>
            </>
          )}
        </Link>
      </div>
      <div className={styles.wrapper}>
        <SectionHeader sectionName="Cake" />
        <Link href={Routes.home.cake.path}>
          {isMobile ? (
            <div className={styles['carousal-wrapper']}>
              <Carousal hidePagination>
                {new Array(2).fill(0).map((_, i) => (
                  <Image
                    width={650}
                    height={160}
                    alt="homeBanner"
                    src={blaunkMarketPlace}
                    style={{ width: '100%', height: '100%' }}
                  />
                ))}
              </Carousal>
            </div>
          ) : (
            <HomeBanners />
          )}
        </Link>
      </div>
    </>
  );
};
