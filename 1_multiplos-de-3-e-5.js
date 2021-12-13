function multiplesOf3and5(number) {
  var sumNumbers = 0;
  for (let num = 0; num < number; num++) {
    if (num % 5 == 0 || num % 3 == 0) {
      sumNumbers = num + sumNumbers;
    }
  }
  return sumNumbers;
}

console.log(multiplesOf3and5(10));