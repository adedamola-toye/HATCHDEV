interface IQueue<T>{
    size(): number;
    enqueue(data: T);
    dequeue(): T;

}

class Queue<T>{
    data: T;
    queueStorage : T[] = [];

    size(){
        return this.queueStorage.length;
    }

    enqueue(data: T){
        this.queueStorage.push(data);
    }

    dequeue(){
        this.queueStorage.shift;
    }

    peek(){
        return this.queueStorage[0];
    }

/*     displayQueue(){
        console.lo
    } */

 
}


const myQueue = new Queue<number>();
myQueue.enqueue(2);
myQueue.enqueue(5);
myQueue.enqueue(8);
myQueue.enqueue(10);
console.log(myQueue);

