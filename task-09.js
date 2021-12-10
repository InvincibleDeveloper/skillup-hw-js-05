const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};
console.info(user);

function setUserProperties(user) {
  let resultStr = ``;
  user.mood = "happy";
  user.hobby = "skydiving";
  user.premium = false;
  for (let property of Object.keys(user)) {
    resultStr += `
    ${property}: ${user[property]}
        `;
  }
  console.log(resultStr);
  return resultStr;
}

setUserProperties(user);
