function factorial(n) {
  let result = 1;
  if (n < 0) {
    return "Факториал может вычисляться только с натуральными положительными числами";
  } else {
    for (let i = n; i > 1; i--) {
      result = result * i;
    }
    return result;
  }
}
