import { StackFromArray } from "../Stack/StackFromArray";

class QueueFromTwoStacksII<T> implements AQueue<T>{
    private s1: StackFromArray<T>;
    private s2 : StackFromArray<T>;
    constructor(){
        this.s1 = new StackFromArray<T>;
        this.s2 = new StackFromArray<T>;
    }

    enqueue(data: T) : void{
        this.s1.push(data);
    }

    dequeue(): T | undefined{
        if(this.s1.isEmpty() && this.s2.isEmpty()){
            return undefined;
        }

        //If s2 is empty, move elements from s1 to s2
        if(this.s2.isEmpty()){
            while(!this.s1.isEmpty()){
                this.s2.push(this.s1.pop()!)
            }
            return this.s2.pop();
        }
    }

    isEmpty(): boolean {
        return this.s1.isEmpty();
    }

    peek() : T | undefined{
        //If s2 is empty, push from s1 to s2
        if(this.s2.isEmpty()){
            while(!this.s1.isEmpty()){
                this.s2.push(this.s1.pop()!);
            }
        }
        //Peek the topmost element of s2 which is the next front element after dequeuing
        return this.s2.peek();
    }

    size(): number{
        return this.s2.size();
    }
}

const aqueue = new QueueFromTwoStacksII();
console.log("Is queue empty: ", aqueue.isEmpty());
aqueue.enqueue(10);
aqueue.enqueue(20)
aqueue.enqueue(30);
aqueue.enqueue(40);
aqueue.enqueue(50);
console.log(aqueue)
console.log(aqueue)
aqueue.enqueue(60);
console.log("Dequeued: ", aqueue.dequeue());
console.log("New first element : ", aqueue.peek());
