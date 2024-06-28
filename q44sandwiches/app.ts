//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
// The function should have one parameter that collects as many items as the function call provides,
// and it should print a summary of the sandwich that is being ordered. Call the function three times,
// using a different number of arguments each time.


function orderSandwich(...items: string[]): void {
    if (items.length === 0) {
        console.log('You ordered an empty sandwich. Please add some items.');
    } else {
        console.log('Sandwich Summary:');
        console.log('Bread with:');
        items.forEach(item => console.log(`. ${item}`));
        console.log('Enjoy your sandwich!\n');
    }
}

 
orderSandwich('Ham', 'Cheese', 'Lettuce');
orderSandwich('Turkey', 'Swiss');
orderSandwich();