class QNode<T>{
    data:  T;
    next : QNode<T> | null;
    constructor(data : T){
        this.data = data;
        this.next = null;
    }
}

class QueueFromLinkedList<T>{
    private front: QNode<T> | null;
    private rear: QNode<T> | null;

    constructor(){
        this.front = null;
        this.rear = null;
    }

    enqueue(data: T){
        const newNode = new QNode(data);
        
        //If queue is empty
        if(this.front == null && this.rear == null){
            this.front =  newNode;
            this.rear = newNode;
        }
        else{
                this.rear!.next = newNode;
                this.rear = newNode;
            }
            

    }

    dequeue(): T | null{
        //If queue is empty
        if(this.front === null){
            return null;
        }
        let dequeuedData = this.front.data;
        this.front = this.front?.next;

        //If queue is now empty after removing the only element
        if(this.front === null){
            this.rear = null;
        }
        return dequeuedData;
    }

    isEmpty():boolean{
        return this.front === null;
    }

    peek(){
        //If queue is empty
        if(this.front === null){
            return null;
        }
        return this.front.data;
    }
}

