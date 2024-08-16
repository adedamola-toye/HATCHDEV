import {swap} from './swap.ts'
function bubble_sort_recursive<T>(arr: T[], arrayLength:number){
    //Base Case
    if(arrayLength == 1){
        return;
    }

    //Perform one pass of bubble sort
    for(let i=0; i < arrayLength-1; i++){
        if(arr[i] > arr[i+1]){
            swap(arr, i, i+1);
        }
    }
    bubble_sort_recursive(arr, arrayLength-1);
}

const scores = [10, 9, 8, 7, 6, 5, 4]
console.log(bubble_sort_recursive(scores, scores.length));