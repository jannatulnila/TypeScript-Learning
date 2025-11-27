// class Animal {
//     name:string;
//     species:string;
//     sound: string

//     constructor(name:string,  species:string, sound: string){
//         this.name = name;
//         this.species = species;
//         this.sound = sound
//     }

//     makesound(){
//         console.log(`${this.name}The animal is makeing sound: ${this.sound}`);
//     }

// }


//perameter properties
class Animal {
    constructor(public name:string, public species:string,public sound: string){
      
    }

    makesound(){
        console.log(`${this.name}The animal is makeing sound: ${this.sound}`);
    }

}

const dog = new Animal('dogesh', "dog", "ghew ghew");

const cat = new Animal('catt vai', "cat", "meaw meaw")
cat.makesound();

