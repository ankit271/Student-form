// Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

for (let iterator of fruits) {
    console.log(iterator);
}
// fruits.forEach((value, key) => {
//     console.log(`${key} = ${value}`);
// })