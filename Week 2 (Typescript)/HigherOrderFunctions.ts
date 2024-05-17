//Call back function passed as parameter in HOF
function callBackFunc(){
	console.log("I am a callback function");
}

//HOF
function higherOrderFunc(func: () => void): void{
	console.log("I am a higher order function and");
	func();
}

higherOrderFunc(callBackFunc);




//WITH HIGHER ORDER FUNCTIONS
const radius: number[] = [1, 2, 3];

//logic to calculate area
const area = function(radius: number): number{
	return Math.PI * radius * radius;
}

//Logic to calculate diameter
const diameter = function(radius: number): number{
	return 2 * radius;
}

const circumference = function(radius: number): number{
	return 2 * Math.PI * radius;
}

//Reusable function to perform anything on the radius array like
//calculate area, diameter etc
const calculate = function(radiusList: number[], logic: (radius: number) => number): number[]{
	const output: number[] = [];
	for(let i = 0; i < radiusList.length; i++){
		output.push(logic(radiusList[i]))
	}
	return output;
}

console.log(calculate(radius, area));
console.log(calculate(radius, diameter));
console.log(calculate(radius, circumference));



//WITHOUT HIGHER ORDER FUNCTIONS

/* const radius: number[] = [1, 2, 3]

//Calculate area
function calculateArea(radiusList: number[]): number[]{
	const areaList: number[] = [];
	for(let i = 0; i < radiusList.length; i++){
		areaList.push(Math.PI * radius[i] * radius[i]);
	}
	return areaList;
}


//calculate diameter
function calculateDiameter(radiusList: number[]){
	const diameterList: number[] = [];
	for(let i = 0; i < radiusList.length; i++){
		diameterList.push(radius[i] * 2);
	}
	return diameterList;
}

//Calculate circumference
function calculateCircumference(radiusList: number[]){
	const circumferenceList: number[] = [];
	for(let i = 0; i < radiusList.length; i++){
		circumferenceList.push(2 * Math.PI * radius[i]);
	}
	return circumferenceList;
}
console.log(calculateArea(radius));
console.log(calculateDiameter(radius));
console.log(calculateCircumference(radius))
 */