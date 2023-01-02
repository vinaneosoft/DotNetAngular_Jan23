let arr1 = new Array();
arr1.push(56);
//arr1.push("ffgg");
let arr2 = new Array();
arr2.push(67);
arr2.push("hi");
console.log(arr2);
let arr3 = new Array();
arr3.push(78.9);
arr3.push(78);
arr3.push(78.93);
arr3.push(78);
//arr3.push(true);
arr3.push(new Number(34));
console.log(arr3);
let arr4 = new Array();
arr4.push("hi");
arr4.push("hi");
arr4.push("hello", "welcome");
//arr4.push(false);
arr4.push(new String("hello"));
console.log(arr4);
class Book {
    constructor(id = 0, name = "AA", price = 0) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    get bid() {
        return this.id;
    }
}
let book1 = new Book(123, "Java Learning", 800);
let book2 = new Book(124, "Java Learning", 800);
let book3 = new Book(125, "Java Learning", 800);
let book4 = new Book(123, "Java Learning", 800);
let bookArray = new Array();
bookArray.push(book1);
bookArray.push(book2);
bookArray.push(book3);
bookArray.push(book4);
//bookArray.push("ghhjj");
bookArray.forEach(book => console.log(book));
let set1 = new Set();
set1.add(78.9);
set1.add(78);
set1.add(78.93);
set1.add(78);
console.log(set1);
set1.delete(78);
console.log(set1);
let bookSet = new Set();
bookSet.add(book1);
bookSet.add(book2);
bookSet.add(book3);
bookSet.add(book4);
bookSet.forEach(book => console.log(book));
bookSet.forEach(book => {
    if (book.bid == 123)
        bookSet.delete(book);
});
console.log("After delete.....");
bookSet.forEach(book => console.log(book));
let map1 = new Map();
map1.set(456, 89000);
map1.set(457, 99000);
map1.set(459, 129000);
map1.set(456, 129000);
map1.set(450, 49000);
// key duplicate not allowed, value allowed
console.log(map1);
console.log(map1.get(450));
map1.delete(450);
console.log(map1);
map1.forEach((val, key) => { console.log(val), console.log(key); });
console.log(map1.keys());
console.log(map1.values());
