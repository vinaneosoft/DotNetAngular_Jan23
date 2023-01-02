

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
