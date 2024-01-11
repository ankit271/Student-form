// const promise = new Promise(function(resolve, reject){

//     setTimeout(function(){
//         console.log('hiiii');
//         resolve()
//     },1000)
// })

// promise.then(function(){
//     console.log('consumed');
// })
// ------------------------------------
// const promise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: 'ankit',email: 'abc@gmail.com'});
//     },1000)    
// })

// promise.then(function(res){
//     console.log(res);
// })
// ------------------------
// const promise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({username: 'ankit',email: 'abc@gmail.com'});
//         }
//         else{
//             reject('Error: Something went wrong');
//         }
//     },1000)    
// })

// promise.then((user)=> {
//     console.log(user);
//     return user.username;
// }).then((username) =>{
//     console.log(username);
// }).catch((err) => console.log(err)).finally(() => console.log('resolve or rejected'))

// ----------------------

const promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: 'ankit',email: 'abc@gmail.com'});
        }
        else{
            reject('Error: Something went wrong');
        }
    },1000)    
})


async function getUser(){
   try {
    const response = await promise;
    console.log(response)
   } catch (error) {
     console.log(error);
   };
}

getUser()