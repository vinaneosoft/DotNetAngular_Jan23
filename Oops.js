

class Employee{
    empId;
    empName;
    empSalary;
    departmentId;
}

let emp=new Employee();

emp.empId=890;
emp.empName="Pooja";
emp.empSalary=89000;
emp.departmentId="DN";

for(let key in emp)
    console.log(emp[key]);
console.log(emp);
console.log(JSON.stringify(emp));


class Student{
    studId;
    studName;

    constructor(id,name){
       this.studId=id;
       this.studName=name;
    }

    getDetails(){
        return `Id=${this.studId} Name=${this.studName}`
       
    }
}

let stud1=new Student(45,"Vina");
let stud2=new Student(55,"Vinay");
let stud3=new Student(65,"Lina");

console.log(stud2.getDetails());


class Book{
    author=new Array();
    getAuthors(){
        return this.author;
    }
}
