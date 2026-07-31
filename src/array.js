export default function analyzeArray(arr) {
  const length = arr.length;
  const average =
    arr.reduce((acc, curr) => {
      return acc + curr;
    }, 0) / length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return {
    average: average,
    min: min,
    max: max,
    length: length,
  };
}
