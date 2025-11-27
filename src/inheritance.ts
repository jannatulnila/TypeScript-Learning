class Parent{
        name:string;
    age:number;
    address: string

    constructor(name:string, age:number,
    address: string){
        this.name= name
         this.age= age;
         this.address = address
    }

    getSleep(numberOfHours: number){
        console.log(`${this.name} ${numberOfHours} hours ghumay`);
    }
}

class Student extends Parent {}  //

const student1 = new Student("mr.nobin", 18, "Bangladesh")

student1.getSleep(15)

class Teacher extends Parent {
    designation: string

    constructor(name:string, age:number, address:string, designation: string){

        super(name, age, address);
         this.designation= designation //own property
    }
    //common method
   

    //own method
    takeClass(numberOfHours:number){
        console.log(`${this.name} ${numberOfHours} eto ghonta class ney`);
    }
}

const teacher1 = new Teacher("Robiul", 25, "Bangladesh", "senior teacher")
teacher1.takeClass(2)