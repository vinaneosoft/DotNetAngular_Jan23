export class Department {
    deptId:string;
    deptName:string;
    deptBudget:number;
    deptEstYear:number;
    deptImage:string
    constructor(id="BB",name="AA",budget=0, year=0, image=""){
        this.deptId=id;
        this.deptName=name;
        this.deptBudget=budget;
        this.deptEstYear=year;
        this.deptImage=image;
    }
}
