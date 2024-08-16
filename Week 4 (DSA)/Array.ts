let new_array: number[] = [1, 2, 3];


//ACCESSING A VALUE
const firstElement = new_array[0];


console.log(new_array[5]);

//SEARCH AN ARRAY
let twoInArray = new_array.includes(2);
console.log(twoInArray)

let oneInArray = false;
new_array.forEach((value) =>{
    if(value == 1){
        oneInArray = true;
    }
});
console.log(oneInArray);

//INSERTING TO AN ARRAY
function insert(array, insertionIndex, item){
    array.push(0);
    let i = array.length - 2;
    while(i >= insertionIndex){
        array[i+1] = array[i];
        i = i-1;
    }
    array[insertionIndex] = item;
}

let arr = [1, 2, 3, 4, 5];
insert(arr, 0, 10);
console.log(arr);  // Output: [1, 2, 10, 3, 4, 5]

