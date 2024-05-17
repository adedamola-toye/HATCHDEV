class DLNode<T>{
    data: T| null;
    next: DLNode<T> 
    previous: DLNode<T> 

    constructor(val:T){
        this.data = val;
    }
}

class DoublyLinkedList<T>{
    head: DLNode<T> | null;

    add(val:T, position?: number){

        //Prepend
        //Append
        //Inserting at a position
        //Add before the tail

        let newNode = new DLNode<T>(val);
        if(!this.head){
            this.head = newNode;
            return;
        }
        let currentNode = this.head;
        while(currentNode.next !== undefined){ ///difference between undefined and null here.. why did null replace it
            currentNode = currentNode.next;
        } 
        currentNode.next = newNode;
        newNode.previous = currentNode;
    }


    //Adding head and  tail as a property? in ???

    delete(val:T){

    }
}


const myDoubleLinkedList = new DoublyLinkedList();
myDoubleLinkedList.add(1);
myDoubleLinkedList.add(2);
myDoubleLinkedList.add(4);
console.log(myDoubleLinkedList)







