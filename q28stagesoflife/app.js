"use strict";
// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
Object.defineProperty(exports, "__esModule", { value: true });
let age = 89;
if (age < 2) {
    console.log("The person is a baby");
}
else if (age >= 2 && age < 4) {
    console.log("The person is toddler");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid");
}
else if (age >= 13 && age < 20) {
    console.log("The person is teenager");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult");
}
else if (age >= 65) {
    console.log("The person is an elder");
}
