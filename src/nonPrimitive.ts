// array, object


//ts-tuple

let bazarList: string[] = ['eggs ,"mila', 'suger']

bazarList.push()

let mixedArr: (string | number)[] = ["eggs", 12, "milk", "suger", 12]
mixedArr.push(true)

//tuple

let coordinates: [number, number] = [10, 20, 22]

let couple :[string, string] = ['wife', 'Husband']


let nilaNameAndNumber: [string, number] = ["nila", 20]

//reference type: object

const user : {
    // organization: "pw skills",
     //value=> type: literal types--string defined thakle ta literal type hoy
    readonly organization: "pw skills"
    //access modifier
    firstName: string,
    middleName?: string, //optional type
    lastName: string,
    isMarried: boolean,
} = {
    organization: "pw skills",
    firstName: "nila",
    lastName: "khan",
    isMarried: false,
}

user.organization= "ballo"