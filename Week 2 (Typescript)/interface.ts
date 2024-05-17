interface Nigerian{
    //japa(): void;
    japa():string;
    
}

//Every class implementing Nigerian interface must have japa method defined
class Toyibah implements Nigerian{
    japa(){
        return "By studying";
    }
}

class Damola implements Nigerian{
    japa(){
        return "By tech skill";
    }
}

const damola = new Damola();
console.log(damola.japa());
//Why is this working when the japa method in the interface is set to return void but our classes's method return string????
//interface at compile time is removed since there's no interface in js

