const countProps = (obj) => {
  return `Всего свойств: ${Object.keys(obj).length}`;
};

console.log(countProps({}));
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
