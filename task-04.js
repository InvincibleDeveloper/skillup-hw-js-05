function numberGuess(userNum) {
  let currentNum = Math.floor(Math.random() * 10) + 1;

  if (userNum > 10 || userNum < 1) {
    return "Число должно быть в диапазоне 1-10!";
  }

  if (currentNum === userNum) {
    return "Вы выиграли!";
  } else {
    return `Вы не угадали ваше число ${userNum} а выпало число ${currentNum}`;
  }
}

console.log(numberGuess(1));
