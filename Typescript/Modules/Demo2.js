"use strict";
exports.__esModule = true;
var Demo1_1 = require("./Demo1");
console.log(Demo1_1.companyName);
//companyName="WebWerks";  // value of variable imported from module can not be changed
(0, Demo1_1.changeName)("Web Werks");
console.log(Demo1_1.companyName);
