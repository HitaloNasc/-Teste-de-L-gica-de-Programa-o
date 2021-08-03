export const getPrecision = (n: number): number => {
  let m = n.toString();
  if (m.match(/^[-+]?[1-9]+e[-]?[1-9][0-9]*$/)) {
    let arr = new Array();
    arr = m.split("e");
    const exponent = Math.abs(arr[1]);
    m = (+m).toFixed(exponent);
    const value = m;
    const dotPosition = value.indexOf('.');
    let precision;
    if (dotPosition === -1) {
      return precision = 0;
    } else {
      const decimal = value.substring(dotPosition + 1);
      const arrayDecimal = decimal.split('');
      return precision = arrayDecimal.length;
    }
  } else {
    const value = n.toString();
    const dotPosition = value.indexOf('.');
    let precision;
    if (dotPosition === -1) {
      return precision = 0;
    } else {
      const decimal = value.substring(dotPosition + 1);
      const arrayDecimal = decimal.split('');
      return precision = arrayDecimal.length;
    }
  }
};
