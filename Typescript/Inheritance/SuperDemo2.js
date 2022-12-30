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
    function Employee(empId, empName, empSalary, departmentId) {
        if (empId === void 0) { empId = 0; }
        if (empName === void 0) { empName = "AAA"; }
        if (empSalary === void 0) { empSalary = 0; }
        if (departmentId === void 0) { departmentId = "BB"; }
        console.log("in Employee P constructor");
        this.empId = empId;
        this.empName = empName;
        this.empSalary = empSalary;
        this.departmentId = departmentId;
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
    function Manager(extraPay, managingDepartId) {
        if (extraPay === void 0) { extraPay = 0; }
        if (managingDepartId === void 0) { managingDepartId = "BB"; }
        var _this = _super.call(this, id, ename, salary, did) || this;
        console.log("in Manager def constructor");
        _this.extraPay = extraPay;
        _this.managingDepartId = managingDepartId;
        return _this;
    }
    Manager.prototype.getMonthlySalary = function () {
        return this.empSalary + this.extraPay;
    };
    Manager.prototype.getDetails = function () {
        return "".concat(_super.prototype.getDetails.call(this), "   Extra Pay: ").concat(this.extraPay, ", Which department Manager: ").concat(this.managingDepartId);
    };
    return Manager;
}(Employee));
var id = 555;
var ename = "Krishna";
var salary = 78000;
var did = "DN";
var manager = new Manager(6000, "DN");
console.log(JSON.stringify(manager));
