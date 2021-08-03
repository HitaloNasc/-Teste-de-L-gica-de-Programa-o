export const roundWithPrecision = (
  value: number,
  decimalPrecision: number
): number => {
  const result = Number(value.toFixed(decimalPrecision));
  return result;
};
