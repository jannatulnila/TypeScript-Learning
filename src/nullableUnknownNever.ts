// nullable type

const getUser =( input:string | null )=>{
    if(input){
        console.log(`Form Db:${input}`);
    }else{
        console.log("Form Db: All User");
    }
}

getUser(null)

//unknown type

const ProductDiscount = (input: unknown)=>{
    if(typeof input === "number"){
        const discountedPrice = input * 0.2;
        console.log(discountedPrice);
    }else if(typeof input === "string"){
        const [discountedPrice] = input.split(' ');
        console.log(Number(discountedPrice) * 0.2);
    }else{
        console.log("wrong input");
    }
}

ProductDiscount(100)
ProductDiscount("100 tk")
ProductDiscount(null)

//void

const throwError = (msg:string):never =>{
    throw new Error(msg);
}

throwError("Error...")