function getMinMax(str) {
  let arr = str.split(" ");
  let newArr = arr.filter(item => +item);
  let result = {
    min: Math.min.apply(null, newArr),
    max: Math.max.apply(null, newArr)
  }
  return result;
}
