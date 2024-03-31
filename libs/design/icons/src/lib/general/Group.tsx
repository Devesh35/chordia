import { SVGProps } from '../types';

export const Group = (props: SVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      width={24}
      height={24}
      color="#000000"
      {...props}
    >
      <path d="M320 480h384a32 32 0 0 0 32-32V128a32 32 0 0 0-32-32H320a32 32 0 0 0-32 32v320a32 32 0 0 0 32 32z m32-320h320v256H352z" />
      <path d="M384 224h128v64h-128zM448 544H96a32 32 0 0 0-32 32v320a32 32 0 0 0 32 32h352a32 32 0 0 0 32-32V576a32 32 0 0 0-32-32z m-32 320H128v-256h288z" />
      <path d="M160 672h128v64H160zM928 544H576a32 32 0 0 0-32 32v320a32 32 0 0 0 32 32h352a32 32 0 0 0 32-32V576a32 32 0 0 0-32-32z m-32 320h-288v-256h288z" />
      <path d="M640 672h128v64h-128z" />
    </svg>
  );
};
