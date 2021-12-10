const findBestEmployee = (employees) => {
  let bestEmployee = "";
  let maxCompletedTasks = 0;
  let taskNum;

  for (let employee in employees) {
    taskNum = employees[employee];
    if (taskNum > maxCompletedTasks) {
      maxCompletedTasks = taskNum;
      bestEmployee = employee;
    }
  }

  return bestEmployee;
};

console.log(
  findBestEmployee({
    lorence: 99,
    lux: 147,
    chelsy: 38,
  })
);
