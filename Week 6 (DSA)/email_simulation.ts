//Sending email to 5000 users;;; looking at most efficient data structure
//Linked List
//Queue

const get5000users = () =>{
    return[]; //return 5000 users
}

const res = get5000users();

const sendMail = (content: string) => {
    console.log(`Sent ${content}`);
}


function createNode(){
    console.log("Node.")
}

let linkedList;
res.forEach((email:string) => {
    linkedList.next= createNode();  //assume this appends node to the linkedlist
    sendMail(email)
})

let currentNode = linkedList;
while(currentNode != null){
    sendMail(currentNode)
    currentNode = createNode.next;
}