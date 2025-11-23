//object destructuring
//array destructuring

const user = {
    id: 123,
    name:{
        firstName:"Jannatul",
        middleName:"Fardous",
        lastName: "Nila"
    },
    gender: "female",
    favoriteColor:"black"
}

// const myFavoriteColor = user.FavoriteColor;
// const myMiddleName= user.name.MiddleName

const {favoriteColor : myFavoriteColor, name:{middleName: myMiddleName} } = user;

// console.log(myMiddleName);

const friends = ["ritu", "rami", "ikta"]

const [, , myBestFriend] = friends;

console.log(myBestFriend);