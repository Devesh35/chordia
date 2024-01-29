import { SVGProps } from '../types';

export const Veg = (props: SVGProps) => {
  return (
    <svg
      fill="green"
      viewBox="0 0 24 24"
      width={16}
      height={16}
      transform="rotate(180)"
      {...props}
    >
      <g id="veg">
        <circle cx="12" cy="12" r="10" />
      </g>
    </svg>
  );
};
