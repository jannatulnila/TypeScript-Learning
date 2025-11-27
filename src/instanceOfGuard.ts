class Person {
    name:string;

    constructor(name:string){
        this.name =name
    }
    getSleep(numofhours: number){
        console.log(`${this.name} doinik ${numofhours} ghumai`);
    }
}

class Student extends Person{
    constructor(name:string){
        super(name)
    }

    doStudy(numofhours: number){
        console.log(`${this.name} doinik ${numofhours} study kore`);
    }
}

class Teacher extends Person{
    constructor(name:string){
        super(name)
    }

    takeClass(numofhours: number){
        console.log(`${this.name} doinik ${numofhours} class ney`);
    }
}

//function guard
const isStudent = (user:Person)=>{
    return user instanceof Student;  //user is student
}

const isTeacher = (user:Person)=>{
    return user instanceof Teacher;  //user is teacher
}

const getUserInfo = (user: Person)=>{
    if(isStudent(user)){
        user.doStudy(10)
    }else if(isTeacher(user)){
        user.takeClass(5)
    }else{
        user.getSleep(15)
    }
}

const student1 = new Student("me.student");
const teacher1 = new Teacher("me.student");
const person1 = new Person("me.person")

getUserInfo(student1)