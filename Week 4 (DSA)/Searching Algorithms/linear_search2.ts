//Search through a list, if the target is in the list return its position else return -1
function linear_search (array: number[], target: number){
    for(let i = 0; i < array.length; i++){  //O(n)
        if (array[i] == target){
            return i;
        }
    }
    return -1;
}

//Function that verifies the result from linear search
function verify(index: number){
    if(index != -1){
        console.log("Target found at index: ", index);
    }
    else{
        console.log("Target not found in the array");
    }
}

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result: number = linear_search(myNumbers, 12);
verify(result);

let result2: number = linear_search(myNumbers, 5);
verify(result2);