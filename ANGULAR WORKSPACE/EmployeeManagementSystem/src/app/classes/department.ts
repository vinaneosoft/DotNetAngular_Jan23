export class Department {
    deptId:string;
    deptName:string;
    deptBudget:number;
    deptEstYear:number;
    deptImage:string
    deptEstDate:Date;
    constructor(id="BB",name="AA",budget=0, year=0, image="", deptEstDate=new Date()){
        this.deptId=id;
        this.deptName=name;
        this.deptBudget=budget;
        this.deptEstYear=year;
        this.deptImage=image;
        this.deptEstDate=deptEstDate;
    }
}
