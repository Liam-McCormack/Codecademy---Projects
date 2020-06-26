
/*
//BASIC MODULE EXPORT AS AN OBJECT
let payGrades = {
  entryLevel: { taxMultiplier: .05, benefits: ['health'], minSalary: 10000, maxSalary: 49999 },
  midLevel: { taxMultiplier: .1, benefits: ['health', 'housing'], minSalary: 50000, maxSalary: 99999 },
  seniorLevel: { taxMultiplier: .2, benefits: ['health', 'housing', 'wellness', 'gym'], minSalary: 100000, maxSalary: 200000 }
};

let Employee = {
    salary: 100000,

    getCadre() {
        if (Employee.salary >= payGrades.entryLevel.minSalary && salary <= payGrades.entryLevel.maxSalary) {
            return 'entryLevel';
        } else if (Employee.salary >= payGrades.midLevel.minSalary && salary <= payGrades.midLevel.maxSalary) {
            return 'midLevel';
        } else return 'seniorLevel';
    },

    calculateTax() {
        return payGrades[Employee.getCadre()].taxMultiplier * Employee.salary;
    },

    getBenefits() {
        return payGrades[Employee.getCadre()].benefits.join(', ');
    },

    calculateBonus() {
        return .02 * Employee.salary;
    },

    reimbursementEligibility() {
        let reimbursementCosts = { health: 5000, housing: 8000, wellness: 6000, gym: 12000 };
        let totalBenefitsValue = 0; 
        let employeeBenefits = payGrades[Employee.getCadre()].benefits;
        for (let i = 0; i < employeeBenefits.length; i++) {
            totalBenefitsValue += reimbursementCosts[employeeBenefits[i]];
        }
        return totalBenefitsValue;
    }
};

module.exports = Employee;
*/


/*
//EXPORT ES6 SYNTAX
let payGrades = {
  entryLevel: { taxMultiplier: .05, benefits: ['health'], minSalary: 10000, maxSalary: 49999 },
  midLevel: { taxMultiplier: .1, benefits: ['health', 'housing'], minSalary: 50000, maxSalary: 99999 },
  seniorLevel: { taxMultiplier: .2, benefits: ['health', 'housing', 'wellness', 'gym'], minSalary: 100000, maxSalary: 200000 }
};

let Employee = {
    salary: 100000
}


function getCadre() {
    if (salary >= payGrades.entryLevel.minSalary && salary <= payGrades.entryLevel.maxSalary) {
      return 'entryLevel';
    } else if (salary >= payGrades.midLevel.minSalary && salary <= payGrades.midLevel.maxSalary) {
      return 'midLevel';
    } else return 'seniorLevel';
  }
  
function calculateTax() {
    return payGrades[getCadre()].taxMultiplier * salary;
}

function getBenefits() {
    return payGrades[getCadre()].benefits.join(', ');
}

function calculateBonus() {
    return .02 * salary;
}

function reimbursementEligibility() {
    let reimbursementCosts = { health: 5000, housing: 8000, wellness: 6000, gym: 12000 };
    let totalBenefitsValue = 0; 
    let employeeBenefits = payGrades[getCadre()].benefits;
    for (let i = 0; i < employeeBenefits.length; i++) {
        totalBenefitsValue += reimbursementCosts[employeeBenefits[i]];
    }
    return totalBenefitsValue;
}

export {Employee, getCadre as cadre, calculateTax as tax, getBenefits as benefits, calculateBonus as bonus, reimbursementEligibility as reimbursement};
*/



//EXPORTING AS VARIABLES ARE DECLARED AND EXPORT DEFAULT STATEMENT
export let payGrades = {
    entryLevel: { taxMultiplier: .05, benefits: ['health'], minSalary: 10000, maxSalary: 49999 },
    midLevel: { taxMultiplier: .1, benefits: ['health', 'housing'], minSalary: 50000, maxSalary: 99999 },
    seniorLevel: { taxMultiplier: .2, benefits: ['health', 'housing', 'wellness', 'gym'], minSalary: 100000, maxSalary: 200000 }
};

let Employee = {
    salary: 100000
}


export function getCadre() {
    if (salary >= payGrades.entryLevel.minSalary && salary <= payGrades.entryLevel.maxSalary) {
      return 'entryLevel';
    } else if (salary >= payGrades.midLevel.minSalary && salary <= payGrades.midLevel.maxSalary) {
      return 'midLevel';
    } else return 'seniorLevel';
}
  
export function calculateTax() {
    return payGrades[getCadre()].taxMultiplier * salary;
}

export function getBenefits() {
    return payGrades[getCadre()].benefits.join(', ');
}

export function calculateBonus() {
    return .02 * salary;
}

export function reimbursementEligibility() {
    let reimbursementCosts = { health: 5000, housing: 8000, wellness: 6000, gym: 12000 };
    let totalBenefitsValue = 0; 
    let employeeBenefits = payGrades[getCadre()].benefits;
    for (let i = 0; i < employeeBenefits.length; i++) {
        totalBenefitsValue += reimbursementCosts[employeeBenefits[i]];
    }
    return totalBenefitsValue;
}

export default Employee;
