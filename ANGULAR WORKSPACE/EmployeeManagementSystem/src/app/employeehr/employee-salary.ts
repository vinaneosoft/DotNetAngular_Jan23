export class EmployeeSalary {
    id:number;
    basicSalary:number;
    grossSalary:number=0;
    netSalary:number=0;

    constructor(id=0,basicSalary=0){
      this.id=id;
      this.basicSalary=basicSalary;
      this.getGrossSalary();
      this.getNetSalary();
    }

    getGrossSalary(){
        this.grossSalary=this.basicSalary+450+5600+1000;
        return this.grossSalary;
    }
    getNetSalary(){
        this.netSalary=this.grossSalary-700-800;
    }
}


