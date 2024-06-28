let personName: string = "wania akram";
//lowercase
console.log(`lowercase`, personName.toLowerCase());
//uppercase
console.log(`uppercase`, personName.toLocaleUpperCase());
//titlecase
console.log(`titlecase`, personName.replace(/\b\w/g, (char )=> char.toUpperCase()));