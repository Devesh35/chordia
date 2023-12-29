import { Labeled, formStyles } from '@li/design/elements';
import { ProfileSectionItem } from '../profile.config';
import { grid } from '@li/config/design';
import { ProfileItemElement } from './ProfileItemElement';
import styles from './profile.module.css';
import clsx from 'clsx';

export const ProfileItem = ({
  isEdit,
  ...props
}: {
  isEdit: boolean;
} & ProfileSectionItem) => (
  <Labeled
    label={`${props.label}:`}
    inline
    className={clsx(
      grid[`col-4`],
      grid['col-t-4'],
      grid['col-m-6'],
      styles['item-label'],
    )}
  >
    {isEdit && !props.isNotEditable ? (
      <ProfileItemElement {...props} />
    ) : (
      <span className={formStyles['item-wrapper']}>{props.placeholder}</span>
    )}
  </Labeled>
);
