export class Employee {
    id:string;
    empName:string;
    empSalary:number;
    empGender:string;
    empAddress:string;
    departmentId:string;
    emailId:string;
    password:string
    static empCode=1;
    constructor(id="",name="",salary=0,gender="f",address="",did="",eid="",pass=""){
        this.departmentId=did;
        this.empAddress=address;
        this.empGender=gender;
        this.id=id;
        this.empName=name;
        this.empSalary=salary;
        this.emailId=eid;
        this.password=pass;
    }
    generateId():void{
         this.id="NS"+Employee.empCode++;
    }
}
