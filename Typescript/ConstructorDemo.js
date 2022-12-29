var BankAccount = /** @class */ (function () {
    //Multiple constructor implementations are not allowed.
    function BankAccount(accNum, custId, type, bal) {
        if (accNum === void 0) { accNum = 0; }
        if (custId === void 0) { custId = 0; }
        if (type === void 0) { type = "savings"; }
        if (bal === void 0) { bal = 0; }
        this.accNum = accNum;
        this.custId = custId;
        this.accType = type;
        this.balance = bal;
    }
    return BankAccount;
}());
//document.write("<b>Message on broswer</b>");
var account1;
account1 = new BankAccount(); // implicit call goes to default constructor
console.log(account1.accNum);
console.log(account1.custId);
console.log(account1.accType);
console.log(account1.balance);
console.log(account1);
console.log(JSON.stringify(account1));
var account2 = new BankAccount(343434, 1111, "Savings", 4000);
console.log(account2.accNum);
console.log(account2.custId);
console.log(account2.accType);
console.log(account2.balance);
