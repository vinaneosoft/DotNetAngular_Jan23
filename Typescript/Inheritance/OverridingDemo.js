var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.getMonthlySalary = function () {
        return this.empSalary;
    };
    Employee.prototype.getDetails = function () {
        return "Id: ".concat(this.empId, ", Name: ").concat(this.empName, ", Salary: ").concat(this.empSalary, ", Department Id: ").concat(this.departmentId);
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Manager.prototype.getMonthlySalary = function () {
        return this.empSalary + this.extraPay;
    };
    Manager.prototype.getDetails = function () {
        return "".concat(_super.prototype.getDetails.call(this), "   Extra Pay: ").concat(this.extraPay, ", Which department Manager: ").concat(this.managingDepartId);
    };
    Manager.prototype.test = function () {
        console.log("hi");
    };
    return Manager;
}(Employee));
var Trainer = /** @class */ (function (_super) {
    __extends(Trainer, _super);
    function Trainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Trainer.prototype.getMonthlySalary = function () {
        return this.empSalary + this.variablePay;
    };
    Trainer.prototype.getDetails = function () {
        return "".concat(_super.prototype.getDetails.call(this), ", Variable Pay: ").concat(this.variablePay, ", \n        Training Technology: ").concat(this.trainingTech);
    };
    return Trainer;
}(Employee));
var emp = new Employee();
emp.empId = 789;
emp.empName = "Hari";
emp.empSalary = 67000;
emp.departmentId = "JW";
var empd = emp.getDetails(); // Employee
console.log(empd);
var mgr = new Manager();
mgr.empId = 123;
mgr.empName = "Poonam";
mgr.empSalary = 120000;
mgr.extraPay = 10000;
mgr.departmentId = "LD";
mgr.managingDepartId = "LD";
var mgrdetails = mgr.getDetails(); // Manager  // method overriding
console.log(mgrdetails);
var msalary = mgr.getMonthlySalary(); // method overriding
console.log(msalary);
var tr = new Trainer();
tr.empId = 567;
tr.empName = "Vina";
tr.empSalary = 120000;
tr.departmentId = "LD";
tr.variablePay = 5000;
tr.trainingTech = "JAVA";
var trdetails = tr.getDetails();
console.log(trdetails);
var trsalary = tr.getMonthlySalary();
console.log("Salary:" + trsalary);
var myEmp;
myEmp = new Manager();
myEmp.empId = 1;
myEmp.empName = "hari";
myEmp.empSalary = 89000;
myEmp.departmentId = "LD";
var mgdt = myEmp.getDetails(); // overriding method
console.log(mgdt);
myEmp = new Trainer();
myEmp.empId = 2;
myEmp.empName = "pari";
myEmp.empSalary = 99000;
myEmp.departmentId = "LD";
mgdt = myEmp.getDetails(); // overriding method
console.log(mgdt);
// methodoverrding: method name : same , method signature : same
