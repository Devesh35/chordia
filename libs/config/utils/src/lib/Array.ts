export function transposeArray<T>(array: T[][]) {
  const newArray: T[][] = [];
  const arrayLength = array
    .map((a) => a.length)
    .reduce((a, c) => (a > c ? a : c), 0);

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < arrayLength; j++) {
      if (!newArray[j]) newArray[j] = [];
      newArray[j].push(array[i][j]);
    }
  }

  return newArray;
}
