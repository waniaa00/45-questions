"use strict";
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
//  which prints the name of each magician in the array.
Object.defineProperty(exports, "__esModule", { value: true });
let Magicians = ["Shin Lim", "Chris", "Harry",];
function show_magicians(magician) {
    Magicians.forEach(magician => {
        console.log(magician);
    });
}
show_magicians(Magicians);
