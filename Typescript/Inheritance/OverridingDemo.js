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
    return Manager;
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
var msalary = mgr.getMonthlySalary();
console.log(msalary);
// methodoverrding: method name : same , method signature : same
