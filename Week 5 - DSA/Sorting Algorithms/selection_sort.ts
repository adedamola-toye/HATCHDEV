function swap(array, a, b){
    let temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}


function selection_sort<T>(array : T[] ){
    for(let i = 0; i <  array.length - 1; i++){
        let min_index = i;

        for(let j = i+1; j < array.length; j++){
            if(array[j] < array[min_index]){
                min_index = j;
            }
        }
        if(min_index != i){
            swap(array, i, min_index);
        }
    }

    return array;
}

const myList = [4, 2, 1, 8, 3]
console.log(selection_sort(myList)) 




