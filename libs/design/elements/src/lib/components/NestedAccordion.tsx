import React, { useState } from 'react';
import { Accordion, AccordionProps } from './Accordion';

type Props = {
  title: string;
  children: React.ReactNode;
};

export const NestedAccordion = ({ title, children }: Props) => {
  const [parentHeight, setParentHeight] = useState(0);
  // Assume they are accordion
  // they can be other things but doesn't matter
  // only updateParentHeight prop is added if not present
  const childArray = React.Children.toArray(
    children,
  ) as React.ReactElement<AccordionProps>[];
  const updatedArray = childArray.map((c) => ({
    ...c,
    props: {
      ...c.props,
      updateParentHeight: c.props.updateParentHeight || setParentHeight,
    },
  }));

  return (
    <Accordion title={title} childHeight={parentHeight}>
      {updatedArray}
    </Accordion>
  );
};
