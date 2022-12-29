var _a;
var _this = this;
var AxisAccount = /** @class */ (function () {
    //Multiple constructor implementations are not allowed.
    function AxisAccount(accNum, custId, type, bal) {
        if (accNum === void 0) { accNum = 0; }
        if (custId === void 0) { custId = 0; }
        if (type === void 0) { type = "savings"; }
        if (bal === void 0) { bal = 0; }
        this.accNum = accNum;
        this.custId = custId;
        this.accType = type;
        this.balance = bal;
        AxisAccount.count++;
    }
    AxisAccount.prototype.deposit = function (amount) {
        if (amount > 0)
            this.balance = this.balance + amount;
        else
            throw new Error("Invalid Deposit Amount");
        return this.balance;
        //  AxisAccount.bankName;// this not allowed
    };
    AxisAccount.prototype.withdraw = function (amount) {
        if (amount <= this.balance)
            this.balance = this.balance - amount;
        else
            throw new Error("Invalid Withdraw Amount");
        return this.balance;
    };
    AxisAccount.prototype.getDetails = function () {
        // return "Account Num:"+this.accNum +" Customer Id:"+ this.custId+" Type:"+ this.accType+" Balance:"+this.balance;
        return "Accunt Num:".concat(this.accNum, " Cust Id:").concat(this.custId, " Type:").concat(this.accType, " Balance:").concat(this.balance);
    };
    AxisAccount.getBank = function () {
        return AxisAccount.bankName; // this also allowed
    };
    AxisAccount.test = function (acc) {
        console.log(acc.accNum);
        console.log(acc.custId); // instance variables must be accessed via object in static method
        console.log(this.bankName);
    };
    return AxisAccount;
}());
_a = AxisAccount;
(function () {
    console.log("inn static block");
    AxisAccount.bankName = "Axis Bank"; // this also allowed
    _a.count = 0;
})();
//console.log(AxisAccount.bankName);
console.log(AxisAccount.getBank());
console.log(AxisAccount.count);
var account1 = new AxisAccount(111234, 5656, "Savings", 56000); // 1 
var account2 = new AxisAccount(111237, 1656, "Savings", 56000); // 2
var account3 = new AxisAccount(111234, 2656, "Savings", 56000); // 3
var account4 = new AxisAccount(111231, 3656, "Savings", 56000); // 4
var account5 = new AxisAccount(111238, 4656, "Savings", 56000); // 5
var account6 = new AxisAccount(111239, 6656, "Savings", 56000); // 6
console.log(AxisAccount.count);
AxisAccount.bankName = "Axos Bank";
AxisAccount.test(account1);
