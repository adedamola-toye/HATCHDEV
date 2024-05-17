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

