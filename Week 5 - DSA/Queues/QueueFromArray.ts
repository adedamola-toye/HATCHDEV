interface AQueue<T>{
    enqueue(item: T): void;
    dequeue(): T | undefined;
    peek(): T | undefined; //Returns the front element
    //isFull(): boolean;
    isEmpty(): boolean;
}

class QueueFromArray<T> implements AQueue<T>{
    private front : number;
    private rear : number;
    private capacity: number;
    private queue: T[];

    constructor(size){
        this.front = 0;
        this.rear = -1; //Index of the last element 
        this.capacity = size;
        this.queue = new Array(this.capacity)
    }

    isFull(): boolean{
        return this.rear === this.capacity - 1;
    }
    isEmpty(): boolean {
        return this.rear < this.front;
    }

    enqueue(item): void{
        //If queue is full, return
        if(this.isFull()){
            console.log("Queue is full. Cannot enqueue");
            return;
        }
        //Else increase the rear index to point to the next rear and insert at new rear indes
        else{
            this.rear++;
            this.queue[this.rear] = item;
        }
        return;
    }

    dequeue(): T | undefined {
        //If queue is empty, return
        if(this.isEmpty()){
            console.log("Queue is empty");
            return;
        }

        //Else remove the first element
        return this.queue.shift();
    }

    peek(): T | undefined {
        if(this.isEmpty()){
            console.log("Queue is empty");
            return;
        }
        return this.queue[this.front];
    }
}

const aqueue = new QueueFromArray(5);
console.log("Is queue empty: ", aqueue.isEmpty());
aqueue.enqueue(10);
aqueue.enqueue(20)
aqueue.enqueue(30);
aqueue.enqueue(40);
aqueue.enqueue(50);
console.log(aqueue)
console.log("Is queue full: ", aqueue.isFull())
console.log(aqueue)
aqueue.enqueue(60);
console.log("Dequeued: ", aqueue.dequeue());
console.log("New first element : ", aqueue.peek());
