// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
//  which prints the name of each magician in the array.

let Magicians:string[]=["Shin Lim","Chris","Harry",]

function show_magicians(magician:string[]){
    Magicians.forEach(magician => {
        console.log(magician);
        
    });
}
show_magicians(Magicians);
   
  