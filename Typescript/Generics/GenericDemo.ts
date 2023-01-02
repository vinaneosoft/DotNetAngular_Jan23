let arr1:number[]=new Array();
arr1.push(56);
//arr1.push("ffgg");

let arr2=new Array();
arr2.push(67);
arr2.push("hi");
console.log(arr2);
let arr3=new Array<Number>();
arr3.push(78.9);
arr3.push(78);
arr3.push(78.93);
arr3.push(78);
//arr3.push(true);
arr3.push(new Number(34));
console.log(arr3);
let arr4=new Array<String>();
arr4.push("hi");
arr4.push("hi");
arr4.push("hello");
//arr4.push(false);
arr4.push(new String("hello"));
console.log(arr4);

class Book{
    constructor(private id=0,private name="AA",private price=0){

    }
}

let book1=new Book(123,"Java Learning",800);
let book2=new Book(124,"Java Learning",800);
let book3=new Book(125,"Java Learning",800);
let book4=new Book(126,"Java Learning",800);

let bookArray=new Array<Book>();
bookArray.push(book1)
bookArray.push(book2)
bookArray.push(book3)
bookArray.push(book4)
//bookArray.push("ghhjj");

bookArray.forEach(book=>console.log(book));

