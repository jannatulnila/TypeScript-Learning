// oop- abstraction
//idea
//implement pore korbo

/*    
1.interface
2.abstract class

*/

// interface MediaPlayer{
    // play():void;
    // pause(): void;
    // stop():void;
// }

// class Musicplayer implements MediaPlayer{
//     play(){
//         console.log("playing song...");
//     }
//     pause(){
//         console.log("music paused...");
//     }
//     stop(){
//         console.log(`Music Stopped...`);
//     }
// }

// const nilaPlayer = new Musicplayer();
// nilaPlayer.stop()

//abstract class
abstract class MediaPlayer{
    abstract play():void;
    abstract pause(): void;
    abstract stop():void;
}

class NilaPlayer extends MediaPlayer{
    play(){
        console.log(`playing music...`);
    }
    pause() : void{
      console.log(`music paused`);  
    }
    stop() : void{
        console.log(`music stopped`);
    }
}  

const MilaPlayer1 = new NilaPlayer();
MilaPlayer1.play()