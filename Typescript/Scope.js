/*private scope, public scope, protected scope
private: property accessible only within a class
public : full visibility : bydefault
protected : visible in hierarchy
*/
class BankAccount {
    //Multiple constructor implementations are not allowed.
    constructor(accNum = 0, custId = 0, type = "savings", bal = 0) {
        this.accNum = accNum;
        this.custId = custId;
        this.accType = type;
        this.balance = bal;
    }
    deposit(amount) {
        if (amount > 0)
            this.balance = this.balance + amount;
        else
            throw new Error("Invalid Deposit Amount");
        return this.balance;
    }
    withdraw(amount) {
        if (amount <= this.balance)
            this.balance = this.balance - amount;
        else
            throw new Error("Invalid Withdraw Amount");
        return this.balance;
    }
    getDetails() {
        // return "Account Num:"+this.accNum +" Customer Id:"+ this.custId+" Type:"+ this.accType+" Balance:"+this.balance;
        return `Accunt Num:${this.accNum} Cust Id:${this.custId} Type:${this.accType} Account Balance:${this.balance}`;
    }
    get acno() {
        return this.accNum;
    }
    set acno(accNum) {
        this.accNum = accNum;
    }
    get bal() {
        return this.balance;
    }
    // please add set
    set actype(accType) {
        this.accType = accType;
    }
}
let account1 = new BankAccount(123456, 1111, "Savings", 67000);
let account2 = new BankAccount(654321, 2222, "Savings", 68000);
console.log(account1.bal);
account2.actype = "Salary";
console.log(account2.getDetails());
class Student {
    constructor(studId = 0, studName = "abc", studStandard = "1st") {
        this.studId = studId;
        this.studName = studName;
        this.studStandard = studStandard;
    }
    getDetails() {
        return "id:" + this.studId; // complete it
    }
}
let student = new Student();
console.log(JSON.stringify(student));
let student2 = new Student(23, "Pooja", "6th");
console.log(JSON.stringify(student2));
//console.log(student2.studId);
