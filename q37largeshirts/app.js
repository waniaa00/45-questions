"use strict";
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
//  Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
Object.defineProperty(exports, "__esModule", { value: true });
let size = ["medium", "large"];
let defaultMessage = "I love typescript";
let mediumShirt = (`Size of shirt is : ${size[0]}, ${defaultMessage}`);
let largeShirt = (`Size of shirt is : ${size[1]}, ${defaultMessage}`);
let smallShirt = ("Size of shirt is : small and i like horses");
let extraLargeShirt = ("Size of shirt is : extra large and i like elegant stuff");
function make_tshirt() {
    let simpleFunction = (extraLargeShirt);
    console.log(simpleFunction);
    return simpleFunction;
}
let response = make_tshirt();
console.log(response);
