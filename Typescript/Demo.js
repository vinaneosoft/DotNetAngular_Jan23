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
    BankAccount.prototype.test = function () {
        return "hi";
    };
    return BankAccount;
}());
//document.write("<b>Message on broswer</b>");
var account1;
account1 = new BankAccount(); // implicit call goes to constructor
console.log(account1.accNum);
console.log(account1.custId);
console.log(account1.accType);
console.log(account1.balance);
account1.accNum = 67799; // state change
account1.custId = 67;
account1.accType = "current";
account1.balance = 4000;
console.log(account1.accNum);
console.log(account1.custId);
console.log(account1.accType);
console.log(account1.balance);
console.log(account1);
console.log(JSON.stringify(account1));
