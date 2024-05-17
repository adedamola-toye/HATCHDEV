class TreeNode<T>{
    data: T;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;

    constructor(val: T){
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree<T>{
    root: TreeNode<T> | null;

    constructor(){
        this.root = null;
    }

    /* insert(val : T){
        const newNode = new TreeNode(val);

        //Inserting to an empty binary tree
        if(!this.root){  //if (this.root == null)
            this.root = newNode;
            return;
        }
        

        //insert to left first then right

        //Initialize queue with the root node
        let  queue: TreeNode<T>[] = []
        queue.push(this.root);  //why are we using queue???? -- to process each node in the order they were added

        while(queue.length > 0){
            let current = queue.shift();
            if(current!.left == null){
                current!.left = newNode;
                return;
            }
            else if(current!.right === null){
                current!.right = newNode;
                return;
            }
            else{
                queue.push(current!.left);
                queue.push(current!.right);
            }
        }

    } */

    insert(val: T): void {
        const newNode = new TreeNode(val);
    
        if (!this.root) {
            this.root = newNode;
            return;
        }
    
        let current = this.root;
        const queue: TreeNode<T>[] = [current];
    
        while (queue.length > 0) {
            current = queue.shift()!;
    
            if (!current.left) {
                current.left = newNode;
                break;
            } else {
                queue.push(current.left);
            }
    
            if (!current.right) {
                current.right = newNode;
                break;
            } else {
                queue.push(current.right);
            }
        }
    }
    

    search(val:T){
        if(!this.root){
            throw new Error("You cannot search an empty tree");
        }
        return this.searchEachNode(this.root, val);
    }

    private searchEachNode(node: TreeNode<T> | null, val : T){
        if(!node){
            return null;
        }

        if(node.data < val){
            return this.searchEachNode(node.right, val);
        }
        else if(node.data > val){
            return this.searchEachNode(node.left, val);
        }
        else{
            return node;
        }
    }

    traversal(node: TreeNode<T>| null){
        if(!node){
            return;
        }
        console.log(node!.data)
        this.traversal(node!.left);
        this.traversal(node!.right);
    
        
    }
}


const myBTree = new BinaryTree<number>();
myBTree.root = new TreeNode(1);
myBTree.root.left = new TreeNode(2);
myBTree.root.right = new TreeNode(3);
myBTree.root.left.left  = new TreeNode(4);
myBTree.root.left.right = new TreeNode(5);
myBTree.root.right.left = new TreeNode(6);
myBTree.root.right.right = new TreeNode(7);

myBTree.traversal(myBTree.root);