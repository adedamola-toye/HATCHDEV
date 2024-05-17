class HatchDevClass{
    private pupils  : string[];
    constructor(student: string[]){
        this.pupils = student;
    }
    getStudentNames(){
        /* return ["Ade", "Lola", "Bola", "Tola"] */
        return this.pupils
    }

    private getTotalNumberOfStudents(){
       /*  const studentNames = getStudentNames();
        return studentNames.length; */
        return this.pupils.length
    }
}

const studentList = ["Ade", "Lola", "Bola", "Tola"];
const HC = new HatchDevClass(studentList);
console.log(HC.getStudentNames());
//console.log(HC['getTotalNumberOfStudents']());  why does this work??????


const championsLeague = ['arsenal', 'bayern', 'real-madrid', 'man-city'];
const disqualified: string[]= [];

//IMPERATIVE APPROACH example`
//Filter disqualified people from champions league
for(let i =0 ; i < championsLeague.length; i++){
    const club = championsLeague[i];
    if (club == "arsenal" || club == "man-city"){
        disqualified.push(club);
    }
}

console.log(disqualified)

//DECLARATIVE APPROACH - hiding how its working - better to use
championsLeague.filter((club: string) =>{
    if (club == "arsenal" || club == "man-city"){
        disqualified.push(club);
    }
}) 