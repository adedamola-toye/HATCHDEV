class SNode<T>{
    data: T| null;
    next: SNode<T>|null;

    constructor(data: T){
        this.data = data;
        this.next = null;
    }
}

interface LIStack<T>{
    push(item: T) : void;
    pop(): T | null;
    peek(): T | null;
    size(): number;
}

class StackFromLinkedList<T> implements LIStack<T>{
    private head: SNode<T> | null = null;

    push(item: T): void{
        const  newNode = new SNode(item);
        newNode.next = this.head;
        this.head = newNode;
    }

    pop() : T | null{
        if(!this.head){
            throw new Error("Stack is empty");
        }
        const  popped = this.head.data;
        this.head = this.head.next;
        return popped;
    }

    peek(): T| null{
        if(!this.head){
            throw new Error("Stack is empty");
        }
        return this.head.data;
    }

    isEmpty(): boolean{
        return this.head === null;
    }

    size(): number{
        let count = 0;
        let current = this.head;
        while(current){
            count++;
            current = current.next;
        }
        return count;
    }

    printStack():void{
        let current = this.head;
        console.log("Stack");
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}

const myLStack1 = new  StackFromLinkedList<number>;
myLStack1.push(1);
myLStack1.push(2);
myLStack1.push(3);
myLStack1.push(4);
myLStack1.push(5);

console.log(myLStack1.printStack())
console.log("Size of the stack is", myLStack1.size());
console.log("Topmost element is ", myLStack1.peek());
console.log("Is the stack empty", myLStack1.isEmpty())

myLStack1.pop();
console.log("\n", myLStack1.printStack());
console.log("New size of the stack after removing topmost element ", myLStack1.size());
console.log("New topmost element", myLStack1.peek());
console.log("Is the stack empty", myLStack1.isEmpty())