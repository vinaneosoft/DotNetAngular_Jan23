

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