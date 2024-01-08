import clsx from 'clsx';
import type { FormSection as FS } from '@li/types/design';
import { grid } from '@li/config/design';
import formStyles from './form.module.css';
import { FormItem } from './FormItem';
import { ClassName, ReactChildren } from '@li/types/shared';
import { Accordion } from '../../lists';
import { withCondition } from '@li/design/enhancers';

type FormSectionBase = {
  expandable?: boolean;
} & Partial<ClassName>;

type FormSectionChildren = Partial<ReactChildren>;
type FormSectionItems = { items?: FS['items'] };

type FormSectionTitle = { title: string };
type FormSectionContent = { isEdit?: boolean } & (
  | FormSectionChildren
  | FormSectionItems
);

type FormSectionProps = FormSectionBase & FormSectionTitle & FormSectionContent;

const Header = ({ title }: FormSectionTitle) => (
  <header className={formStyles['section-header']}>{title}</header>
);

const Content = ({ isEdit = false, ...props }: FormSectionContent) => (
  <div className={clsx(formStyles['section-content'], grid.grid)}>
    {'children' in props && props.children}
    {'items' in props &&
      props.items?.map((item) => (
        <FormItem key={item.label} isEdit={isEdit} {...item} />
      ))}
  </div>
);

export const FormSection = ({
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
        <Header title={title} />
        <Content {...props} />
      </>,
    )}
  </section>
);
