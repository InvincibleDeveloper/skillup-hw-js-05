//  Задание 1

const logItems = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
};

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

//  Задание 2

const calculateEngravingPrice = (message, pricePerWord) => {
  let totalPrice = 0;

  message.split(/\W+/).forEach(() => {
    totalPrice += pricePerWord;

    return totalPrice;
  });

  return totalPrice;
};

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
);

//  Задание 3

const findLongestWord = (string) => {
  return string.split(/\W+/).reduce((longest, word) => {
    return word.length > longest.length ? word : longest;
  }, "");
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// Задание 4

const formatString = function (string) {
  if (string.length <= 40) return string;

  return `${string.slice(0, 40)}...`;
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));

//  Задание 5

const checkForSpam = function (message) {
  return /\bspam|sale\b/i.test(message);
};

console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("[SPAM] How to earn fast money?"));

//  Задание 6

let input;
const numbers = [];
let total = 0;

while (input !== null) {
  input = +prompt("Введите число");

  if (isNaN(input)) {
    alert("Было введено не число, попробуйте еще раз");
    continue;
  }

  numbers.push(input);
}

if (numbers.length) {
  for (let digit of numbers) {
    total += digit * 1;
  }
}

console.log(`Общая сумма чисел равна ${total}`);

//  Задание 7

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = (login) => {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  } else {
    return false;
  }
};

const isLoginUnique = (allLogins, login) => {
  return !allLogins.includes(login);
};

const addLogin = (allLogins, login) => {
  if (!isLoginValid(login)) {
    return "Ошибка! Логин должен быть от 4 до 16 символов";
  } else {
    if (!isLoginUnique(allLogins, login)) {
      return "Такой логин уже используется!";
    } else {
      return "Логин успешно добавлен!";
    }
  }
};

console.log(addLogin(logins, "Ajax"));
console.log(addLogin(logins, "robotGoogles"));
console.log(addLogin(logins, "Zod"));
console.log(addLogin(logins, "jqueryisextremelyfast"));
