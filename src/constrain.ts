//constrain: 

type Student ={id:number, name:string, class:string ,dateOfBirth: string}
const addStudentToCourse =<T extends Student> (studentInfo:T)=>{
    return{
        course:"Mext Level Web Development",
        ...studentInfo,

    }
}

const student1={
    id:1,
    name:"nila",
    hasPen: true,
    dateOfBirth: "2000-01-01",
    class: "10th"
};
const student2={
    id:1,
    name:"Rifat",
    hasPen: true,
    isMarried: false
}
const result = addStudentToCourse(student1);
console.log(result);