function filterRange(arr, a, b) {
  let newArr = arr.filter(item => (a <= item && item <= b));
  return newArr;
}

