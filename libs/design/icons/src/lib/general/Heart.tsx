import { SVGProps } from '../types';

export const Heart = (props: SVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M20.84 4.58a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.09a5.5 5.5 0 0 0-7.78 7.78l1.06 1.09L12 21l7.78-7.67 1.06-1.09a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
};
