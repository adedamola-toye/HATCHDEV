interface IStack<T>{
    push(item: T) : void;
    pop(): T | undefined;
    peek(): T | undefined;
    size(): number;
}

export class StackFromArray<T> implements IStack<T>{
    private storage: T[] = [];
    constructor(private capacity: number = Infinity){}

    push(item: T):void{
        if(this.size() === this.capacity){
            throw Error("Stack has reached max capacity, you cannot add more items");
        }
        this.storage.push(item);
    }

    //Remove and return topmost element
    pop(): T | undefined{
        return this.storage.pop();
    }

    //Return topmost element without removing it
    peek(): T | undefined{
        return this.storage[this.size() - 1]
    }

    size(): number{
        return this.storage.length;
    }

    isEmpty(): boolean{
        return this.size() === 0;
    }

    isFull():boolean{
        return this.size() === this.capacity;
    }
}

const myStack1 = new StackFromArray<string>(5);
myStack1.push("A");
myStack1.push("B");
myStack1.push("C");
myStack1.push("D");
myStack1.push("E");

console.log(myStack1)
console.log("Size of the stack is", myStack1.size());
console.log("Topmost element is ", myStack1.peek());
console.log("Is the stack full", myStack1.isFull());
console.log("Is the stack empty", myStack1.isEmpty())

myStack1.pop();
console.log("\n", myStack1);
console.log("New size of the stack after removing topmost element ", myStack1.size());
console.log("New topmost element", myStack1.peek());
console.log("Is the stack full", myStack1.isFull());
console.log("Is the stack empty", myStack1.isEmpty())
