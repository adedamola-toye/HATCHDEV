//MAKING THE PUSH OPERATION COSTLY 
//By reordering in the push method
class StackFromOneQueue1<T> implements IStack<T>{
    private queue: T[];
    constructor(){
        this.queue = [];
    }
    push(item: T): void{
        //Get previous size of the queue
        let prevSize = this.queue.length;

        //Add current element
        this.queue.push(item);

        //Dequeue all prev elements and put them after the current element
        for(let i  =0; i < prevSize; i++){
            this.queue.push(this.queue.shift()!);
        }
    }

    pop(): T | undefined{
        //IF Stack is empty, return
        if(this.queue.length === 0){
            return undefined;
        }

       return this.queue.shift();
    }

    size(): number{
        return this.queue.length;
    }

    peek(){
        return this.queue[0]
    }
}

const qstack2 = new StackFromOneQueue1();
qstack2.push(1);
console.log(qstack2 )
qstack2.push(2);
console.log(qstack2 )
qstack2.push(3);
console.log(qstack2 )
console.log("Top element: ", qstack2.peek() );
console.log(qstack2.pop());
console.log(qstack2.size());
console.log(qstack2.pop());