export const randomImageUrl = (
  height: number,
  width?: number,
  category?: string,
) => `https://picsum.photos/${width || height}/${height}`;

export const getRandomImagesArray =
  (arraySize: number) =>
  (imageSize: number, sizeX?: number, category?: string) =>
    Array(arraySize)
      .fill(0)
      .map((_, i) =>
        randomImageUrl(imageSize + i, sizeX || imageSize, category),
      );
