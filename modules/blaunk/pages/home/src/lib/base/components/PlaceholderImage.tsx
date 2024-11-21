import { getRandomImagesArray } from '@md/blaunk/config';

const image = (height: number, width: number) => getRandomImagesArray(1)(height, width, 'abstract')[0];

export const PlaceholderImage = ({ width, height }: { width?: number; height?: number }) => {
  return (
    <div
      style={{
        minWidth: `min(${width ?? 1920}px, 100vw)`,
        minHeight: `${height ?? 400}px`,
        backgroundImage: `url(${image(height || 400, width || 2000)})`,
      }}
    />
  );
};
