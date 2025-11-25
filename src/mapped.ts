//mapped type

//map

const arrayOfNum : number[] = [1,2,3,4];
const arrayOfString: string[] = ["1","2", "3"];

const arrayOfStringUsingMap :string[] = arrayOfNum.map((num)=> num.toString())

console.log(arrayOfStringUsingMap);

type AreaOfNum = {
    height:number;
    width:number
}

type  Height = AreaOfNum["height"]

// type AreaOfString = {
    // height:string;
    // width:string
// }

type AreaOfString={
    [key in keyof AreaOfNum]:number
}
type Area <T>={
    [key in keyof T]:T[key]
}

const Area1 : Area<{height:string;
    width:boolean}> ={
        height:"50",
    width:false
    }