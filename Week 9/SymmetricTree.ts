
 class TreeNode {
      val: number
      left: TreeNode | null
      right: TreeNode | null
      constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.left = (left===undefined ? null : left)
          this.right = (right===undefined ? null : right)
      }
  }
 

function isSymmetric(root: TreeNode | null){
    if(!root){
        return false;
    }
    let queue = [root];
    let finalTraversed: [][];
    while(queue.length > 0){
        let levelSize = queue.length;
        let currentLevelTraversed: TreeNode[] = []
        for(let i = 0; i < levelSize;i++){
            let current: TreeNode = queue.shift()!;
            currentLevelTraversed.push(current)
                queue.push(current.left!)
                queue.push(current.right!)
        }
        //divide into two and check if they are equal using 
        let mid = Math.floor(currentLevelTraversed.length/2)
        let currLevelLeft = currentLevelTraversed.splice(0, mid)
        let currLevelRight = currentLevelTraversed.splice(mid, currentLevelTraversed.length);
        let currLevelRightReversed = currLevelRight.reverse();
        console.log(currLevelLeft)
        for(let i=0; i < currLevelRight.length; i++){
            if(currLevelLeft[i] !== currLevelRightReversed[i] ){
                return false;
            }
            else{
                return true;
            }
        }
    }
};