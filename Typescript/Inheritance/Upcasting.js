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
var Bird = /** @class */ (function () {
    function Bird() {
    }
    Bird.prototype.sleep = function () {
        console.log("All Birds sleep");
    };
    return Bird;
}());
var Sparrow = /** @class */ (function (_super) {
    __extends(Sparrow, _super);
    function Sparrow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sparrow.prototype.sleep = function () {
        console.log("Sparrow sleeps at night");
    };
    return Sparrow;
}(Bird));
var Bat = /** @class */ (function (_super) {
    __extends(Bat, _super);
    function Bat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bat.prototype.sleep = function () {
        console.log("Bat sleeps at day");
    };
    return Bat;
}(Bird));
var sparrow = new Sparrow();
var bat = new Bat();
checkSleepType(bat);
function checkSleepType(bird) {
    bird.sleep(); // polymorhipm
}
