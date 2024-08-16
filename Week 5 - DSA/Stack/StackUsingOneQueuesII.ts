//MAKING THE POP OPERATION COSTLY
//By reordering in the pop method
class StackFromOneQueue2<T> implements IStack<T>{
    private queue: T[];
    constructor(){
        this.queue = [];
    }
    push(item: T): void{
       this.queue.push(item);
    }

    pop(): T | undefined{
        //IF Stack is empty, return
        if(this.queue.length === 0){
            return undefined;
        }

       let size = this.queue.length
        for(let i = 0; i < size- 1; i++){
            this.queue.push(this.queue.shift()!);
        }
        return this.queue.shift();
    }

    size(): number{
        return this.queue.length;
    }

    peek(): T{
        return this.queue[this.queue.length - 1];
    }

    empty(): boolean{
        return this.queue.length == 0;
    }
}
const qstack = new StackFromOneQueue2();
qstack.push(1);
qstack.push(2);
qstack.push(3);
console.log("Top element: " , qstack.peek());
console.log(qstack.pop());
console.log(qstack.size());
console.log(qstack.pop());
console.log(qstack.size());
console.log(qstack.empty());
console.log(qstack.pop());
console.log(qstack.empty())
