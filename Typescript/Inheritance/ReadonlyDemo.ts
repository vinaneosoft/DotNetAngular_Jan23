
const v=345;  // module variable constants


class Circle{
    readonly radius:number;
    static readonly  pie=3.142;  // once initialized, no change in value
   static{
    //Circle.pie=3.14;  //not allowed
   }

    constructor(radius:number){
        this.radius=radius;
    }
}


//Circle.pie=3.14;  //not allowed  // static variable constants


let circle1=new Circle(23);
let circle2=new Circle(13);
let circle3=new Circle(24);
let circle4=new Circle(25);
//circle1.radius=45;  // instance variable constants


function demo(){
    const  m=10;  // local variable constants
}