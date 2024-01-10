// function outer(){
//     let name = 'Ankit'

//     function inner(){
//         console.log('inner: ', name);
//     }

//     inner();
// }
// outer();
// console.log('outer', name);

function outer(){
    const name = 'Ankit';

    function displayName(){
        console.log(name);
    }
    return displayName;    
}

const myFunc = outer();
//myFunc();