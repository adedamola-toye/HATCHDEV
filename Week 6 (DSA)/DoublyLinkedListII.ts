class DNode<T>{
    data: T;
    next: DNode<T> | null;
    prev: DNode<T>|null;
    constructor(data: T){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedListII<T>{
    head: DNode<T> | null;
    tail: DNode<T> | null;
   /*  constructor(){
        this.head = null;
        this.tail = null
    } */
    
    //Forward Traversal
    forwardTraversal():void{
        let current = this.head;
        let forwardTraversedString = '';
        while(current){
            forwardTraversedString += current.data;
            if(current.next){
                forwardTraversedString += '->';
            }
            
            current = current.next;
        }
        console.log(forwardTraversedString);
    }

    backwardTraversal(): void{
        let current = this.tail;
        let backwardTraversedString = '';
        while(current){
            backwardTraversedString += current.data;
            if(current.next){
                backwardTraversedString += '->';
            }
            current = current.prev;
        }
        console.log(backwardTraversedString)
    }

    length(): number{
        //Variable to store the length of the list
        let length = 0;
        //Pointer to traverse the list
        let current = this.head;
        //Traverse the list until the end
        while(current){
            //Increment length for each node visited
            length++;
            //Move to nect node
            current = current.next;
        }
        return length;
    }

    //Add at the end
    append(data: T){
        let newNode = new DNode<T>(data);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail!.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

    //Add at the beginning
    prepend(data: T){
        let newNode = new DNode<T>(data);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    insert(data: T, position: number){
        if(position === 1){
            this.prepend(data);
            return;
        }
        if(position  > this.length()){
            this.append(data);
            return;
        }

        //Traverse to the node before the desired position
        let current = this.head;
        let currentPosition = 1;
        while(current && currentPosition < position - 1){
            current = current.next;
            currentPosition++;
        }

        //Create the new node and update pointers
        const newNode = new DNode<T>(data);
        newNode.next = current!.next;
        newNode.prev = current;
        current!.next!.prev = newNode;
        current!.next = newNode;
    }

    search(target: T): string{
        let current = this.head;
        let position = 1;
        while(current){
            if(current.data = target){
                return `${target} found at position ${position}`;
            }
            current = current.next;
            position++;
        }
        return `${target} not found`;
    }

    deleteAtBeginning(): void{
        if(!this.head){
            return;
        }
        //If list has only one node
        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
        }
        else{
            //Move head pointer to point to current head's next node
            this.head = this.head.next;
            this.head!.prev = null;
        }
    }

    deleteAtEnd():void{
        if(!this.tail){
            return;
        }
        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
        }
        else{
            this.tail = this.tail.prev;
            this.tail!.next = null;
        }
    }

    deleteAtPosition(position: number): void{
        if(!this.head){
            return;
        }
        if(position < 1 || position > this.length() ){
            console.log("Invalid position");
            return;
        }

        if(position === 1){
            this.deleteAtBeginning();
        }
        if(position === this.length()){
            this.deleteAtEnd();
        }

        let current=this.head;
        let currentPosition = 1;
        //Traverse to the node at the desired position
        while(current && currentPosition < position){
            current = current.next!;
            currentPosition++;
        }
        current.prev!.next = current.next;
        current.next!.prev = current.prev;

    }

    deleteByValue(val: T): void{
        if(!this.head){
            return;
        }
        if(this.head.data === val){
            this.deleteAtBeginning();
        }
        let current = this.head;
        while(current){
            if(current.data === val ){
                current!.prev!.next = current.next;
                current!.next!.prev = current.prev;
                return;
            }
            current = current.next!;
        }
    }
}

const grades = new DoublyLinkedListII();
grades.append(20);
grades.append(50);
grades.append(80);
grades.prepend(100);
grades.insert(70, 2);
grades.forwardTraversal();