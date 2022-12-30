class Employee{
    empId:number;
    empName:string;
    empSalary:number;
    departmentId:string;
    constructor(empId=0,empName="AAA",empSalary=0,departmentId="BB"){
        console.log("in Employee P constructor");
        this.empId=empId;
        this.empName=empName;
        this.empSalary=empSalary;
        this.departmentId=departmentId;
    }

    getMonthlySalary():number{
      return this.empSalary;
    }
    getDetails():string{
      return `Id: ${this.empId}, Name: ${this.empName}, Salary: ${this.empSalary}, Department Id: ${this.departmentId}`
    }
  }
  class Manager extends Employee{
    extraPay:number;
    managingDepartId:string;
      constructor(id=0,name="AAA",salary=0,did="BB",extraPay=0,managingDepartId="BB"){
        super(id,ename,salary,did);  // super class P constructor 
        console.log("in Manager def constructor");
        this.extraPay=extraPay;
        this.managingDepartId=managingDepartId;    
      }    
      getMonthlySalary():number{
        return this.empSalary+this.extraPay;
      }
      getDetails():string{
          return     `${super.getDetails()}   Extra Pay: ${this.extraPay}, Which department Manager: ${this.managingDepartId}`
      }
  }

  let id=555;
  let ename="Krishna";
  let salary=78000;
  let did="DN";

  let manager=new Manager(id, ename, salary, did,6000,"DN");
  console.log(JSON.stringify(manager));
  