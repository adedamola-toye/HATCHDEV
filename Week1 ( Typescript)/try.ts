class Person { 
    private name : string;
    private age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    public greet() : void{
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const toyibah =new Person("Damola", 18);
toyibah.greet();


class Employee{
    private readonly credentials: string = ' ';
    private name: string = ' ';
    private department: string = ' ';

    constructor(value: string){
        this.credentials = value;
    }

    public setName(name: string): void{
        if(this.credentials === ' ') return; //If  this.credentials is truthy(not an empty string) do nothing
        //and exit the method
        //ELSE do the following
        this.name = name;
        this.department = "Computer Science"

        //if (this.credentials) won't work as a good condition here coz  ' ' is seen as a 
        //truthy value so it will evaluate to true and method will be exited.But this is wrong since the credentials is empty
    }

    public getName(){
        return `Employee name: ${this.name}, Department: ${this.department}`
    }
}
const employee2 = new Employee('someValue'); // Create a new Student instance
employee2.setName('John Doe'); // Set the name
console.log(employee2.getName());


//INTERFACE
interface Shape{
    calculateArea(): number;
}
class Rectangle implements Shape{
    constructor(private width: number, private height: number){
        this.width = width;
        this.height = height;
    }

    public calculateArea(): number{
        return this.width * this.height;
    }
}
class Circle implements Shape{
    constructor(private radius: number){
        this.radius = radius;
    }
    public calculateArea(): number {
        return Math.PI * Math.pow(this.radius , 2);
    }
}

const rectangle = new Rectangle(3, 6);
const circle = new Circle(7);
console.log("The area of the rectangle is " + rectangle.calculateArea());
console.log("The area of the circle is " + circle.calculateArea());


//INHERITANCE
class Animal{
    protected name: string;
    constructor(name: string){
        this.name = name;
    }
    public makeSound(): void{
        console.log("Generic animal sound");
    }
}
class Cat extends Animal{
    constructor(name: string) {
        super(name); //calling the constructor of the super class
        //basically saying this.name = name;
    } 
    public makeSound(): void {
        console.log("Meow Meow");
    }
}
const myCat = new Cat("Sister Minnie");
myCat.makeSound();

