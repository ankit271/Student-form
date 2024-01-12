function createUserName(username){
    this.username = username;
    console.log('hii');
}

function createUser(username, password,email){
    createUserName.call(this,username);
    this.password = password;
    this.email = email;
}

let user = new createUser("admin","admin@123","abc@gmail.com");
console.log(user);