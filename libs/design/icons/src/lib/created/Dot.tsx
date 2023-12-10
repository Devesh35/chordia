import { SVGProps } from '../types';

export const Dot = (props: SVGProps) => {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" {...props}>
      <circle cx="8" cy="8" r="8" fill="inherit" stroke="inherit" />
    </svg>
  );
};
