const { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } = require('constants');
'use strict';
const fs = require('fs');
let rawData = fs.readFileSync('data.json');
let json = JSON.parse(rawData);
let totalValue = 0.0;

for(let i=0; i<json.items.length; i++){
  console.log(json.items[i].name + "\t" + json.items[i].price + "\tQuantity: " + json.items[i].inStock);
  totalValue += json.items[i].price * json.items[i].inStock;
}
console.log("=================================\nInventory Value: $"+totalValue);