export const autoDistribute = (
  total: number,
  parts: number,
  decimalPrecision: number
): Array<number> => {
  const result = Number((total / parts).toFixed(decimalPrecision));
  const err = Number((total - (result * parts)).toFixed(decimalPrecision));
  if (err >= 0) {
    const array = new Array();
    const minimalVariation = Number(Math.pow(10, -decimalPrecision).toFixed(decimalPrecision));
    const partsWithMore = err / minimalVariation;
    for (let i = 0; i < parts; i++) {
      if (i < partsWithMore) {
        array.push(Number((result + minimalVariation).toFixed(decimalPrecision)));
      } else {
        array.push(result);
      }
    }
    return array;
  } else {
    const array = new Array();
    const minimalVariation = Number(Math.pow(10, -decimalPrecision).toFixed(decimalPrecision));
    const partsWithLess = Math.abs(err) / minimalVariation;
    for (let i = 0; i < parts; i++) {
      if (i < (parts - partsWithLess)) {
        array.push(result);
      } else {
        array.push(Number((result - minimalVariation).toFixed(decimalPrecision)));
      }
    }
    return array;
  }
};
