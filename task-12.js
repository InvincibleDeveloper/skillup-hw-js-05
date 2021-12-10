const countTotalSalary = (employees) => {
  let totalSalary = 0;
  let fee;

  for (let worker in employees) {
    fee = employees[worker];
    totalSalary += fee;
  }

  return totalSalary;
};

console.log(countTotalSalary({}));

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
);
