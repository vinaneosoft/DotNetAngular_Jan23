// dynamic size

let ageArray=new Array();
ageArray.push(45);
ageArray.push(15);
ageArray.push(35);
ageArray.push(46);

function addition(a,b){
    return a+b;
}

let myAdd=  (a,b)=>a+b;  // a+b will be automatically retured

let res=myAdd(34,88);

let cube=a=>a*a*a;

let res2=cube(5);


let nameArray=['pooja','Meena','Pravin','Kumar','Manali','Mohan'];

for(let name of nameArray)
    console.log(name);

nameArray.forEach((cname,index, array)=> console.log(cname+" : "+index+" : "+array));

nameArray.forEach(cname=> console.log(cname));

let newArray=nameArray.map(cname=>cname+"-Neo");
console.log(newArray);
console.log(nameArray);
nameArray.map(cname=>cname+(cname.length)).forEach(nname=>console.log(nname));

let salaryArray=[34000,67000,78000,56000,34000,67000];

function sumFun(...numbers){
    let sum=0;
    for(let num of salaryArray){
        sum=sum+num;
    }
    return sum;
}

let result=sumFun(salaryArray);
console.log(result);
let result2=salaryArray.reduce((sum,salary)=>sum+salary)
console.log(result2);

// inital value in sum = 1st element of array 34000
// inital value in salary : 2nd element of array 67000
//sum=34000+67000

let result3=salaryArray.reduce((sum,salary)=>sum+salary, 1000);
console.log(result3);

// inital value in sum = 1000
// inital value in salary : 1st element of array 34000
//sum=1000+34000

salaryArray=[34000,67000,78000,56000,60000,34000,67000];

//>=60000// [67000,78000,60000,67000]

let salArray=salaryArray.filter(salary=>salary>=60000);
let sal=salaryArray.find(salary=>salary>=60000);
console.log(salaryArray);
console.log(salArray);
console.log(sal);
console.log("-------------------");
salaryArray.filter(salary=>salary>=60000).map(sal=>sal+1000).forEach(sal=>console.log(sal));
let ress=salaryArray.filter(salary=>salary>=60000).map(sal=>sal+1000).reduce((acc,salary)=>acc+salary);
console.log(ress);


nameArray=['pooja','Meena','Pravin','Kumar','Manali','Mohan',"mohan"];
let newar=nameArray.filter(name=>name.toLowerCase().startsWith("m"));
console.log(newar);

//declare array having book objects
// forEach, find book having book id 3, filter all books of "Java" , get sum of all books' price 

let empObj={
    empId:123,
    empName:"Meenal",
    empSalary:90000,
    empExp: 12,
    departmentId:"JW"
}
console.log(empObj.empId);

for(let key in empObj){
    console.log(key+" : "+empObj[key])
}
// Object Destructuring
let {empId,empName,empSalary}=empObj;
console.log(empId);
console.log(empName);
console.log(empSalary);
function sumFun(...ar){  // ar  holding 0 to n values
   console.log(ar);
   if(ar.length!=0)
     return ar.reduce((sum,ele)=>sum+ele);
}
let sum1=sumFun();
sum1=sumFun(23);
sum1=sumFun(45,34);
sum1=sumFun(67,67,45,12);
let ar1=[56,34,23]; let ar2=[23,12,2];
let ar3=[...ar1,...ar2];



let nameArr=["hina","kiran","pooja","hina","pravin","kumar","paeavan"];


let [nn1,nn2,nn3, ...nameArr2]=nameArr;
console.log(nn1);
console.log(nn2);
console.log(nn3);
console.log(nameArr);
console.log(nameArr2);

let [ ...nameArr3]=nameArr;

let emp=[102,"Poonam",67000];
let [id, name, salary]=emp;
console.log(salary);

let emp2={
    idd:102,
    nname:"Pooonam",
    ssalary:67000
}

let {idd,nname,ssalary}=emp2;

let empArray=[{
    idd:102,
    nname:"Pooonam",
    ssalary:67000
},
{
    idd:103,
    nname:"Soham",
    ssalary:77000
},{
    idd:101,
    nname:"Ram",
    ssalary:69000
}
]


let arrrr=[34,"Hai","567",true, false];

function fun1(){
    console.log("Hi");
}

function fun2(){
    console.log("Hello");
}


fun1();
fun2();
