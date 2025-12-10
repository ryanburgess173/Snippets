const {generateRandomNumber, celciusToFahrenheit} = require('./utils');
const {getPosts} = require('./postController');

console.log(`Random number: ${generateRandomNumber()}`);

const celcius = 100;

console.log(`Celcius: ${celcius}C, Fahrenheit: ${celciusToFahrenheit(celcius)}F`)

console.log(getPosts());

export {}