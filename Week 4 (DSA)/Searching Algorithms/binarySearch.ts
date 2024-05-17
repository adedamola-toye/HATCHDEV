/* 

function binary_search(input: number[], target: number){
    let highIndex = input.length - 1;
    let lowIndex = 0;
    let midIndex: number;

    for(let i = 0; i < input.length; i++){
        midIndex = Math.floor((highIndex + lowIndex) / 2);
        const middleElement = input[midIndex];

        if(middleElement == target){
            return midIndex;
        }
        if(middleElement < target){
            lowIndex = midIndex + 1;
        }
        else{
            highIndex = midIndex - 1;
        }
    }
    return -1;
}

const sorted_scores = [40, 60, 75, 88, 90];
const target1 = 40;
const reSult = binary_search(sorted_scores, target1);
console.log(reSult); */












type Result = {
    idx: number;
    numOfIter: number;
}





function binary_search(input: number[], target: number){
    let highIndex = input.length - 1;
    let lowIndex = 0;
    let midIndex: number;

    for(let i = 0; i < input.length; i++){
        midIndex = Math.floor((highIndex + lowIndex) / 2);
        const middleElement = input[midIndex];

        if(middleElement == target){
            return {numOfIter: i, idx: midIndex};
        }
        if(middleElement < target){
            lowIndex = midIndex + 1;
        }
        else{
            highIndex = midIndex - 1;
        }
    }
    return {numOfIter: -1, idx: -1}
}

const sorted_scores = [40, 60, 75, 88, 90];
const target1 = 40;
const resulT = binary_search(sorted_scores, target1);
console.log(resulT);

