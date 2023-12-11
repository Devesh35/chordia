export const shouldNotForwardProps = (...propNames: string[]) => ({
  shouldForwardProp: (name: string) => !propNames.includes(name),
});

export const shouldForwardAllProps = {
  shouldForwardProp: () => true,
};
