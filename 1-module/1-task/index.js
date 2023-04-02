function factorial(n) {
  let result = n;
  if (n === 0 || n === 1) {
    console.log(1);
  } else if (n < 0){
    console.log("Факториал может вычисляться только с натуральными положительными числами");
  } else {
    for (let i = 1; i < n; i++) {
      result = result * i;
    }
    console.log(result);
  }
}
