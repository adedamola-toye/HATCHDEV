const scores = [88, 75, 40, 60, 90];
const target = 100;  //what we are looking for

function linearSearch(input: number[], target: number): number{
    for(let i =0;  i < input.length; i++){  //O(n)
        const currentElement = input[i];  //atomic operation - O(1)
        if(currentElement == target){  //also O(1)
            return i;   //O(1)
        }
    }
    return -1; //O(1)
}  //Total complexity is the highest which is O(n)
//So time complexity of linear search is O(n) since it depends on the input size

const index= linearSearch(scores, target);
console.log(index)

//worst case- element is at last position
//best case - element  is at first position

