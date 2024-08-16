import {LNode, SinglyLinkedList} from "../../Week 4 (DSA)/Linked_List.ts"

function merge_sort<T>(head : LNode<T>): LNode<T> | null{
    /*This function sorts the linked list in ascending order
      -Recursively divide the linked list into sub linked lists containing a single node
      -Repeatedly merge the sub linked lists to produce sorted sub linked lists until one remains
    Return a sorted linked list */

      
    /*BASE CASE: IF LIST HAS 0 OR 1 NODES RETURN THE NODE
        -i.e if the head is null(empty linked list) or if head.next is null(no next element)*/
   if(!head || !head.next_node){
    return head;
   }
   //Alternatively we can use the size function created in Linked list:
   /* if(linked_list.size() == 1){
    return linked_list;
    else if(!linked_list.head){return linked_list}
   } */

   //SPLIT LINKED LIST INTO TWO HALVES
  const middle = getMiddleNode(head);
  const  right_head = middle.next_node;
  middle.next_node = null;
  const left_head = head;

  const leftSorted= merge_sort(left_head);
  const rightSorted = merge_sort(right_head!);

  return Lmerge(leftSorted, rightSorted) 



}


function getMiddleNode<T>(head: LNode<T>) : LNode<T>{
    let slow = head;
    let fast = head.next_node;
    while(fast && fast.next_node){
        slow = slow.next_node as LNode<T>;
        fast = fast.next_node.next_node;
    }
    return slow;
}

function Lmerge<T>(left: LNode<T>|null, right: LNode<T> | null) : LNode<T> | null{
    let dummyNode = new LNode<T>(null as unknown as T);
    let tail : LNode<T>= dummyNode;
    while(left && right){
        if(left.data < right.data){
            tail.next_node = left;
            left = left.next_node;
        }
        else{
            tail.next_node = right;
            right = right.next_node;
        }
        tail = tail.next_node!;
    }

    if(left){
        tail.next_node = left;
    }
    else{
        tail.next_node = right;
    }
    return dummyNode.next_node;

   /*  if(!left){
        return right;
    }
    if(!right){
        return left;
    }

    let head: LNode<T> = null;
    if(left.data <= right.data){
        head = left;
        left = left.next_node;
    }
    else{
        head = right;
        right = right.next_node;
    }

    let current = head;

    while(left &&  right){
        if(left.data <= right.data){
            current.next_node = left;
            left = left.next_node;
        }
        else{
            current.next_node = right;
            right = right.next_node;
        }
        current = current.next_node;
    }

    if(left){
        current.next_node = left;
    }
    else{
        current.next_node = right;
    }

    return head; */
}


const myMLinkedList = new SinglyLinkedList<number>();
myMLinkedList.append(4);
myMLinkedList.append(2);
myMLinkedList.append(5);
myMLinkedList.append(1);
myMLinkedList.append(3);

console.log("Original list:");
myMLinkedList.print();

// Sort the linked list
myMLinkedList.head = merge_sort(myMLinkedList.head!);

console.log("Sorted list:");
myMLinkedList.print();