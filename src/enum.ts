//enum

//set of fixed string leteral 

// type userRole  = "Admin" | "Editor" | "Viewer";

enum userRole {
    Admin = "Admin",
    Editor = "Editor",
    Viewer = "Viewer"
}

const canEdit = (role: userRole)=>{
    if(role === userRole.Admin || role === userRole.Editor){
        return true;    }
    else return false   
}

const isEditPermissable = canEdit(userRole.Admin);
console.log(isEditPermissable);
