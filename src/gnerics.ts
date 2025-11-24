//dynamically generalize

type GenericArray<T> = Array<T>;




// const friends : string[]= ['Rohim','Karim','Jabbar'];
const friends : GenericArray<string>= ['Rohim','Karim','Jabbar'];
// const rollNumbers : number[]= [12,34,45];
const rollNumbers : GenericArray<number>= [12,34,45];
// const isEligibleList : boolean[]= [true, false, true];
const isEligibleList : Array<boolean>= [true, false, true];

const UserList: GenericArray<{name: string, age: number}> = [
  {
    name: "Rifat",
    age: 21,
},
{
    name: "Ashik",
    age: 22,
}
]


type Coordinates<X,Y> = [X, Y];
const coordinates1 : Coordinates<number, number> = [20,30];
const coordinates2 : Coordinates<string, string> = ["20","30"];

