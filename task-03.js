function getCodeStringFromText(str) {
  let fullCharCode = "";

  for (let i = 0; i < str.length; i++) {
    fullCharCode += `${str.charCodeAt(i)} `;
  }

  return fullCharCode;
}

console.log(getCodeStringFromText("hello")); // “104 101 108 108 111”
