class Car{
  
    /* brand: string;
    constructor(brandz: string){
        this.brand = brandz;
    }  - or*/
    constructor(public readonly brand: string){

    }

    public move(){

    }

}

class Korope extends Car{
    execute(){

    }
}

/* const k1 = new Korope()
k1.move */
const mustang = new Car("Mustang"); //with the this in the constructor, this particular instance  called mustang has a brand value of brand passed in when creating the instance
const ferrari = new Car("Ferrari")
const toyota = new Car("Toyota")
const dodge = new Car("Dodge")


console.log(mustang, ferrari, dodge, toyota); //Notice each instance has its own specific brand. that is the use of this

