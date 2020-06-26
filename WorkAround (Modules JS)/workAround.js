/* BASIC MODULE 
const Employee = require('./employee');


function getEmployeeInformation(inputSalary) {
    salary = inputSalary;
    console.log('Cadre: ' + Employee.getCadre());
    console.log('Tax: ' + Employee.calculateTax());
    console.log('Benefits: ' + Employee.getBenefits());
    console.log('Bonus: ' + Employee.calculateBonus());
    console.log('Reimbursement Eligibility: ' + Employee.reimbursementEligibility() + '\n');
  }
  
  getEmployeeInformation(10000);
  getEmployeeInformation(50000);
  getEmployeeInformation(100000);
*/

/*
//ES6 SYNTAX
import {Employee, cadre, tax, benefits, bonus, reimbursement} from './employee';

function getEmployeeInformation(inputSalary) {
    Employee.salary = inputSalary;
    console.log('Cadre: ' + cadre);
    console.log('Tax: ' + tax);
    console.log('Benefits: ' + benefits);
    console.log('Bonus: ' + bonus);
    console.log('Reimbursement Eligibility: ' + reimbursement + '\n');
}
  
getEmployeeInformation(10000);
getEmployeeInformation(50000);
getEmployeeInformation(100000);
*/


//COMBINING IMPORT STATEMENTS
import {getCadre, calculateTax, getBenefits, calculateBonus, reimbursementEligibility} from './employee'; //VARIABLES IMPORTED AS THEY ARE DECLARED IN EXPORT
import Employee from './employee'; //OBJECT IMPORTED INDIVIDUALLY 

function getEmployeeInformation(inputSalary) {
  Employee.salary = inputSalary;
  console.log('Cadre: ' + getCadre());
  console.log('Tax: ' + calculateTax());
  console.log('Benefits: ' + getBenefits());
  console.log('Bonus: ' + calculateBonus());
  console.log('Reimbursement Eligibility: ' + reimbursementEligibility() + '\n');
}
   
getEmployeeInformation(10000);
getEmployeeInformation(50000);
getEmployeeInformation(100000);