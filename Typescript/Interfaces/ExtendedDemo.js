var T = /** @class */ (function () {
    function T() {
    }
    T.prototype.demo = function () {
    };
    T.prototype.test = function () {
    };
    T.prototype.xxx = function () {
    };
    return T;
}());
var M = /** @class */ (function () {
    function M() {
    }
    M.prototype.demo = function () {
        throw new Error("Method not implemented.");
    };
    M.prototype.test = function () {
        throw new Error("Method not implemented.");
    };
    return M;
}());
var nn;
nn = new T();
nn = new M();
var D = /** @class */ (function () {
    function D() {
    }
    D.prototype.demo = function () {
        console.log("Demo called");
    };
    D.prototype.test = function () {
        throw new Error("Method not implemented.");
    };
    D.prototype.show = function () {
        throw new Error("Method not implemented.");
    };
    return D;
}());
var d = new D();
d.demo();
