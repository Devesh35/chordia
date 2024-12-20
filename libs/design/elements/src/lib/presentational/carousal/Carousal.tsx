'use client';

import { useCyclicRange } from '@li/design/hooks';
import { ReactChildren } from '@li/types/shared';
import clsx from 'clsx';
import React, { forwardRef, useEffect } from 'react';
import { MoveControl, PaginationDots } from '../../decorators';
import { PolymorphicComponentProp, PolymorphicComponentPropWithRef } from '../../poly';
import styles from './carousal.module.css';

type Variant = 'light' | 'dark';
type ControlSize = 'small' | 'large';
type PaginationDirection = 'left' | 'bottom' | 'right';

export type CarousalProps = {
  autoInterval?: number;
  hideControls?: true;
  hidePagination?: true;
  enablePagination?: true;
  controlSize?: ControlSize;
  pagination?: PaginationDirection;
  className?: string;
  variant?: Variant;
} & ReactChildren;

export const Carousal = forwardRef<HTMLDivElement, PolymorphicComponentProp<'div', CarousalProps>>(
  (
    { children, autoInterval, hideControls, hidePagination, pagination = 'bottom', variant, className, controlSize },
    ref,
  ) => {
    const childArray = React.Children.toArray(children) as React.ReactElement[];
    const { active, prev, updateBy: update, isNearActive } = useCyclicRange(childArray.length);

    useEffect(() => {
      if (!autoInterval) return;
      const interval = setInterval(() => update(1), autoInterval);
      return () => clearInterval(interval);
    }, [autoInterval, update]);

    return (
      <div ref={ref} className={clsx(styles.wrapper, className)}>
        <div className={styles['item-wrapper']}>
          {childArray.map((child, i) => (
            <div
              className={clsx(styles.item, {
                [styles.active]: active === i,
                [styles.prev]: prev === i,
              })}
              key={child.key}
            >
              {isNearActive(i) ? child : null}
            </div>
          ))}
        </div>
        <div className={styles['control-wrapper']}>
          {hideControls
            ? null
            : pagination === 'bottom' && (
                <MoveControl size={controlSize} variant={variant} onChange={(dx) => update(dx)} />
              )}
          {hidePagination ? null : (
            <PaginationDots active={active} variant={variant} position={pagination} total={childArray.length} />
          )}
        </div>
      </div>
    );
  },
) as <C extends React.ElementType = 'div'>(
  props: PolymorphicComponentPropWithRef<C, CarousalProps>,
) => React.JSX.Element;
