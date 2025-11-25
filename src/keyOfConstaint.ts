// key of: type operator

type RichPeoplesVehicle ={
    car: string,
    bike: string,
    cng: string
}

type MyVehicle1 = "bike"|"car" | "cng";
type MyVehicle2 = keyof RichPeoplesVehicle;

const MyVehicle : MyVehicle1= "bike";

//keyof constraint function

type User ={
    id:number,
    name: string,
    address: {
        city:string,
        country:string
    }
}
const user:User={
    id:12,
    name: "nila",
    address: {
        city:"Gazipur",
        country:"Bangladesh"
    }
}

// const myId = user.id;
const myId = user["id"]
const myName = user["name"];
const address = user["address"];
// console.log({myId, myName, address});


const getPropertyFromObj =<X> (obj:X, key: keyof X)=>{
    return obj[key]
}

const result = getPropertyFromObj(user, "name")
console.log(result);

const product ={
    brand: "Apple",
}
const resul2 = getPropertyFromObj(product, "brand")
console.log(resul2);

const student={
    id:1,
    class: "ten"
}
const resul3 = getPropertyFromObj(student, "id")
console.log(resul3);