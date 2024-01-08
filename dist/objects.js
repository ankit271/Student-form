//'use strict'
const user = {
    firstName: 'Ankit',
    lastName: 'Mishra',
    address:{
        city: 'Delhi',
        pin: '123456'
    },
    phone: '828233634'
}
const {firstName, lastName, ...add} = user;  // destructuring

console.log(firstName);
console.log(lastName);
console.log(add);
// const clone = {};
// for(let key in user){
//    clone[key] = user[key];
// }   
// clone.firstName = 'Ankita';
// console.log(user);
// //user1.firstName = 'Ankita';

// Object.assign(clone, user,{
//     firstName: 'Ankita'
// });

