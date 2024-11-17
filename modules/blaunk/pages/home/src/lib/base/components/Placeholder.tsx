import { getRandomImagesArray } from '@md/blaunk/config';

const image = (height: number, width: number) => getRandomImagesArray(1)(height, width, 'abstract')[0];

export const Placeholder = ({ width, height }: { width?: number; height?: number }) => {
  return (
    <div
      style={{
        minWidth: `${width ?? 1920}px`,
        minHeight: `${height ?? 400}px`,
        backgroundImage: `url(${image(height || 400, width || 2000)})`,
      }}
    />
  );
};
