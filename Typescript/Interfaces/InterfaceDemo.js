var Stack = /** @class */ (function () {
    function Stack() {
        this.ar = new Array(10);
        this.top = -1;
    }
    Stack.prototype.add = function (ele) {
        this.top++;
        this.ar[this.top] = ele;
    };
    Stack.prototype.remove = function () {
        var ele = this.ar[this.top];
        this.top--;
        return ele;
    };
    Stack.prototype.display = function () {
        for (var i = this.top; i >= 0; i--) {
            console.log(this.ar[i]);
        }
    };
    return Stack;
}());
var Queue = /** @class */ (function () {
    function Queue() {
    }
    Queue.prototype.display = function () {
        throw new Error("Method not implemented.");
    };
    Queue.prototype.add = function (ele) {
        // lgic of addding the element in queue
    };
    Queue.prototype.remove = function () {
        // logic of remving element from queue  and return removed element
        return 0;
    };
    return Queue;
}());
var collection;
collection = new Stack();
collection.add(67);
collection.add(17);
collection.add(67);
collection.add(68);
collection.add(670);
collection.display();
collection.remove();
console.log("After removing....");
collection.display();
collection = new Queue();
collection.add(78);
