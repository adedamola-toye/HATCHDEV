class LNode<T>{
    data: T;
    next_node: LNode<T> | null;

    constructor(data: T){
        this.data = data;
        this.next_node = null;
    }
}

const node1 = new LNode(10);
const node2 = new LNode(20);
console.log(node1);
node1.next_node = node2;
console.log(node1.next_node)


class SinglyLinkedList<T>{
    head: LNode<T>  | null;
    tail: LNode<T> | null;


    isEmpty(): boolean{
        return this.head == null
        }

    size(): number{
       let current_node = this.head; //this.head is  a reference  to the head node
       let count = 0;

       while (current_node !== null){
            count ++;
            current_node= current_node.next_node;
       }
       return count;
    }

    prepend(data: T){  //Constant time operation
        //Adding new node to the head of the list
        const new_node: LNode<T> = new LNode(data);
        new_node.next_node = this.head;
        this.head = new_node;
    }

    append(data: T){
        const new_node: LNode<T> = new LNode(data);

        //If list is empty , make the new node the head
        if(!this.head){
            this.head = new_node;
            return;
        }

        //Traverse the list to find the last node
        let current_node = this.head;
        while(current_node.next_node !== null){
            current_node = current_node.next_node;
        }

        //Append the new node to end of the list
        current_node.next_node = new_node;
    }

    //SEARCHING A LINKED LIST
    //search the first node containing the data that matches the key
    search(key: T){
        let current_node = this.head;
        while(current_node !== null){
            if(current_node.data === key){
                console.log(current_node);
                return;
            }
            current_node = current_node.next_node;   
        }
        console.log(`Key '${key}' is not in the list`);
        
    }


    //INSERTING IN LINKED LIST
    insert(data: T, index: number): void {
        if (!this.head) {
            throw new Error("You can't insert into an empty list"); // If the list is empty, there's nothing to insert
        }

        if (index < 0) {
            throw new Error("Index must be a non-negative integer.");
        }
    
        if (index === 0) {
            this.prepend(data); // Handle insertion at the beginning (prepend)
            return;
        }

        if(index > 0){
            let new_node: LNode<T> | null = new LNode(data);
            let positionFromInsertionPoint = index;
            let current_node: LNode<T> | null= this.head;

            while(positionFromInsertionPoint > 1 && current_node?.next_node !== null){
                current_node = current_node.next_node;
                positionFromInsertionPoint--;
            }

            let previous: LNode<T>  = current_node;
            let next = current_node.next_node;

            previous.next_node = new_node;
            new_node.next_node = next
            }
           

        }
    
        
    //REMOVING A NODE
    remove(key: T){
       if(!this.head){
        throw new Error("You can't delete from an empty list");
        return;
       }

       //If the key is the head node
       if(this.head.data === key){
            this.head = this.head.next_node;
            return;
       }

       let current_node: LNode<T> | null | undefined = this.head;
        while(current_node !== null){
            if(current_node!.data === key){
                current_node = current_node!.next_node?.next_node;
                return;
            }
            current_node = current_node.next_node;
        }
        
    }
    

    //DISPLAY THE LINKED LIST
    print(): void{
        let linkedListString = '';
        let currentNode: LNode<T> | null =  this.head;
        while(currentNode !== null){  //while(currentNode)
            if(currentNode === this.head){
                linkedListString += `[Head: ${currentNode.data}]`;
            }
            else if(currentNode.next_node == null){
                linkedListString += ` -> [Tail: ${currentNode.data}]`;
            }
            else{
                linkedListString += ` -> [${currentNode.data}]`;
            }
            currentNode = currentNode.next_node;
        }
        console.log(linkedListString);
    }

}



const myLinkedList = new SinglyLinkedList<number>();
myLinkedList.head = node1;


myLinkedList.prepend(30);
/* console.log(myLinkedList) */
myLinkedList.print();
const list_size = myLinkedList.size();
console.log("Size: ", list_size)

myLinkedList.append(50);
myLinkedList.print();

myLinkedList.search(10);

myLinkedList.remove(50);
console.log(myLinkedList);




export {LNode, SinglyLinkedList};
