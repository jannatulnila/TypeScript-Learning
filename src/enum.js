//enum
//set of fixed string leteral 
// type userRole  = "Admin" | "Editor" | "Viewer";
var userRole;
(function (userRole) {
    userRole["Admin"] = "Admin";
    userRole["Editor"] = "Editor";
    userRole["Viewer"] = "Viewer";
})(userRole || (userRole = {}));
var canEdit = function (role) {
    if (role === userRole.Admin || role === userRole.Editor) {
        return true;
    }
    else
        return false;
};
var isEditPermissable = canEdit(userRole.Admin);
console.log(isEditPermissable);
