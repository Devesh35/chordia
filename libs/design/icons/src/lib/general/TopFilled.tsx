import { SVGProps } from '../types';

export const TopFilled = (props: SVGProps) => {
  return (
    <svg
      fill="#000000"
      viewBox="0 0 24 24"
      width={16}
      height={16}
      transform="rotate(180)"
      {...props}
    >
      <g id="top_filled_iconCarrier">
        <path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"></path>
      </g>
    </svg>
  );
};
