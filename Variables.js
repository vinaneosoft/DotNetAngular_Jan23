var a=23;
let b=45;
const c=67;
document.write("<b>HIIIII</b>");
//c=78;
document.write("<b>HIIIII</b>");


// inside a funciton var type variables always have function scope
function test(){
    console.log("outside of loop:"+i);
    for(var i=1;i<=3;i++){
        console.log(i);
    }// i scope not ended
    console.log("outside of loop:"+i)
}
test();
// let type variables have block scope, in which block they are declared
function test2(){
    
    for(let j=1;j<=3;j++){
        console.log(j);
    }// j scope ends
   // console.log("outside of loop:"+j);
}
test2();



var k=45;
var k=67;
k=89;


let p=67;
//let p=89;
p=100;

let s="Hello";
s="Hi";

const s1="Welcome";

let concat=s1+" Neosoft";
console.log(s1);
console.log(concat);