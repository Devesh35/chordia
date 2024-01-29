export const randomImageUrl = (
  height: number,
  width?: number,
  category?: string,
) =>
  `https://source.unsplash.com/random/${width || height}x${height}${
    category ? `?${category}` : ''
  }`;

export const getRandomImagesArray =
  (arraySize: number) =>
  (imageSize: number, sizeX?: number, category?: string) =>
    Array(arraySize)
      .fill(0)
      .map((_, i) =>
        randomImageUrl(imageSize + i, sizeX || imageSize, category),
      );
