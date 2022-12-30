class Employee{
    empId:number;
    empName:string;
    empSalary:number;
    departmentId:string;

    constructor(){
        console.log("in Employee def constructor");
        this.empId=0;
        this.empName="AAA";
        this.empSalary=0;
        this.departmentId="BB";
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
      constructor(){
        super();  // super class def constructor 
        console.log("in Manager def constructor");
        this.extraPay=0;
        this.managingDepartId="BB";    
      }    
      getMonthlySalary():number{
        return this.empSalary+this.extraPay;
      }
      getDetails():string{
          return     `${super.getDetails()}   Extra Pay: ${this.extraPay}, Which department Manager: ${this.managingDepartId}`
      }
  }


  let manager=new Manager();
  console.log(JSON.stringify(manager));
  