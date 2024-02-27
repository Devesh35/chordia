import { SVGProps } from '../types';

export const CircleEmpty = (props: SVGProps) => {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} {...props}>
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
};
