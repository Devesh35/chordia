export const Placeholder = ({
  width,
  height,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <div
      style={{
        width: width ? width + 'px' : '100%',
        height: height ? height + 'px' : '100%',
        backgroundColor: 'var(--gray300)',
      }}
    />
  );
};
