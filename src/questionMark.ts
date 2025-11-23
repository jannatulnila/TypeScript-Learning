// ? : ternary operator

// ?? :nullish coalescing operator :null or undefined
// ?. : optional chaining operator

const userAge = 21

 const biyerJonnoEligible = (age :number) =>{
    // if(age >= 21){
    //     console.log(" You are eligible");
    // }
    // else{
    //     console.log("You are not eligible");
    // }

    const result = age >= 21 ? "You are eligible" : "You are not eligible"

    console.log(result);}

biyerJonnoEligible(21)

const userTheme = null;

const  selectedTheme = userTheme ?? "light theme" ;

console.log(selectedTheme);

const isAuthenticated = null;

const resultWithTernary = isAuthenticated ? isAuthenticated: "You are guest!";

const resultWithNalish = isAuthenticated ?? "You are guest!";

console.log({resultWithTernary}, {resultWithNalish});
 

// optional chaining

const user :{
    address: {
        city:string;
        town: string;
        postalCode?: string;

    }
}={
    address:{
        city:"Gazipur",
        town:"Narayanganj"

    }
}

const postalCode = user?.address?.postalCode;
console.log(postalCode)