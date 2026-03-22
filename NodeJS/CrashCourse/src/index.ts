import { generateRandomNumber, celciusToFahrenheit } from "./utils";
import { getPosts, getPostsLength } from "./postController";

console.log(`Random number: ${generateRandomNumber()}`);

const celcius: number = 100;

console.log(
  `Celcius: ${celcius}C, Fahrenheit: ${celciusToFahrenheit(celcius)}F`
);

console.log(getPosts());

console.log(`Posts length: ${getPostsLength()}`);

export {};
