 import { changeName, companyName as cname } from './Demo1';
 import Organization from './Demo1'; // alternate name of Company
 import * as neo from "./EmployeeManagement/Employee";
console.log(cname);
 //companyName="WebWerks";  // value of variable imported from module can not be changed

 changeName("Web Werks")
 console.log(cname);

 let com=new Organization(456);
 com.showId();

 let emp=new neo.Employee();

 let tr=new neo.Trainer();