class BSNode<T>{
    data: T;
    left: BSNode<T> | null;
    right: BSNode<T> | null;
    constructor(data: T){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree<T>{
    root: BSNode<T> | null;

    constructor(){
        this.root = null;
    }

    private insertNode(newNode: BSNode<T>, node:BSNode<T>) : void{
        if(newNode.data < node.data){
            if(node.left === null){
                node.left = newNode;
            }
            else{
                this.insertNode(newNode, node.left);
            }
        }
        else{
            if(node.right === null){
                node.right = newNode;
            }
            else{
                this.insertNode(newNode, node.right);
            }
        }

    }

    insert(data: T): void{
        const newNode = new BSNode(data);
        if(this.root === null){
            this.root = newNode;
        }
        else{
            this.insertNode(newNode, this.root);
        }
    }

    delete(data: T): void{
        this.root = this.deleteNode(data, this.root);
    }

    //DELETING NODE/ PARENT FROM THE MIN AT RIGHT
    findMinNode(node: BSNode<T>): BSNode<T>{
        if(!node.left){
            return node;
        }
        return this.findMinNode(node.left)
    }

    //IF USING LEFT
    findMaxNode(node: BSNode<T>): BSNode<T>{
        if(!node.right){
            return node;
        }
        return this.findMaxNode(node.right)
    }
    private deleteNode(data: T, node: BSNode<T> | null){
        if(!node){
            return null;
        }
        if(data < node.data){
            node.left = this.deleteNode(data, node.left);
            return node;
        }
        else if(data > node.data){
            node.right = this.deleteNode(data, node.right);
            return node;
        }
        else{
            if(!node.left && !node.right){
                node = null;
                return node;
            }
            else if (node.left === null){
                node = node.right!;
                return node;
            }
            else if(node.right === null){
                node = node.left; 
                return node;
            }
            const minNode = this.findMinNode(node.right);
            node.data = minNode.data;

            node.right = this.deleteNode(minNode.data, node.right);
            return node;
        }
    }
}

const myBSTree = new BinarySearchTree();
myBSTree.insert(17);
myBSTree.insert(13);
myBSTree.insert(22);
myBSTree.insert(11);
myBSTree.insert(9)
myBSTree.insert(12);
myBSTree.insert(24);
myBSTree.insert(15);
myBSTree.insert(14);