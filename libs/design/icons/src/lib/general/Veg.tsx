import { SVGProps } from '../types';

export const Veg = (props: SVGProps) => {
  return (
    <svg
      color="green"
      viewBox="0 0 48 48"
      width={48}
      height={48}
      transform="rotate(180)"
      {...props}
    >
      <g id="veg">
        <circle cx="22" cy="22" r="10" fill="currentColor" />
        <rect
          x="2"
          y="2"
          width="40"
          height="40"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
      </g>
    </svg>
  );
};
