import { useIntersection } from "@li/design/hooks";
import React from "react";

type WrapperProps = {
  children: React.ReactNode;
  options?: IntersectionObserverInit;
  onIntersection: IntersectionObserverCallback;
};

export const IntersectionWrapper = ({
  options,
  children,
  onIntersection,
}: WrapperProps) => {
  const { ref } = useIntersection(onIntersection, options);

  const childArray = React.Children.toArray(children) as React.ReactElement[];
  if (childArray.length !== 1)
    throw new Error('IntersectionWrapper works with one child only');
  const child = childArray[0];
  if (React.isValidElement(child))
    return React.cloneElement(child as React.ReactElement, { ref });

  return child;
};
