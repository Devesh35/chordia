import { grid } from '@li/config/design';
import { ReactChildren } from '@li/types/shared';
import clsx from 'clsx';
import formStyles from './form.module.css';

// todo optional title
export const FormSectionWrapper = ({ children }: ReactChildren) => {
  return (
    <section className={clsx(formStyles.section)}>
      <div className={clsx(formStyles['section-content-wrapper'])}>
        <div
          className={clsx(
            formStyles['section-content'],
            grid.grid,
            grid['grid-t-8'],
          )}
        >
          {children}
        </div>
      </div>
    </section>
  );
};
