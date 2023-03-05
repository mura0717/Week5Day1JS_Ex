const cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

const selectedCarsByYear = cars.filter(cars => cars.year > 1999);
const selectedCarsByBrand = cars.filter(cars => cars.make === "Volvo");
const selectedCarsByPrice = cars.filter(cars => cars.price < 5000);

function generateInsertStatement(arrayName, tableName){
  const keys = Object.keys(arrayName[0]);
  const values = arrayName.map(obj => '(${keys.map(key => obj[key]).join(",")})');
  const sql = `INSERT INTO ${tableName} (${keys.join(",")}) VALUES ${values.join(",")}`;
  return sql;
}

console.log(generateInsertStatement(cars, "cars"));

