let cat     = require('cat-me');
let joke    = require('knock-knock-jokes');
var faker   = require('faker');


var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard(); // random contact ca

console.log(randomName);
console.log(randomEmail);
console.log(randomCard);
