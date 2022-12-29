var a;
a = "hello";
a = 456;
a = true;
var b;
b = 78;
b = 90;
//b="hello";
var myName;
myName = "Vina";
myName = new String("Pooja");
// number, boolean, string, any
var BankAccount = /** @class */ (function () {
    function BankAccount() {
    }
    return BankAccount;
}());
var account1;
account1 = new BankAccount(); // implicit call goes to constructor
console.log(account1.accNum);
console.log(account1.custId);
console.log(account1.accType);
console.log(account1.balance);
