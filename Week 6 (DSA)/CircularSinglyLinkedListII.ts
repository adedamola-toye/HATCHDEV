class CSNode<T>{
    data: T;
    next: CSNode<T> | null;

    constructor(data : T){
        this.data = data;
        this.next = this.next;
    }
}

class CircularSinglyLinkedListII<T>{
    head : CSNode<T> | null;
    tail: CSNode<T> | null;

    traversal(){
        let traversedString = '';
        if(!this.head){
            console.log("The list is empty")
            return;
        }
        let current = this.head;
        do{
            traversedString += current.data;
            if(current.next !== this.head){
                traversedString += '->';
            }
            current = current.next!;
        }
        while(current !== this.head)
        console.log(traversedString);
    }

    prepend(data: T):void{
        let newNode = new CSNode(data);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            this.tail.next = this.head;
        }
        newNode.next = this.head;
        this.tail!.next = newNode;
        this.head = newNode
    }

    append(data: T):void{
        let newNode = new CSNode(data);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            this.tail!.next = this.head;
        }
        this.tail!.next = newNode;
        this.tail = newNode;
        newNode.next = this.head;
    }

    insert(data:T, position:number){
        let newNode = new CSNode(data);
        if(!this.head){
            return;
        }
        if(position < 1){
            console.log("Invalid position");
            return;
        }
        if(position === 1){
            this.prepend(data);
            return;
        }
        let currPos = 1;
        let currNode = this.head;
        //Traverse to the node just before the desired position
        while(currPos < position - 1 && currNode.next !== this.head){
            currNode = currNode.next!;
            currPos++;
        }
        newNode.next = currNode.next;
        currNode.next = newNode;
    }

}

const prices = new CircularSinglyLinkedListII();
prices.append(100)
prices.append(500)
prices.prepend(200);
prices.traversal();