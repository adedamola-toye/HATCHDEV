


import {swap} from './swap.ts'
function bubble_sort(array: number[]){
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j <  array.length - i - 1; j++){
            if(array[j] > array[j+1]){
                swap(array, j, j+1);
            }
        }
       
    }
    return array;
}



const array = [10, 9, 8, 7, 6, 5, 4]
console.log(bubble_sort(array));
