
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
  }
  /* class Trainer extends Employee{

    variablePay: number;

    getMonthlySalary():number{
        return this.empSalary+this.variablePay;
      }
  }

  class OfficeBoy extends Employee{


  } */
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
let msalary=mgr.getMonthlySalary();
console.log(msalary);

// methodoverrding: method name : same , method signature : same


