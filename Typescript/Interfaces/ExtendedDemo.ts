
interface A{
    a:number;  test():void;
   
    show():void
}

interface C{
    show():void;
    demo(n:number):void;
}

interface B extends A{
    b:string;
    demo():void;
}
/*Interface 'E' cannot simultaneously extend types 'A' and 'C'.
  Named property 'show' of types 'A' and 'C' are not identical.*/
interface E extends A,C{
   e:number; 
}
// multiple inheritance is supported in interfaces by following rule


class T implements B{
    show(): void {
        throw new Error("Method not implemented.");
    }
    b:string;
    a:number;
    demo(): void {
        
    }
    test(): void {
        
    }

    xxx(){

    }
}
class M implements B{
    show(): void {
        throw new Error("Method not implemented.");
    }
    b: string;
    demo(): void {
        throw new Error("Method not implemented.");
    }
    a: number;
    test(): void {
        throw new Error("Method not implemented.");
    }
    
}

let nn:B;
nn=new T();

nn=new M();

class D implements C,B{
    b: string;
    demo(): void {
       console.log("Demo called");
       
    }
    a: number;
    test(): void {
        throw new Error("Method not implemented.");
    }
    show(): void {
        throw new Error("Method not implemented.");
    }

}

let d=new D();
d.demo();

class X implements C{
    show(): void {
        throw new Error("Method not implemented.");
    }
    demo(n:number): void {
        throw new Error("Method not implemented.");
    }
}



