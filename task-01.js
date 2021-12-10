function multiply(...digits) {
  if (digits.length === 0) {
    return 0;
  }
  let product = digits.reduce((x, y) => {
    return x * y;
  });

  return product;
}

console.info(multiply());
console.log(multiply(1, 2, 3, 7));
