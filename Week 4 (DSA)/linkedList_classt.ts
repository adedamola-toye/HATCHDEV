class NoDe <T> {
    data : T;
    next : NoDe<T> | null;     //pointing to the next node which is an object of this class  next is the next node thats why its of type Node<T>

    constructor(val : T){
        this.data = val;
        this.next = null;
    }
}

class LinkedList<T>{
    head: NoDe<T> | null;

    //INSERTING A VALUE   AT THE END    
    add(val: T){
        const newNode = new NoDe(val);

       
        //If we don't have 'head'  - a fresh linked list
        if(!this.head){   //if(type of head == 'undefined'){}
            this.head = newNode;
            return; //function stops
        }

        //If we have a head
        let currentNode = this.head;
        while(currentNode.next != null){ //not equal to null, while current node is not the tail  
            currentNode = currentNode.next;
        }

        currentNode.next = newNode;

         //If we have a head  -  not a fresh linked list
        
    }


    prepend(val:T){
        let newNode: NoDe<T> = new NoDe(val);
        let oldHead = this.head
        this.head = newNode;
        newNode.next = oldHead;
    }

    //SEARCH AND RETURN THE POSITION
    search(val: T){
        if(!this.head){
            return;
        }

        let currentNode = this.head;
        let position = 1;

        while(currentNode.next !== null){
            if(currentNode.data === val){
                console.log(`Found at position ${position}`);
                return;
            }
            position++;
            currentNode = currentNode.next;
        }
    }
    

    /* print(){
        let currentNode =  this.head;
        while(currentNode !== null){
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    } */
    print(){
        let linkedListString = '';
        let currentNode: NoDe<T> | null =  this.head;
        while(currentNode !== null){  //while(currentNode)
            if(currentNode === this.head){
                linkedListString += `[Head: ${currentNode.data}]`;
            }
            else if(currentNode.next == null){
                linkedListString += ` -> [Tail: ${currentNode.data}]`;
            }
            else{
                linkedListString += ` -> [${currentNode.data}]`;
            }
            currentNode = currentNode.next;
        }
        console.log(linkedListString);
    }

    printAsArray(){
        let arr: T[] = [];

        if(!this.head){
            return [];
        }
        let currentNode = this.head;
        while(currentNode.next !== null){  //while(currentNode) while there is still a current node
            arr.push(currentNode.data);
            currentNode = currentNode.next

        }
        console.log(arr);
    }
}



const l = new LinkedList<number>()
l.add(1);
l.add(2);
l.add(3);
l.print();
l.prepend(10);
l.printAsArray();
l.search(2);





//Generic example
const ou  = Array<string>(1)
//ou.push(1);   error
ou.push("me"); //can only accept string coz that was what was specified+