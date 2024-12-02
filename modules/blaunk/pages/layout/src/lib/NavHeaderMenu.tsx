'use client';

import { Button, Divider, Modal, Select } from '@li/design/elements';
import { useMedia } from '@li/design/hooks';
import { DownFilled } from '@li/design/icons';
import { NavMenuItems } from '@md/blaunk/config';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './navHeader.module.css';

export const NavHeaderMenu = () => {
  const router = useRouter();
  const isMobile = useMedia();
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    // prefetch
    NavMenuItems.forEach((item) => {
      if (item.path) {
        router.prefetch(item.path);
      }
    });
  });

  if (isMobile) {
    return (
      <>
        <Modal isOpen={isOpened} onClose={() => setIsOpened(false)} hideHeader>
          {NavMenuItems.map((item) =>
            item.path ? (
              <div
                key={item.id}
                onClick={() => {
                  setIsOpened(false);
                  item.path && router.push(item.path);
                }}
                style={{
                  padding: '8px',
                }}
              >
                {item.item}
              </div>
            ) : (
              <Divider />
            ),
          )}
        </Modal>
        <Button
          onClick={() => setIsOpened(true)}
          variant="text"
          style={{
            color: 'white',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '8px',
              alignItems: 'center',
            }}
          >
            <div
              style={
                isMobile
                  ? {
                      fontSize: '14px',
                    }
                  : {}
              }
            >
              Chordia
            </div>
            <DownFilled fill="var(--gray300)" width={isMobile ? 12 : 16} height={isMobile ? 12 : 16} />
          </div>
        </Button>
      </>
    );
  }

  return (
    <Select
      Header={isMobile ? 'Chordia' : 'Welcome, Chordia'}
      className={styles.welcome}
      options={NavMenuItems}
      defaultItem={NavMenuItems[0]}
      onChange={(item) => item?.path && router.push(item.path)}
    />
  );
};
