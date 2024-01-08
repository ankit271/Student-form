const numbers = [70,65,71,60,30];

// const result = numbers.find( (value,index,array) => value > 70);
//console.log(result);

// const points = [40, 100, 1, 5, 25, 10];

// points.sort( (a,b) => a-b );

// console.log(points);

// for each
//numbers.forEach( (value,index,array) => console.log(value));

// map 
//const result = numbers.map( (value) => value * 2);

// filter
//const result = numbers.filter( (value) => value > 60);

// const result = numbers.reduce( (total,value) => {   
//     return total+= value;
// })
// console.log(result);


// keys

const result = numbers.entries();

for (let item of result) {
    console.log(item);    
}
