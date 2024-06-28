"use strict";
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. 
// The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
Object.defineProperty(exports, "__esModule", { value: true });
let shirtSize = ["small", " medium", "large"];
let shirt1 = "this shirt is for casual wear.";
let shirt2 = "this shirt is for formal wear.";
let shirt3 = "this shirt is for party wear.";
function make_tshirt() {
    let simpleFunction = `This is a ${shirtSize[1]}  shirt, and ${shirt3} `;
    console.log(simpleFunction);
    return simpleFunction;
}
let response = make_tshirt();
console.log(response);
