//spread operator

const friends= ['Rohim','Karim']

const schoolFriends = ['Priti', 'ritu','diya']

const collageFriend= ['rini', 'tini', 'situ']

// const  friends= 

friends.push(...schoolFriends)

console.log(friends);

const user= {name:"nila", phoneNumber:'"0134756347'}

const otherInfo = { hobby: "outing", favoriteColor: "blue"
}

const userInfo = {...user, ...otherInfo};

console.log(userInfo);


//rest operation

const sendInvite = (...friends:string[])=>{
    // console.log(`Sent invitation to ${friends1}`);
    // console.log(`Sent invitation to ${friends2}`);
    // console.log(`Sent invitation to ${friends3}`);
    friends.forEach((friends:String) => console.log(`Sent invitation to ${friends} `))


}

sendInvite("bani", "tani"," funny","fgf")