"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let car = "supra";
let age = 18;
let numbers = [2, 4, 6, 8, 10];
// STRING TEST :
console.log("I car == 'supra' I predict true.");
console.log(car == 'supra'); // true
console.log("Is car != 'supra'? I predict false.");
console.log(car != 'supra'); // false 
//  LOWER CASE FUNCTION TEST :
console.log("Is car.toLowerCase() == 'supra' ? I predict true.");
console.log(car.toLowerCase() == 'supra'); //true
console.log("Is car.toLowerCase() == 'porche'? i predict false.");
console.log(car.toLowerCase() == 'porche'); //false
// NUMERICAL TEST :
// equality and inequility;
console.log("Is age == 18? I predict true.");
console.log(age == 18); // true
console.log("Is age == 19? I predict false.");
console.log(age == 19); // false
//greater than and less than;
console.log("I age > 15? I predict true");
console.log(age > 15); // true
console.log("Is age < 12? I predict false.");
console.log(age < 12); // false
//greater than or equal to and less than or equal to;
console.log("Is age >= 15? i predict true.");
console.log(age >= 15); //true
console.log("Is age <= 17? i predict false");
console.log(age <= 17); //false
// AND OR OPERATOR TEST:
//  with "and" operator;
console.log("I 10 < age < 25? I predict true.");
console.log(age < 25 && age > 10); //true
//with "or" orperator;
console.log("Is age> 90 or age < 2? I  predict false.");
console.log(age > 90 || age < 2); //false
// TEST WHETHER AN ITEM IS IN ARRAY OR NOT:
console.log("Is '2'? I predict true.");
console.log(2 in numbers); //true
console.log("Is '5' in numbers? I predict false");
console.log(5 in numbers);
