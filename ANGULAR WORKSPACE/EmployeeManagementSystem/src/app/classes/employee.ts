export class Employee {
    empId:number;
    empName:string;
    empSalary:number;
    empGender:string;
    empAddress:string;
    departmentId:string;

    constructor(id=0,name="",salary=0,gender="f",address="",did=""){
        this.departmentId=did;
        this.empAddress=address;
        this.empGender=gender;
        this.empId=id;
        this.empName=name;
        this.empSalary=salary;
    }
}
