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
        console.log("in Employee def constructor");
        this.empId = 0;
        this.empName = "AAA";
        this.empSalary = 0;
        this.departmentId = "BB";
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
        var _this = _super.call(this) || this;
        console.log("in Manager def constructor");
        _this.extraPay = 0;
        _this.managingDepartId = "BB";
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
var manager = new Manager();
console.log(JSON.stringify(manager));
