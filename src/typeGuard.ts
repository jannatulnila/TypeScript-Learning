//type guard

//in typeof
type Alphanumaric = number | string;
const add = (num1: Alphanumaric, num2: Alphanumaric) => {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    } else {
        num1.toString() + num2.toString()
    }
};

add(2, 2)
add(2, "2")
add("2", 2)

//inGard
type NormalUser = {
    name: String;
}
type AdminUser = {
    name: string;
    role: "Admin"
}

const getuserInfo = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
        console.log(`${user.name} and his role is: ${user.role}`);
    }
    else{
        console.log(`${user.name}`);
    }
}

getuserInfo({name:"Nila", role:"Admin"})