import { SVGProps } from '../types';

export const RightArrow = (props: SVGProps) => {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} stroke="#000000" {...props}>
      <g id="right_arrow_iconCarrier">
        <path
          d="M10 7L15 12L10 17"
          stroke="inherit"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
    </svg>
  );
};
