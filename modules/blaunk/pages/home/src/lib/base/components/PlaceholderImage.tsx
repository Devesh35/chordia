import { useMedia } from '@li/design/hooks';
import { getRandomImagesArray } from '@md/blaunk/config';

const image = (height: number, width: number) => getRandomImagesArray(1)(height, width, 'abstract')[0];

export const PlaceholderImage = ({ width, height }: { width?: number; height?: number }) => {
  const isMobile = useMedia();
  return (
    <div
      style={{
        minWidth: `min(${width ?? 1920}px, calc(100vw - 16px))`,
        minHeight: `${(height ?? 400) / (isMobile ? 2 : 1)}px`,
        backgroundImage: `url(${image(height || 400, width || 2000)})`,
      }}
    />
  );
};
