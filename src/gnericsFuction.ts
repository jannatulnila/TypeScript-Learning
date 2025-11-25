//generic Function

// const  createArrayWithString = (value: string)=>[value];
// const  createArrayWithNumber = (value: number)=>[value];
// const  createArrayWithUserObject = (value:{
//     id:number,name:string
// })=>{
//     return [value];
// };


const createArrayWithGeneric = <T>(value: T)=>{
    return [value];
}

const arrString = createArrayWithGeneric("Apple");
const arrNum = createArrayWithGeneric(100);
const arrUserObj = createArrayWithGeneric({id:1,name:"John"});


//tuple
const  createArrayWithTuple =(params1: string, params2:string)=>[params1,params2];


const  createArrayWithTupleWithGeneric = <x,y>(params1: x, params2:y)=>[params1,params2];

const res1 = createArrayWithTupleWithGeneric<string,string>("Hello","World");
const res2 = createArrayWithTupleWithGeneric<number,string>(100,"Days");
const res3 = createArrayWithTupleWithGeneric<boolean,object>(true,{name:"John"});


const addStudentToCourse =<T> (studentInfo:T)=>{
    return{
        course:"Mext Level Web Development",
        ...studentInfo,

    }
}

const student1={
    id:1,
    name:"nila",
    hasPen: true
};
const student2={
    id:1,
    name:"Rifat",
    hasPen: true,
    isMarried: false
}
const result = addStudentToCourse(student1);
console.log(result);