
class Employee{
  empId:number;
  empName:string;
  empSalary:number;
  departmentId:string;

  getMonthlySalary():number{
    return this.empSalary;
  }
  getEmpDetails():string{
    return `Id: ${this.empId}, Name: ${this.empName}, Salary: ${this.empSalary}, Department Id: ${this.departmentId}`
  }
}


class Manager extends Employee{
    extraPay:number;
    managingDepartId:string;

    getMgrDetails():string{
        return `${this.getEmpDetails()}, Extra Pay: ${this.extraPay}, Which department Manager: ${this.managingDepartId}`
    }
}

let mgr=new Manager();
mgr.empId=123;
mgr.empName="Poonam";
mgr.empSalary=120000;
mgr.extraPay=10000;
mgr.departmentId="LD";
mgr.managingDepartId="LD";
//mgr.getEmpDetails();
let details=mgr.getMgrDetails();
console.log(details);

// protected : within a class and subclass




/* class HRManager extends Manager{

}

class Trainer extends Employee{

}
class InHounseTrainer extends Trainer{

}

class ContractTrainer extends Trainer{

} */