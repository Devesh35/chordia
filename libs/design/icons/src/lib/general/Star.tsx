import { SVGProps } from '../types';

export const Star = (props: SVGProps) => {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} fill="#000000" {...props}>
      <g id="star_iconCarrier">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
      </g>
    </svg>
  );
};
