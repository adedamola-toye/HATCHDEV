//MAKING PUSH OPERATION THE COSTLY ONE
//By reordering in the push method
class StackFromTwoQueuesI<T> implements IStack<T>{
    private q1: T[];
    private q2 : T[];

    constructor(){
        this.q1 = [];
        this.q2 = []; //Helper queue
    }

    push(item: T){
        //Enqueue item to q2
        this.q2.push(item);

        //Move all elements from q1 to q2
        while(this.q1.length){
            this.q2.push(this.q1.shift()!);
        }

        //Swap the roles and content of q1 and q2
        [this.q1, this.q2] = [this.q2, this.q1];
    }

    pop(): T|undefined{
        return this.q1.shift();
    }

    peek():T | undefined{
        return this.q1.length? this.q1[0] : undefined;
    }

    size(): number{
        return this.q1.length;
    }
}

const q2stack = new StackFromTwoQueuesI();
q2stack.push(1)
console.log(q2stack)
q2stack.push(2)
console.log(q2stack)
q2stack.push(3)
console.log(q2stack)
console.log("Popped element: ", q2stack.pop())
console.log("New size: ", q2stack.size());
console.log("New topmost element: ", q2stack.peek())