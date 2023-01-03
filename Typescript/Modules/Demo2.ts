 import { changeName, companyName } from './Demo1';
 import Organization from './Demo1'; // alternate name of Company
console.log(companyName);
 //companyName="WebWerks";  // value of variable imported from module can not be changed

 changeName("Web Werks")
 console.log(companyName);

 let com=new Organization(456);
 com.showId();