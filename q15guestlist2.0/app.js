"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guestList = ["Tehreem", "Asad", "Ahmed"];
let wontCome = "Asad";
let newGuest = "Bisha";
guestList[1] = newGuest;
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]} \n\nYou are invited for dinner tomorrow.\n\nThankyou`);
}
;
console.log(`Mr ${wontCome}, wont make it to tomorrow's dinner`);
