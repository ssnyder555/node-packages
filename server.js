let cat     = require('cat-me');
let joke    = require('knock-knock-jokes');
var faker   = require('faker');

console.log("===================");
console.log("Welcome to my shop");
console.log("====================");
for (let i = 0; i < 10; i++){
  console.log(faker.commerce.productName() + ' - $' + faker.commerce.price());
}
