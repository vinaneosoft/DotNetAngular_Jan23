class BankAccount{
    accNum:number;
    custId:number;
    accType:string;
    balance:number;

//Multiple constructor implementations are not allowed.
    constructor(accNum:number=0,custId:number=0,type:string="savings",bal:number=0){
        this.accNum=accNum;
        this.custId=custId;
        this.accType=type;
        this.balance=bal;
    }
}

//document.write("<b>Message on broswer</b>");
let account1:BankAccount;
account1=new BankAccount(); // implicit call goes to default constructor
console.log(account1.accNum);
console.log(account1.custId);
console.log(account1.accType);
console.log(account1.balance);
console.log(account1);
console.log(JSON.stringify(account1));
let account2=new BankAccount(343434,1111,"Savings",4000);
console.log(account2.accNum);
console.log(account2.custId);
console.log(account2.accType);
console.log(account2.balance);