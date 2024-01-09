
try {
    let name = 'Ankit';
    
    if(name == '') {
        throw 'Name can not be null';
    }
    console.log(name);
} 

catch (err) {
    console.log(err);    
}

// finally{
//     console.log('hiiiiiii')
// }