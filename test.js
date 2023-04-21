const {Employee} = require('./employee.js');

let john = new Employee("John Wick", "Dog Lover");

let sayNameFunc = john.sayName;
let boundJohn = sayNameFunc.bind(john);
setTimeout(boundJohn, 2000);

let sayOccFunc = john.sayOccupation;
let boundOcc = sayOccFunc.bind(john);
setTimeout(boundOcc, 3000);
