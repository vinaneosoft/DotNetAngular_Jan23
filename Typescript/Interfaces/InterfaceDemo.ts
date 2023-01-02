interface CollectInteface{
    ar:number[];  // varibale signature
    size?:number;   // optional variable
    add(ele:number):void;  // method signature
    remove():number;
    display():void;
    test?():void;  // optional method
}

class Stack implements CollectInteface{
    size=10;
    ar=new Array(this.size);
    top=-1;
    add(ele: number): void {
        if(this.top==this.ar.length-1){
            throw new Error("Stack Full");
        }
      this.top++;
      this.ar[this.top]=ele;
    }
    remove(): number {
        if(this.top==-1){
            throw new Error("Stack Empty");
        }
        let ele=this.ar[this.top];
        this.top--;
        return ele;
    }
    display(): void {
        for(let i=this.top;i>=0;i--){
            console.log(this.ar[i]);
        }
    }

}


class Queue implements CollectInteface{
    ar=new Array(10);
    display(): void {
        console.log(("queue display method called"));
    }
    add(ele: number): void {
      console.log(("queue add method called"));
      
    }
    remove(): number {
        console.log(("queue removed method called"));
       return 0;
    }
    
}

let collection:CollectInteface;

collection=new Stack();

collection.add(67);
collection.add(17);
collection.add(67);
collection.add(68);
collection.add(670);
collection.display();
collection.remove();
console.log("After removing....");

collection.display();
collection=new Queue();

collection.add(78);