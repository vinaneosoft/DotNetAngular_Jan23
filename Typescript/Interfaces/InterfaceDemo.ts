interface CollectInteface{
    add(ele:number):void;
    remove():number;
    display():void;
}

class Stack implements CollectInteface{
   
    ar=new Array(10);
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
    display(): void {
        
    }
    add(ele: number): void {
        // lgic of addding the element in queue
    }
    remove(): number {
       // logic of remving element from queue  and return removed element
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