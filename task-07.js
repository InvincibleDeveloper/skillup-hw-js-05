function changeCollection(...arrs) {
  arrs.forEach((arr) => {
    arr.shift();
  });
  return arrs;
}

console.info(changeCollection([1, 2, 3], ["a", "b", "c"]));
