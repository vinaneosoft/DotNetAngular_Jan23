var MyServlet = /** @class */ (function () {
    function MyServlet(num) {
        if (num === void 0) { num = 0; }
        this.num = num;
        MyServlet.count++;
    }
    MyServlet.getInstance = function () {
        if (this.object == null) {
            this.object = new MyServlet();
        }
        return this.object;
    };
    MyServlet.count = 0;
    return MyServlet;
}());
console.log(MyServlet.count);
var servlet1 = MyServlet.getInstance();
var servlet2 = MyServlet.getInstance();
var servlet3 = MyServlet.getInstance();
console.log(MyServlet.count);
console.log(servlet1);
console.log(servlet3);
