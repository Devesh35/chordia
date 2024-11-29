'use client';

import { useCyclicRange, useMedia } from '@li/design/hooks';
import { ReactChildren } from '@li/types/shared';
import clsx from 'clsx';
import React, { forwardRef, useEffect } from 'react';
import { MoveControl, PaginationDots } from '../../decorators';
import { PolymorphicComponentProp, PolymorphicComponentPropWithRef } from '../../poly';
import styles from './carousal-center.module.css';

type Variant = 'light' | 'dark';
type ControlSize = 'small' | 'large';
type PaginationDirection = 'left' | 'bottom' | 'right';

export type CarousalCenterProps = {
  autoInterval?: number;
  hideControls?: true;
  hidePagination?: true;
  enablePagination?: true;
  controlSize?: ControlSize;
  pagination?: PaginationDirection;
  className?: string;
  variant?: Variant;
} & ReactChildren;

export const CarousalCenter = forwardRef<HTMLDivElement, PolymorphicComponentProp<'div', CarousalCenterProps>>(
  (
    { children, autoInterval, hideControls, hidePagination, pagination = 'bottom', variant, className, controlSize },
    ref,
  ) => {
    const isMobile = useMedia();

    const childArray = React.Children.toArray(children) as React.ReactElement[];
    const { active, updateBy, isNearActive, left, right } = useCyclicRange(childArray.length);

    useEffect(() => {
      if (!autoInterval) return;
      const interval = setInterval(() => updateBy(1), autoInterval);
      return () => clearInterval(interval);
    }, [autoInterval, updateBy]);

    return (
      <div ref={ref} className={clsx(styles.wrapper, className)}>
        <div className={styles['item-wrapper']}>
          {childArray.map((child, i) => (
            <div
              className={clsx(
                styles.item,
                isMobile
                  ? {}
                  : {
                      [styles.right]: right === i,
                      [styles.left]: left === i,
                    },
                { [styles.active]: active === i },
              )}
              key={child.key}
            >
              {isNearActive(i, 2) ? child : null}
            </div>
          ))}
        </div>
        <div className={styles['control-wrapper']}>
          {hideControls
            ? null
            : pagination === 'bottom' && (
                <MoveControl size={controlSize} variant={variant} onChange={(dx) => updateBy(dx)} />
              )}
          {hidePagination ? null : (
            <PaginationDots active={active} variant={variant} position={pagination} total={childArray.length} />
          )}
        </div>
      </div>
    );
  },
) as <C extends React.ElementType = 'div'>(
  props: PolymorphicComponentPropWithRef<C, CarousalCenterProps>,
) => React.JSX.Element;
