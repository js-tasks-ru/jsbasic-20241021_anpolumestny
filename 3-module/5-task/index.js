function getMinMax(str) {
  let result = {}
  let elements = str.split(' ');
  let numbers = elements.filter((element) => Number.isFinite(Number(element)));
  result.min = Math.min(...numbers);
  result.max = Math.max(...numbers);
  return result;
}
