class Car {
    constructor(brand) {
      this.carname = brand;
    }

    present() {
      return 'I have a ' + this.carname;
    }
}

class Model extends Car {
   
    static count = 0;
    constructor(brand, mod) {
        super(brand);
        this.model = mod;        
    }

    show() {
        return this.present() + ', it is a ' + this.model;
    }

   static info(){
        return ++this.count;    
    }
}


let myCar = new Model("Ford", "Mustang");

console.log(Model.count);
console.log(Model.info());
console.log(Model.info());
console.log(Model.info());