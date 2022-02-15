const cassa = (arr, n) => {
  if (arr.length <= n) {
    return Math.max(arr);
  }
  if (arr.length === 0 || n === 0) {
    return 0;
  }
  let newArr = arr.slice(0, n);
  return newArr;
};

console.log(cassa([10, 2, 4, 6, 12, 7, 11, 32], 3));
