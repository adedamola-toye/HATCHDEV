/*Making enqueue the costly operation */

import { StackFromArray } from "../Stack/StackFromArray";
class QueueFromTwoStacksI<T> implements AQueue<T>{
    private s1: StackFromArray<T>;
    private s2 : StackFromArray<T>;
    constructor(){
        this.s1 = new StackFromArray<T>();
        this.s2 = new StackFromArray<T>();
    }

    enqueue(data: T):void{
        //Move all elements from s1 to s2
        while(!this.s1.isEmpty()){
            this.s2.push(this.s1.pop()!);
        }

        //Push item into s1
        this.s1.push(data);

        //Push everything from s2 back to s1
        while(!this.s2.isEmpty()){
            this.s1.push(this.s2.pop()!)
        }
    }

    dequeue(): T|  undefined{
        //If stack is empty
        if(this.s1.isEmpty()){
            return undefined;
        }

        //Else return top of s1
        const dequeuedData = this.s1.pop();
        if(dequeuedData === undefined){
            return undefined;
        }
        else{
            return dequeuedData;
        }
    }

    isEmpty(): boolean {
        return this.s1.isEmpty();
    }

    peek(): T | undefined{
        if(this.s1.isEmpty()){
            return undefined;
        }
        const frontItem = this.s1.peek();
        return frontItem === undefined? undefined: frontItem;
    }

    size(): number{
        return this.s1.size();
    }
}