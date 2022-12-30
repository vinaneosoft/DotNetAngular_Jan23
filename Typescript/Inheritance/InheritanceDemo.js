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
    Employee.prototype.getEmpDetails = function () {
        return "Id: ".concat(this.empId, ", Name: ").concat(this.empName, ", Salary: ").concat(this.empSalary, ", Department Id: ").concat(this.departmentId);
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Manager.prototype.getMgrDetails = function () {
        return "".concat(this.getEmpDetails(), ", Extra Pay: ").concat(this.extraPay, ", Which department Manager: ").concat(this.managingDepartId);
    };
    return Manager;
}(Employee));
var mgr = new Manager();
mgr.empId = 123;
mgr.empName = "Poonam";
mgr.empSalary = 120000;
mgr.extraPay = 10000;
mgr.departmentId = "LD";
mgr.managingDepartId = "LD";
//mgr.getEmpDetails();
var details = mgr.getMgrDetails();
console.log(details);
// protected : within a class and subclass
/* class HRManager extends Manager{

}

class Trainer extends Employee{

}
class InHounseTrainer extends Trainer{

}

class ContractTrainer extends Trainer{

} */ 
