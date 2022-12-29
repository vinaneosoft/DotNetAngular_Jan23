
let a:any;
a="hello";
a=456;
a=true;

var b:number;
b=78; b=90;
//b="hello";

let myName:String;
myName="Vina";
myName=new String("Pooja");

// number, boolean, string, any
class BankAccount{
        accNum:number;
        custId:number;
        accType:string;
        balance:number;
}

let account1:BankAccount;

account1=new BankAccount(); // implicit call goes to constructor
console.log(account1.accNum);
console.log(account1.custId);
console.log(account1.accType);
console.log(account1.balance);

