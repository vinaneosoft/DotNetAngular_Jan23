class BankAccount{
    accNum:number
    custId:number
    accType:string;balance:number;

//Multiple constructor implementations are not allowed.
    constructor(accNum=0,custId=0,type="savings",bal=0){
        this.accNum=accNum;
        this.custId=custId;
        this.accType=type;
        this.balance=bal;
    }

    deposit(amount:number):number
    {
        if(amount>0)
            this.balance=this.balance+amount;
        else
            throw new Error("Invalid Deposit Amount");
            
        return this.balance;  
    }
    withdraw(amount:number):number {
        if(amount<=this.balance)
            this.balance=this.balance-amount;
        else
            throw new Error("Invalid Withdraw Amount");
        return this.balance;
    }

    getDetails():string{
       // return "Account Num:"+this.accNum +" Customer Id:"+ this.custId+" Type:"+ this.accType+" Balance:"+this.balance;
    
        return `Accunt Num:${this.accNum} Cust Id:${this.custId} Type:${this.accType} Balance:${this.balance}`
    }
}

//document.write("<b>Message on broswer</b>");
let account1:BankAccount;
account1=new BankAccount(); // implicit call goes to default constructor
console.log(account1.accNum);
console.log(account1.custId);
console.log(account1.accType);
console.log(account1.balance);
account1.balance=56000; // state change

let b=account1.withdraw(4000);
console.log("balance after withdraw:"+b);
console.log("balance after withdraw:"+account1.balance);

console.log(account1);
console.log(JSON.stringify(account1));
let account2=new BankAccount(343434,1111,"Savings",4000);
console.log(account2.accNum);
console.log(account2.custId);
console.log(account2.accType);
console.log(account2.balance);

let b2=account2.deposit(10000);
console.log("balance after depsit:"+b2);
console.log("balance after depsit:"+account2.balance);

console.log(account1.getDetails());
console.log(account2.getDetails());
