(function task13() {
  const products = [
    { name: "Радар", price: 1300, quantity: 4 },
    { name: "Сканер", price: 2700, quantity: 3 },
    { name: "Дроид", price: 400, quantity: 7 },
    { name: "Захват", price: 1200, quantity: 2 },
  ];

  const getAllPropValues = (arr, prop) => {
    let resultArr = [];

    arr.forEach((obj) => {
      resultArr.push(obj[prop]);
    });

    return resultArr;
  };

  console.log(getAllPropValues(products, "name"));
  console.log(getAllPropValues(products, "quantity"));
  console.info(getAllPropValues(products, "price"));
})();
