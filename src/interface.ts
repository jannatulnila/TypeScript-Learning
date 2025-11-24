type User ={
    name: string,
    age: number,
}

//interface: object type data: array, object, fuction
interface IUser{
    name:string,
    age:number,
}
type Role = {
    role: "admin" | "user" ;
}
type UsersWithRole = User &  Role 

interface IUsersWithRole extends User{
    role: "admin" | "user";
}

const user1: IUsersWithRole={
    name: "Rifat",
    age: 21,
    role: "admin"
}
const user2: IUser={
    name: "Ashik",
    age: 22,
}

type IsAdmin =boolean;


const IsAdmin :IsAdmin = false;


// fuction interface
type Add = (num1:number, num2:number) => number;

interface IAdd{
    (num1:number, num2:number) : number;
}

const add : IAdd = (num1, num2) => num1 + num2;

type Friends = string[];
interface IFriends{
    [index: number]: string;
}
const Friends: IFriends = ["A", 'B', 'C'];