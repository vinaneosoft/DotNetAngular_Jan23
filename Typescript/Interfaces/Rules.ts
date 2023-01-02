class A{

}
class B extends A{

}

class Employee{
    protected showDetails(n:number):A{
        return new A();
    }
}
class Manager extends Employee{
    showDetails(m:number):B{
        return new B();
    }

}
let manager =new Manager();
manager.showDetails(67);
// formal parameters of method u can reduce, but can not add more
// if reducing scope then not allowed, scope if increasing  then allowed
// if super class method is void then subclass overriding method can return anything
// if super class method is returning primitive : same should be in subclass overriding  method 
// number, string, boolean
// if return type is custom then co variants are allowed