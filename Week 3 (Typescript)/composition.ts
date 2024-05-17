class Engine{
    start(){
        console.log("Engine started");
    }
}

class Wheels{
    move(){
        console.log("Wheels rolling");
    }
}

class Car{
    private engine: Engine;
    private wheels: Wheels;

    //Instantiating Engine and Wheels class externally
    /* constructor(engine: Engine, wheels: Wheels){
        this.engine = engine;
        this.wheels = wheels;
    } */

    //INSTANTIATING INTERNALLY
    constructor(){
        this.engine = new Engine();
        this.wheels = new Wheels();
    }

    start(){
        this.engine.start();
        this.wheels.move();
        console.log("Car started");
    }
}

/* const engine1 = new Engine();
const wheels1 = new Wheels();
const myCar = new Car(engine1, wheels1); */
//Instead of instantiating the Engine and Wheels Class outside, you can do it internally

const myCar = new Car();
myCar.start();