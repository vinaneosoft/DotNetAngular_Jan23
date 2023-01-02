var arr1 = new Array();
arr1.push(56);
//arr1.push("ffgg");
var arr2 = new Array();
arr2.push(67);
arr2.push("hi");
console.log(arr2);
var arr3 = new Array();
arr3.push(78.9);
arr3.push(78);
arr3.push(78.93);
arr3.push(78);
//arr3.push(true);
arr3.push(new Number(34));
console.log(arr3);
var arr4 = new Array();
arr4.push("hi");
arr4.push("hi");
arr4.push("hello");
//arr4.push(false);
arr4.push(new String("hello"));
console.log(arr4);
var Book = /** @class */ (function () {
    function Book(id, name, price) {
        if (id === void 0) { id = 0; }
        if (name === void 0) { name = "AA"; }
        if (price === void 0) { price = 0; }
        this.id = id;
        this.name = name;
        this.price = price;
    }
    return Book;
}());
var book1 = new Book(123, "Java Learning", 800);
var book2 = new Book(124, "Java Learning", 800);
var book3 = new Book(125, "Java Learning", 800);
var book4 = new Book(126, "Java Learning", 800);
var bookArray = new Array();
bookArray.push(book1);
bookArray.push(book2);
bookArray.push(book3);
bookArray.push(book4);
//bookArray.push("ghhjj");
bookArray.forEach(function (book) { return console.log(book); });
