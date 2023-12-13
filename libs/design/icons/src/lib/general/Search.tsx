import { SVGProps } from '../types';

export const Search = (props: SVGProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width={24}
      height={24}
      stroke="#000000"
      fill="transparent"
      {...props}
    >
      <g id="search_iconCarrier">
        <path
          d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
          stroke="inherit"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
    </svg>
  );
};
