class ListNode<T>{
    data: T;
    next:ListNode<T>|null;

    constructor(data:T){
        this.data = data;
        this.next=null;
    }
}

class ShuffleLinkedList<T>{
    head: ListNode<T>|null;
    constructor(){
        this.head = null;
    }

    append(data: T): void{
        const newNode = new ListNode(data);
        if(!this.head){
            this.head = newNode;
        }
        else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = newNode;
        }
    }

    //Converts linked list to an array
    fromLinkedListToArray():T[]{
        const array:T[] = [];
        let current = this.head;
        while(current){
            array.push(current.data);
            current = current.next;
        }
        return array;
    }

    //Convert Array back to Linked List
    fromArrayToLinkedList(array: T[]): void{
        this.head = null; //To ensure the linked list is empty
        for(const data of array){
            this.append(data)
        }
    }

    shuffle(): void{
        const array = this.fromLinkedListToArray(); //Convert linked list to array
        fisherYatesShuffle(array); //Shuffle the array
        this.fromArrayToLinkedList(array);
    }

    printList():void{
        let current = this.head;
        const elements: T[] = [];
        while(current){
            elements.push(current.data);
            current = current.next;
        }
        console.log(elements.join('->'));
    }
}

function fisherYatesShuffle<T>(array: T[]): void{
    for(let i = array.length-1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1)); //Get a random index
        //Swap with new random index
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

const list = new ShuffleLinkedList<number>();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

console.log("Original list:");
list.printList();

list.shuffle();

console.log("Shuffled list:");
list.printList();