type userRole = "admin"| "user" | "guest"

const getDashboard = (role: userRole)=>{
    if(role = "admin"){
        return "admin Dashboard"
    }
    else if(role="user"){
        return "user Dashboard"
    }
    else{
        return "guest Dashboard"
    }
}

getDashboard("admin")

//intersection

type Employee = {
    id: string ,
    name: string,
    phoneNumber: string
}

type Manager = {
    desihnation: string ,
    teamSize: number
}

type EmployeeManager = Employee & Manager

const ChowdhuryShaheb: EmployeeManager = {
    id: "1",
    name: "Chowdhury Shaheb",
    phoneNumber: "0134567890",
    desihnation: "General Manager",
    teamSize: 20 

}