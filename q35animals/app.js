"use strict";
// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list,
//  and then use a for loop to print out the name of each animal.
//   • Modify your program to print a statement about each animal, such as A dog would make a great pet.
//    • Add a line at the end of your program stating what these animals have in common. 
//    You could print a sentence such as Any of these animals would make a great pet!
Object.defineProperty(exports, "__esModule", { value: true });
let petAnimal = ["Horse", "Cat", "Dog"];
console.log("Animal names: \n ");
for (let i = 0; i < petAnimal.length; i++) {
    console.log(`${petAnimal[i]}`);
}
console.log("Statements: \n ");
for (let i = 0; i < petAnimal.length; i++) {
    console.log(`\n A ${petAnimal[i].toLowerCase()} would make a great pet.`);
}
console.log("\n Any of these animals would make a great pet. ");
