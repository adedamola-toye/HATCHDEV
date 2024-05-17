
type Student = {
    name: string;
    age: number;
}

const students: Student[] = [
	{name: "Tolu", age: 17},
	{name: "Amirah", age: 19},
	{name: "Toyibah", age: 18},
	{name: "Hussayna", age: 24},
	{name: "Hassanah", age: 16},
	{name: "Maryam", age: 16}
]


//FILTER METHOD
const adultStudents: Student[] = students.filter((student: Student) => {
	return student.age >= 18;
})



console.log("Students above or = 18: ")
console.log(adultStudents);



//MAP METHOD
const studentNames: string[]= students.map((student: Student) => {
 return student.name;
})

console.log("\nStudents Names:")
console.log(studentNames);


//FIND METHOD
const findStudent: Student | undefined  = students.find((student:Student) => {
	return student.name === "Toyibah";
})
console.log(findStudent)


//FOREACH METHOD
students.forEach((student: Student) => {
    console.log(student.name);
});


//SUM METHOD
const hasUnderageStudents: boolean = students.some((student: Student) => {
	return student.age < 18;
})
console.log(hasUnderageStudents);
if(hasUnderageStudents == true){
    console.log("There are underage students");
}
else{
    console.log("There are no underage students");
}

//EVERY METHOD - checks each element
const hasAdultStudents: boolean = students.every((student: Student) => {
	return student.age >= 18;
})
console.log(hasAdultStudents);
if(hasAdultStudents === true){
    console.log("All the students are adults");
}
else{
    console.log("There are some students below 18");
}


//REDUCE METHOD
const totalAge: number = students.reduce((currentTotal: number, student: Student) => {
    return currentTotal + student.age;
}, 0);

console.log("Total age of students is " + totalAge);


//INCLUDES
const numbers = [1, 2, 3,4 ,5];
const includesTwo = numbers.includes(2)
console.log(includesTwo);