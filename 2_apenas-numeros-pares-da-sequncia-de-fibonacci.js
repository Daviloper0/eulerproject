function fiboEvenSum(n) {
  const fiboSeq = [1, 1];
  let fiboSum = 0;
  function fiboNextNum(array) {
    if (array[array.length - 1] <= n) {
      fiboSeq.push(array[array.length - 1] + array[array.length - 2]);
    }
  }
  for (let index = 0; fiboSeq[index] <= n; index++) {
    if (fiboSeq[index]% 2 == 0) {
      fiboSum += fiboSeq[index];
    }
    fiboNextNum(fiboSeq);
  }
  return fiboSum;
}
console.log(fiboEvenSum(1000));