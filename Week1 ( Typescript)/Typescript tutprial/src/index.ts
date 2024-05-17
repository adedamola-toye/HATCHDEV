let sales : number = 123_456_789;
let course : string = "Typescript";
let is_published : boolean = true;
let cash = 12567;
/* Without specifying the data type, ts can infer the data type based on the value of the variable 
If you don't specify the data type you have any */
let level; //But avoid using the any type here it goes against the whole point of ts where the data type has to be known before it is run



/*ARRAYS */
let numbers: number[] = [1, 2, 3];
//same as without the type anotation
//let list = []; //any type so the array can have different types



/*TUPLES */
let user : [number, string] = [1, 'Toyibah']; //exactly 2 elements
//Tuples are useful for 2 values only, when we have key value pairs




/*ENUMS -  to represent a list of related constants */
//Normal constants
const small = 1;
const medium = 2;
const large = 3;

//With enums
const enum Size{Small = 1 , Medium, Large}; //by default the first is 0 , second is 1 and so on but we can explicitly set the values
//Since the first is 1, the second(medium) becomes 2 and the third(large) becomes three and so on.
//It all depends on the value of the first one and the next ones increase
//If you want to set string values, then you have to explicitly set it for each member
enum StringSize{small = "s", medium = "m",  large = "l"}; 

//Declaring a variable of type Size 
let mySize: Size = Size.Medium;
console.log(mySize);

//Using the const keyword with enum, the compiler will generate a more optimized js code



/* FUNCTIONS */
function calculateTax(income : number , taxYear = 2022) : number {
    if (taxYear< 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10_000, 2022)
//If you pass more or fewer arguments to the function you will get an error unlike in js where doing something like calculateTax(10_000, 2022, 3, 6) is valid
//We can make a parameter optional by adding a ?:
//function calcTax(taxYear? : number):number{......}

/* function printTax(income : number) :  void{

} */

//function funcName(parameter : parameterDataType) : returnType{}



/*OBJECTS */
let employee : {
    readonly id : number, //can't modify this
    name : string,
    retire : (date : Date) => void  //Method of object syntax : methodName : (param : paramType) => returnType
} = {id : 1,
    name : 'Toyibah',
    retire : (date : Date) => {
        console.log(date);
    }
}; 

//You can either make the name property optional or when initializing, set it to an empty string. then you can do employee.name = 'Toyibah' outside. But logically, a name isn't optional and its best to initialize the name when initializing the object itself

//let employee : {id, 1};
//employee.name = 'Toyibah'; //Valid in js but not in ts


//TYPE ALIAS
//defining the shape of our employee object
type Employee = {
    readonly id : number, //can't modify this
    name : string,
    retire : (date : Date) => void  
}//by defining type alias we can create types fro it and use it in multiple places

let employee1 : Employee  = {id : 1,
    name : 'Toyibah',
    retire : (date : Date) => {
        console.log(date);
    }
}; 

//UNION TYPES
function kgToPounds(weight: number | string){
    //Narrowing
    if(typeof weight === 'number'){
        return weight * 2.2;
    }
    else{
        return parseInt(weight) * 2.2;
    }
}
kgToPounds(10);
kgToPounds('10kg');


//INTERSECTION TYPES
type Draggable = {
    drag : () => void
}

type Resizable = {
    resize : () => void
}

type UIWidget = Draggable & Resizable

let textBox : UIWidget = { //must implement all members of draggable and resizable type object
    drag : () => {},
    resize : () => {}

}

/*LITERAL TYPES*/ //- limit values we assign to a variable
let quantity : 50 ; //can only be set to 50 only

type Quantity = 50 | 100;
let quantities : Quantity = 100;

type Metric = 'cm' | 'inch'
let metric : Metric = 'cm';


//NULLABLE TYPES
function greet(name : string | null | undefined){
    if(name){
        console.log(name.toUpperCase());
    }
    else{
        console.log('Hola!')
    }
}
greet(null);
greet(undefined);
//greet(null) - in JS this won't give error but will make our program crash
//But in TS it will give error


//OPTIONAL CHAINING
type Customer = {
    birthday? : Date
}

function getCustomer(id : number) : Customer | null | undefined {
    return id === 0? null : {birthday: new Date()}
}

let customer = getCustomer(1);
/* if(customer !== null && customer !== undefined){
    console.log(customer.birthday);
} */

//OR use Optional Property Access Operator (?.)
console.log(customer?.birthday?.getFullYear); 
// executed only if we have a customer that is not null or undefined and that customer has a birthday
//otherwise the result will be undefined

//Optional element access operator
//Optional call operator
let log: any = null;
//log('a'); //program will crash 
log?.('a'); //will work only if log is referencing an actual function else it will return undefined




