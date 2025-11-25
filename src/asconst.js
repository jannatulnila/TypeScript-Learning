//
// enum userRole {
//     Admin = "Admin",
//     Editor = "Editor",
//     Viewer = "Viewer"
// }
var userRole = {
    Admin: "Admin",
    Editor: "Editor",
    Viewer: "Viewer"
};
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
var canEdit = function (role) {
    if (role === userRole.Admin || role === userRole.Editor) {
        return true;
    }
    else
        return false;
};
var isEditPermissable = canEdit(userRole.Admin);
console.log(isEditPermissable);
