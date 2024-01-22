'use client';

import clsx from 'clsx';
import type { FormSection as FS } from '@li/types/design';
import { grid } from '@li/config/design';
import formStyles from './form.module.css';
import { FormItem } from './FormItem';
import { ClassName, ReactChildren } from '@li/types/shared';
import { Accordion } from '../../lists';
import { withCondition } from '@li/design/enhancers';
import { FormSectionHeader, FormSectionTitle } from './FormSectionHeader';

type FormSectionBase = {
  expandable?: boolean;
} & Partial<ClassName>;

type FormSectionChildren = Partial<ReactChildren>;
type FormSectionItems = { items?: FS['items'] };

type FormSectionContent = FormSectionChildren | FormSectionItems;

type FormSectionProps = FormSectionBase & FormSectionTitle & FormSectionContent;

const Content = (props: FormSectionContent) => (
  <div className={clsx(formStyles['section-content-wrapper'])}>
    <div className={clsx(formStyles['section-content'], grid.grid)}>
      {'children' in props && props.children}
      {'items' in props &&
        props.items?.map((item) => <FormItem key={item.label} {...item} />)}
    </div>
  </div>
);

export const FormFormSection = ({
  title,
  className,
  expandable = false,
  ...props
}: FormSectionProps) => (
  <section className={clsx(formStyles.section, className)}>
    {withCondition(expandable)(
      <Accordion title={title} className={formStyles.accordion}>
        <Content {...props} />
      </Accordion>,
      <>
        <FormSectionHeader title={title} />
        <Content {...props} />
      </>,
    )}
  </section>
);

export const FormFormSectionList = ({ sections }: { sections: FS[] }) =>
  sections.map((section) =>
    section.items.length ? (
      <FormFormSection key={section.id} {...section} />
    ) : null,
  );
