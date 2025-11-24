let anything: any;

anything = "nila";

const kgToGmConverter = (input: string | number): string |number |undefined =>{
   if(typeof input === "number"){
    return input * 1000;
   }else if(typeof input === "string"){
    const [value] = input.split(" ")
    return `Converted output is: ${Number(input) *1000}`
   }
}
//input dile ja ashe value dile tai ashe

const result1 = kgToGmConverter(2) as number
console.log({result1});
const result2 = kgToGmConverter("2") as string
console.log({result2});


type CustomeError = {
    message:string
}
try{

}catch(err){
    console.log((err as CustomeError).message);
}



