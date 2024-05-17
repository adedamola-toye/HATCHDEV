class Human{
    hasHands : boolean;
    hasHead : boolean;
    hasLegs : boolean;
    hasBrain : boolean;
    canReason : boolean;
    name : string;
}


class Account{
    balance: number;
    name : string;
    currency : string;
}

class Student{
    matricNo : string;
    faculty : string;
    department : string;
}




class Art{
    colors : string[]
    //colors : Array<string> 

}

const monalisa = new Art();
monalisa.colors = ['red', 'blue', 'green'];
console.log(monalisa);

const vangogh = new Art();
vangogh.colors = ['pink', 'orange' , 'purple'];
console.log(vangogh);




class Vehicle{
    canTransport : boolean;

    move() {
        console.log("Vehicle is moving");
    }

}

class Car extends Vehicle{
    name : string;
    model : string;
    productionYear : Date;
    hasFourTyres : boolean;

    accelerate(){
        console.log("Car is accelerating");
    }

    move(){
        console.log("Car is moving")
    }
}

class Plane extends Vehicle{
    name : string;
    model : string;
    productionYear : Date;
    hasWings : boolean;

    fly(){
        console.log("Plane is flying");
    }

    move(){
        console.log("O n gbe mi fo");
    }
}

class Boat extends Vehicle{
    name : string;
    model : string;
    productionYear : Date;
    hasFourTyres : boolean;

    move(){
        console.log("Boat is floating");
    }
}


const v = new Vehicle();
//console.log(v);


const BMW = new Car();
BMW.name = "BMW";
BMW.model = "X6";
BMW.productionYear = new Date("2020-09-10");
BMW.hasFourTyres = true;
BMW.accelerate();
BMW.move();
console.log(BMW)

const airpeace = new Plane();
airpeace.name = "Airpeace";
airpeace.model = "Boeing 747"
airpeace.productionYear = new Date("2020-09-10");
airpeace.hasWings = true;
airpeace.move();
