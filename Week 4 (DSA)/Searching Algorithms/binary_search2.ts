

function binarySearch(array: number[], target){
    let firstIndex = 0;  //O(n)
    let lastIndex = array.length - 1;  //O(n)

    while(firstIndex <= lastIndex){
        let midIndex =Math.floor( (firstIndex + lastIndex) / 2); 

        if (array[midIndex]  == target){
            return midIndex;
        }
        else if(array[midIndex] < target){
            firstIndex = midIndex + 1;
        }
        else{
            lastIndex = midIndex - 1;
        }
    }
    return -1;
}

function verifyB(index: number){
    if(index != -1){
        console.log("Target found at index: ", index);
    }
    else{
        console.log("Target not found in the array");
    }
}

const myNumbersB = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let resultB: number = binarySearch(myNumbersB, 12);
verifyB(resultB);

let result2B: number = binarySearch(myNumbersB, 5);
verifyB(result2B);