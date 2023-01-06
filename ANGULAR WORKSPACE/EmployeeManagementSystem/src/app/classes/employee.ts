export class Employee {
    empId:number;
    empName:string;
    empSalary:number;
    empGender:string;
    empAddress:string;
    departmentId:string;
    emailId:string;
    password:string

    constructor(id=0,name="",salary=0,gender="f",address="",did="",eid="",pass=""){
        this.departmentId=did;
        this.empAddress=address;
        this.empGender=gender;
        this.empId=id;
        this.empName=name;
        this.empSalary=salary;
        this.emailId=eid;
        this.password=pass;
    }
}
