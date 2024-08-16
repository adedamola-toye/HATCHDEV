//MAKING THE POP OPERATION COSTLY
//By reordering in the pop method

class StackFromTwoQueuesII<T> implements IStack<T>{
    private q1 : T[]
    private q2 : T[]
    constructor(){
        this.q1 = [];
        this.q2 = [];
    }

    push(item){
        this.q1.push(item);
    }

    pop(): T| undefined{
        if(this.q1.length === 0){
            return undefined;
        }

        //Move all elements except the last one from q1 to q2
        while(this.q1.length > 1){
            this.q1.push(this.q1.shift()!)
        }

        //The last element remaining in q1 is the top of the stack
        const poppedElement = this.q1.shift();

        //Swap q1 and q2
        [this.q1, this.q2] = [this.q2, this.q1]

        /*this.q = this.q1
        this.q1 = this.q2
        this.q2 = this.q
         */


        return poppedElement;
    }

    peek(): T | undefined{
        if(this.q1.length === 0){
            return undefined;
        }

        //Move all elements except the last one from q1 to q2
        while(this.q1.length > 1){
            this.q2.push(this.q1.shift()!)
        }

        //The last element in q1 is the top element of the stack
        const topElement = this.q1.shift()!;
        this.q2.push(topElement);

        //Swap q1 and q2
        [this.q1, this.q2] = [this.q2, this.q1];
        return topElement;
    }

    size(): number{
        return this.q1.length;
    }

    isEmpty(){
        return this.q1.length === 0;
    }


}


const q2stackII = new StackFromTwoQueuesII();
q2stackII.push(1)
console.log(q2stackII)
q2stackII.push(2)
console.log(q2stackII)
q2stackII.push(3)
console.log(q2stackII)
console.log("Popped element: ", q2stackII.pop())
console.log(q2stackII)
console.log("New size: ", q2stackII.size());
console.log("New topmost element: ", q2stackII.peek())