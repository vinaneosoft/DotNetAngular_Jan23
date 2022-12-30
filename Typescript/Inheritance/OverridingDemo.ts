
class Employee{
    empId:number;
    empName:string;
    empSalary:number;
    departmentId:string;
  
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
  
      getMonthlySalary():number{
        return this.empSalary+this.extraPay;
      }

      getDetails():string{
          return     `${super.getDetails()}   Extra Pay: ${this.extraPay}, Which department Manager: ${this.managingDepartId}`
      }

      test():void{
        console.log("hi");
        
      }
  }
   class Trainer extends Employee{

    variablePay: number;
    trainingTech:string;

    getMonthlySalary():number{
        return this.empSalary+this.variablePay;
      }
      getDetails():string{
        return     `${super.getDetails()}, Variable Pay: ${this.variablePay}, 
        Training Technology: ${this.trainingTech}`;
    }
  }

let emp=new Employee();
emp.empId=789;
emp.empName="Hari";
emp.empSalary=67000;
emp.departmentId="JW";
let empd=emp.getDetails(); // Employee
console.log(empd);

let mgr=new Manager();
mgr.empId=123;
mgr.empName="Poonam";
mgr.empSalary=120000;
mgr.extraPay=10000;
mgr.departmentId="LD";
mgr.managingDepartId="LD";
let mgrdetails=mgr.getDetails();  // Manager  // method overriding
console.log(mgrdetails);
let msalary=mgr.getMonthlySalary(); // method overriding
console.log(msalary);


let tr=new Trainer();
tr.empId=567;
tr.empName="Vina";
tr.empSalary=120000;
tr.departmentId="LD";
tr.variablePay=5000;
tr.trainingTech="JAVA";
let trdetails=tr.getDetails();
console.log(trdetails);
let trsalary=tr.getMonthlySalary();
console.log("Salary:"+trsalary);


let myEmp:Employee;

myEmp=new Manager();
myEmp.empId=1;
myEmp.empName="hari";
myEmp.empSalary=89000;
myEmp.departmentId="LD";
let mgdt=myEmp.getDetails(); // overriding method
console.log(mgdt);

myEmp=new Trainer();
myEmp.empId=2;
myEmp.empName="pari";
myEmp.empSalary=99000;
myEmp.departmentId="LD";

mgdt=myEmp.getDetails(); // overriding method
console.log(mgdt);

// methodoverrding: method name : same , method signature : same


