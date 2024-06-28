"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guestList = ["Tehreem", "Asad", "Ahmed"];
let wontCome = "Asad";
let newGuest = "Bisha";
guestList[1] = newGuest;
// for (let i=0; i<guestList.length; i++){
//     console.log(`Dear ${guestList[i]} \n\nYou are invited for dinner tomorrow.\n\nThankyou`);
// };
guestList.unshift("Aiman"); //beginning of an array
// guestList.splice(guestList.length/2, 1,"Umaima"); //mid 
// guestList.push("Hamza"); //end
// console.log(`Mr ${wontCome}, wont make it to tomorrow's dinner`);
// console.log("We have organized a bigger dinner table and invited more guests");
console.log("Unfortunately we couldn't arrange a bigger table, we only have space for 2 people ");
while (guestList.length > 2) {
    let removeGuest = guestList.pop();
    console.log(`we are extremely sorry ${removeGuest} you are not invited for dinner tomorrow `);
}
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]} \n\nYou are invited for dinner tomorrow.\n\nThankyou`);
}
;
guestList.splice(0, 2);
console.log(guestList);
