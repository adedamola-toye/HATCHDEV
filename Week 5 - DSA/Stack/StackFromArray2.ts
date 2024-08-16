interface IStack<T>{
    push(item: T) : void;
    pop(): T | undefined ;
    peek(): T | undefined;
    size(): number;
}

class StackFromArray2<T> implements IStack<T>{
    private stack : (T | null)[];
    private top : number; //Index of the top
    private maxSize: number;

    constructor(maxSize: number){
        this.stack = new Array(maxSize).fill(null);
        this.top = -1;
        this.maxSize = maxSize;
    }

    push(item:  T): void{
        if(this.top >= this.maxSize - 1){
            throw Error("Stack Overflow: Stack has reached max capacity, you cannot add more items");
        }
        this.top += 1;
        this.stack[this.top] = item; 
    }

    pop():  T{
        if(this.top === -1){
            throw new Error("You can't delete from an empty stack");
        }
        const item = this.stack[this.top];
        this.stack[this.top] = null;
        this.top -= 1;
        return item as T;
    }

    peek(): T{
        if(this.top === -1){
            throw new Error("Stack is empty");
        }
        return this.stack[this.top] as T
    }

    isEmpty(): boolean{
        return this.top === -1;
    }

    isFull():boolean{
        return this.size() === this.maxSize;
    }

    size(): number{
        return this.top + 1;
    }
}