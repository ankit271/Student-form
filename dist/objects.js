//'use strict'
const user = {
    firstName: 'Ankit',
    lastName: 'Mishra',
    // address:{
    //     city: 'Delhi',
    //     pin: '123456'
    // }
}

const clone = {};
for(let key in user){
   clone[key] = user[key];
}   
clone.firstName = 'Ankita';
console.log(user);
//user1.firstName = 'Ankita';

Object.assign(clone, user,{
    firstName: 'Ankita'
});

