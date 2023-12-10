type AsProp<C extends React.ElementType> = {
  as?: C;
};
export type PolymorphicComponentProp<
  C extends React.ElementType,
  Props,
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof Props | 'as'>;

export type PolymorphicComponentPropWithRef<
  C extends React.ElementType,
  Props,
> = PolymorphicComponentProp<C, Props> & { ref?: PolymorphicRef<C> };

export type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>['ref'];
