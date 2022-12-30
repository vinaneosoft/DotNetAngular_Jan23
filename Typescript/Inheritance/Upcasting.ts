class Bird{
    sleep():void{
        console.log("All Birds sleep");
        
    }
}
class Sparrow extends Bird{
    sleep():void{
        console.log("Sparrow sleeps at night");
        
    }
}
class Bat extends Bird{
    sleep():void{
        console.log("Bat sleeps at day");  
    }
}
let sparrow=new Sparrow();
let bat=new Bat();
checkSleepType(bat);


function checkSleepType(bird:Bird){
    bird.sleep(); // polymorhipm // override
}



