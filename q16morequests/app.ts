let guestList : string [] = ["Tehreem","Asad","Ahmed"];

let wontCome : string = "Asad";
let newGuest : string = "Bisha";
guestList[1] = newGuest; 
for (let i=0; i<guestList.length; i++){
    console.log(`Dear ${guestList[i]} \n\nYou are invited for dinner tomorrow.\n\nThankyou`);
};

guestList.unshift("Aiman");  //beginning of an array
guestList.splice(guestList.length/2, 1,"Umaima"); //mid 
guestList.push("Hamza"); //end
console.log(`Mr ${wontCome}, wont make it to tomorrow's dinner`);

console.log("We have organized a bigger dinner table and invited more guests");



