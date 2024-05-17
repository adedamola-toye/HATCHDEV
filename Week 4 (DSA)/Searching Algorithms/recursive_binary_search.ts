function recursive_binary_search(input: number[], target){
    if(input.length == 0){
        return false;
    }
    else{
        let midIndex = Math.floor(input.length / 2);
        if (input[midIndex] == target){
            return true;
        }
        else{
            if(input[midIndex]< target){
                return recursive_binary_search(input.slice(midIndex+1), target);
            }
            else{
                return recursive_binary_search(input.slice(0, midIndex), target)
            }
        }
    }

}

function veriFy(result){
    console.log("Target found: ", result);
}

const myNo = [1, 2, 3, 4, 5, 6, 7, 8];
const myResult  = recursive_binary_search(myNo, 12);
veriFy(myResult);

const myResult2 = recursive_binary_search(myNo, 6);
veriFy(myResult2);