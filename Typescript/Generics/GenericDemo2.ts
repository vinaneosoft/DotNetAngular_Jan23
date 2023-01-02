
class MyObject<T>{
    private object:T;

    constructor(object:T){
        this.object=object;
    }
    get ob():T{
        return this.object;
    }
    set ob (object:T){
        this.object=object;
    }

}
let myobject1=new MyObject<Number>(45);
 myobject1.ob

 let myobject2=new MyObject<String>("hello");
 myobject2.ob


interface Emp<T>{
    id:T;
}

class Trainer implements Emp<Number>{
    id:Number;
}
class Developer implements Emp<String>{
    id:String
}

let t1=new Trainer();
t1.id=67
let t2=new Trainer();
t1.id=89
let t3=new Trainer();
t1.id=67

let d1=new Developer();
d1.id="D2";



