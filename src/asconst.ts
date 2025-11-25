// enum userRole {
//     Admin = "Admin",
//     Editor = "Editor",
//     Viewer = "Viewer"
// }
const userRole = {
    Admin : "Admin",
    Editor : "Editor",
    Viewer : "Viewer"
} as const;

/*
as const dile :
   readonly Admin : "Admin",
   readonly Editor : "Editor",
   readonly Viewer : "Viewer"

   1.typeof operator
   2. keyof operator


   typeof operator
   const user ={
     id:222,
     name:"nila"
   }
   typeof operator
   const user ={
     id:number,
     name: string
   }


*/

const canEdit = (role:(typeof userRole)[keyof typeof userRole])=>{
    if(role === userRole.Admin || role === userRole.Editor){
        return true;    }
    else return false   
}

const isEditPermissable = canEdit(userRole.Admin);
console.log(isEditPermissable);
