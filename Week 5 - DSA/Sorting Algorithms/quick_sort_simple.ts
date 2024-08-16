function quick_sort<T>(array: T[]): T[]{
    if(array.length <= 1){
        return array;
    }

    //Choose pivot as first element
    let pivot : T = array[0];

    let less_than_pivot : T[] = [];
    let greater_than_pivot: T[] = [];

    //Loop through all the items in the list after the pivot
    for(let i  = 1; i < array.length; i++){
        if (array[i] <= pivot){
            less_than_pivot.push(array[i]);
        }
        else{
            greater_than_pivot.push(array[i]);
        }
    }

    //return quick_sort(less_than_pivot).concat([pivot],  quick_sort(greater_than_pivot));
    return [...quick_sort(less_than_pivot), pivot, ...quick_sort(greater_than_pivot)];
}

const myQArray =  [10, 16, 3, 8, 12, 3,  15, 6, 3, 9, 5];
console.log(quick_sort(myQArray))