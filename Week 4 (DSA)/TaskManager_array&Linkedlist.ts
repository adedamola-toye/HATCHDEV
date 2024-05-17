
type Task = {
    id: number;
    task: string;
}

class TNode<Task>{
    data: Task;
    next: TNode<Task> | null;

    constructor(data: Task){
        this.data = data;
        this.next = null;
    }
}

class TaskLinkedList<T extends Task>{
    head: TNode<Task> | null;

    constructor(){
        this.head = null;  //making sure the new list is empty
    }

    appendToTaskLinkedList(task: Task){
        const new_node = new TNode(task);

        //If list is empty , make the new node the head
        if(!this.head){
            this.head = new_node;
        }
        else{  //Traverse the list to find the last node
            let current_node = this.head;
            while(current_node.next !== null){
                current_node = current_node.next;
            }
            //When you arrive at the last node add a new node
            current_node.next = new_node;
        }
    }

    deleteFromTaskLinkedList(id: number){
        if(!this.head){
            return;  //Linked list is empty
        }
        if(this.head.data.id === id){  //this.head.data refers to the data in the first node
            //The data in the first node consists of id and task 
            this.head = this.head.next;  //Deletes the first node
            return;
        }

        let current_node = this.head;
        while(current_node.next !== null){
            if(current_node.next.data.id === id){
                current_node.next = current_node.next.next;
                return;
            }
            current_node = current_node.next; //moving to the next node in the list
        }
        console.log("Task with ID", id, "not found");
    }

    displayTaskLinkedList(){
        let current_node =  this.head;
        let count = 1;
        console.log("\nMy Tasks linked list: ")
            while(current_node !== null){
                console.log(`${count}.  ${current_node.data.task}`);
                current_node = current_node.next;
                count++;
            
        }
    }

    noOfTasksFromLinkedList(){
        let current_node = this.head;
        let count = 0;
        while(current_node !== null){
            count ++;
            current_node = current_node.next;
        }
        return count;
    }
}


class TaskManager{
    tasksArray: Task[];
    id: number;
    tasksLinkedList: TaskLinkedList<Task>;

    constructor(){
        this.tasksArray = [];
        this.tasksLinkedList = new TaskLinkedList<Task>()
    }

    addTask(task: Task){
        this.tasksArray.push(task);
        this.tasksLinkedList.appendToTaskLinkedList(task);
    }

    deleteTaskById(id: number){
        const index = this.tasksArray.findIndex(task => task.id === id);
        if (index !== -1){
            this.tasksArray.splice(index, 1);
        }

        this.tasksLinkedList.deleteFromTaskLinkedList(id);
        
    }

    displayTasksArray(){
        console.log("Your Tasks: ");
        this.tasksArray.forEach(task =>{
            console.log(`${task.id}.  ${task.task}`);
        });
    }

    displayTasksLinkedList(){
        this.tasksLinkedList.displayTaskLinkedList();
    }

    lengthFromArray(){
        //Length from tasks array
        return this.tasksArray.length;
    }

    lengthFromLinkedList() {
        return this.tasksLinkedList.noOfTasksFromLinkedList();
    }
    


}

const myTaskManager = new TaskManager();
myTaskManager.addTask({id: 1, task: "Wash the dishes"});
myTaskManager.addTask({id: 2, task: "Sweep the living room"});
myTaskManager.addTask({id: 3, task:"Complete Hatchdev Assignment"});
myTaskManager.addTask({id: 4, task: "Update CSC 225 note"});

myTaskManager.displayTasksArray();
myTaskManager.displayTasksLinkedList();
myTaskManager.deleteTaskById(1);
myTaskManager.displayTasksArray();
myTaskManager.displayTasksLinkedList();

console.log(`There are ${myTaskManager.lengthFromArray()} tasks in your Tasks array`)
console.log(`There are ${myTaskManager.lengthFromLinkedList()} tasks in your Tasks linked list`);