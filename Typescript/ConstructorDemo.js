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
    BankAccount.prototype.deposit = function (amount) {
        if (amount > 0)
            this.balance = this.balance + amount;
        else
            throw new Error("Invalid Deposit Amount");
        return this.balance;
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (amount <= this.balance)
            this.balance = this.balance - amount;
        else
            throw new Error("Invalid Withdraw Amount");
        return this.balance;
    };
    BankAccount.prototype.getDetails = function () {
        // return "Account Num:"+this.accNum +" Customer Id:"+ this.custId+" Type:"+ this.accType+" Balance:"+this.balance;
        return "Accunt Num:".concat(this.accNum, " Cust Id:").concat(this.custId, " Type:").concat(this.accType, " Balance:").concat(this.balance);
    };
    return BankAccount;
}());
//document.write("<b>Message on broswer</b>");
var account1;
account1 = new BankAccount(); // implicit call goes to default constructor
console.log(account1.accNum);
console.log(account1.custId);
console.log(account1.accType);
console.log(account1.balance);
account1.balance = 56000; // state change
var b = account1.withdraw(4000);
console.log("balance after withdraw:" + b);
console.log("balance after withdraw:" + account1.balance);
console.log(account1);
console.log(JSON.stringify(account1));
var account2 = new BankAccount(343434, 1111, "Savings", 4000);
console.log(account2.accNum);
console.log(account2.custId);
console.log(account2.accType);
console.log(account2.balance);
var b2 = account2.deposit(10000);
console.log("balance after depsit:" + b2);
console.log("balance after depsit:" + account2.balance);
console.log(account1.getDetails());
console.log(account2.getDetails());
