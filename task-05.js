// Получить массив с числами от 1 до заданного числа
function getArray(n) {
  let resultArr = [];

  if (n <= 0) {
    for (let num = 1; num >= n; num--) {
      resultArr.push(num);
    }
  } else {
    for (let num = 1; num <= n; num++) {
      resultArr.push(num);
    }
  }

  return resultArr;
}

console.log(getArray(10));
console.debug(getArray(0));
console.info(getArray(-10));
