import { SVGProps } from '../types';

export const Brand = (props: SVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      width={24}
      height={24}
      color="#000000"
      {...props}
    >
      <path d="M480 64C215.04 64 0 279.04 0 544 0 808.96 215.04 1024 480 1024c264.96 0 480-215.04 480-480C960 279.04 744.96 64 480 64zM480 960C250.24 960 64 773.76 64 544 64 314.24 250.24 128 480 128 709.76 128 896 314.24 896 544 896 773.76 709.76 960 480 960zM704 416C704 327.68 632.32 256 544 256c-64.64 0-256 0-256 0C270.08 256 256 270.08 256 288l0 512C256 817.92 270.08 832 288 832 305.92 832 320 817.92 320 800L320 576c0 0 97.28 0 181.76 0 2.56 5.12 5.76 10.88 8.32 16l128 221.44c8.96 15.36 28.16 20.48 43.52 11.52 15.36-8.96 20.48-28.16 11.52-43.52L573.44 572.8C647.68 559.36 704 494.08 704 416zM544 512C490.88 512 320 512 320 512L320 320l224 0C597.12 320 640 362.88 640 416 640 469.12 597.12 512 544 512z" />
    </svg>
  );
};