interface CollectInteface{
    add(ele:number):void;
    remove():number;
}

class Stack implements CollectInteface{
    add(ele: number): void {
       // lgic of addding the element in Stack
    }
    remove(): number {
        // logic of remving element from stack and return removed element
        return 0;
    }

}


class Queue implements CollectInteface{
    add(ele: number): void {
        // lgic of addding the element in queue
    }
    remove(): number {
       // logic of remving element from queue  and return removed element
       return 0;
    }
    
}