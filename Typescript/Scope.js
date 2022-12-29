/*private scope, public scope, protected scope
private: property accessible only within a class
public : full visibility : bydefault
protected : visible in hierarchy
*/
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
var account1 = new BankAccount(123456, 1111, "Savings", 67000);
var account2 = new BankAccount(654321, 2222, "Savings", 68000);
console.log(account1.balance);
console.log(account1[3]);
account2.accType = "Salary";
