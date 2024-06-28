"use strict";
// Unchanged Magicians: Start with your work from Exercise 42.
//  Call the function make_great() with a copy of the array of magicians’ names. 
//  Because the original array will be unchanged, return the new array and store it in a separate array.
//   Call show_magicians() with each array to show that you have one array of the original names and one array
//    with the Great added to each magician’s name.
Object.defineProperty(exports, "__esModule", { value: true });
let magiciansArray = ['Merlin', 'Gandalf', 'Harry Potter'];
function make_great(magicians) {
    let greatMagicians = magicians.map(magician => magician + ' the Great');
    return greatMagicians;
}
function show_magicians(magicians) {
    magicians.forEach(magician => console.log(magician));
}
let greatMagiciansArray = make_great([...magiciansArray]);
console.log('Original Magicians:');
show_magicians(magiciansArray);
console.log('\nMagicians with "the Great":');
show_magicians(greatMagiciansArray);
