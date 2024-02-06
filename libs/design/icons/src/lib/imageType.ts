import { StaticImageData } from 'next/image';

export const getStaticImageSrc = (image: string | StaticImageData) =>
  (image as unknown as StaticImageData).src;
