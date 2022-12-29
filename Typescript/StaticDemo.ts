class AxisAccount{
    accNum:number
    custId:number
    accType:string;
    balance:number;
    static count:number;
    static bankName:string;
    static{
        console.log("inn static block");
        AxisAccount.bankName="Axis Bank";  // this also allowed
        this.count=0;
    }
//Multiple constructor implementations are not allowed.
   constructor(accNum=0,custId=0,type="savings",bal=0){
        this.accNum=accNum;
        this.custId=custId;
        this.accType=type;
        this.balance=bal;
        AxisAccount.count++;
    }
    deposit(amount:number):number
    {
        if(amount>0)
            this.balance=this.balance+amount;
        else
            throw new Error("Invalid Deposit Amount");
            
        return this.balance;  
      //  AxisAccount.bankName;// this not allowed
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
    static getBank(){
        return AxisAccount.bankName; // this also allowed
    }

    static test(acc:AxisAccount){
        console.log(acc.accNum);
        console.log(acc.custId); // instance variables must be accessed via object in static method
        console.log(this.bankName);
        
    }
}

//console.log(AxisAccount.bankName);
console.log(AxisAccount.getBank());
console.log(AxisAccount.count);
let account1=new AxisAccount(111234,5656,"Savings",56000); // 1 
let account2=new AxisAccount(111237,1656,"Savings",56000); // 2
let account3=new AxisAccount(111234,2656,"Savings",56000); // 3
let account4=new AxisAccount(111231,3656,"Savings",56000); // 4
let account5=new AxisAccount(111238,4656,"Savings",56000); // 5
let account6=new AxisAccount(111239,6656,"Savings",56000); // 6
console.log(AxisAccount.count);

AxisAccount.bankName="Axos Bank";



AxisAccount.test(account1);