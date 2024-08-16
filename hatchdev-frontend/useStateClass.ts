//import { useState } from "react";


//You cant  call arrow function before it is declared same reason why u cant call a var before it is declared. But u can call ur normal function before it is declared

//const [myState, setName] = useState(0);
const useState = <T>(initialState?:  T ) => {
    //let state = undefined;  //same as let state; not assigning any val
    let state  = initialState;
    function setState(newState: T): void{
        state = newState;
    }
    return [state, setState] as [T | undefined, (newState: T) => void]
}

const [state, setState] = useState(100);
console.log(state);

setState(200)