/*private scope, public scope, protected scope
private: property accessible only within a class
public : full visibility : bydefault
protected : visible in hierarchy
*/

 class BankAccount{
    private  accNum:number
    private custId:number
    private accType:string;
    private balance:number;

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


    get acno(){
        return this.accNum;
    }

    set acno(accNum:number){
        this.accNum=accNum;
    }


    get bal(){
        return this.balance;
    }
    // please add set

    set actype(accType:string){
        this.accType=accType;
    }
    // add get

    // get set for custid

}


let account1=new BankAccount(123456,1111,"Savings",67000);
let account2=new BankAccount(654321,2222,"Savings",68000);

console.log(account1.bal);
console.log(account1[3]);


account2.actype="Salary";


