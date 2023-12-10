export const randomImageUrl = (height: number, width?: number) =>
  `https://source.unsplash.com/random/${width || height}x${height}`;

  
export const getRandomImagesArray =
  (arraySize: number) => (imageSize: number, sizeX?: number) =>
    Array(arraySize)
      .fill(0)
      .map((_, i) => randomImageUrl(imageSize + i, sizeX || imageSize));
