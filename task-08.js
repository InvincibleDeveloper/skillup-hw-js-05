function funcGetUsers(users, property, value) {
  if (arguments.length === 3 && users && property && value) {
    let resultArr = users.filter(
      (user) => user.hasOwnProperty(property) && user[property] === value
    );
    return resultArr;
  } else {
    return "Не все аргументы переданы и/или они указаны некорректно";
  }
}

let users = [
  {
    name: "Diana",
    age: 19,
    gender: "female",
  },
  {
    name: "Jessica",
    age: 35,
    gender: "female",
  },
  {
    name: "Denis",
    age: 29,
    gender: "male",
  },
  {
    name: "Ivan",
    age: 20,
    gender: "male",
  },
  {
    name: "Paul",
    age: 22,
    gender: "male",
  },
  {
    name: "Lora",
    age: 11,
    gender: "female",
  },
  {
    name: "Frank",
    age: 32,
    gender: "male",
  },
  {
    name: "Bob",
    age: 28,
    gender: "male",
  },
  {
    name: "Monica",
    age: 47,
    gender: "female",
  },
];

console.log(funcGetUsers(users, "age", 11));
