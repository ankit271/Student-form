const user = {
    name: 'ABC',
    age : 30,
    address : {
        city: 'Bhadohi',
        pincode: 221401,
        state: 'Utter Pradesh'
    },
    getDetail: function(){
        return `Name : ${this.name} , Age : ${this.age}`;        
    }
}

console.log(user.getDetail());