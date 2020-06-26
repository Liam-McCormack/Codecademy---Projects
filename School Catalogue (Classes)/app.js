

class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level
        this._numberOfStudents = numberOfStudents;
    }
    get name() {
        return this._name;
    }
    get level() {
        return this._level;  
    }
    get numberOfStudents() {
        return this._numberOfStudents;
    }
    set newStudentCount(newNum) {
        if (typeof newNum === 'number') {
            this._numberOfStudents = newNum;
        } else {
            console.log('Invalid input: newStudentCount must be set to a Number.')
        }
    }
    quickFacts() {
        return `${this._name} educates ${this._numberOfStudents} students at ${this._level} School level.`;
    }
    static pickSubstituteTeacher(substituteTeachers) {
        const randomTeacher = Math.floor(Math.random() * substituteTeachers.length);
        return substituteTeachers[randomTeacher];
    }
};

class Primary extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
        super(name, 'Primary', numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }
}

class Middle extends School {
    constructor(name, numberOfStudents) {
        super(name, 'Middle', numberOfStudents)
    }
}

class High extends School {
    constructor(name, numberOfStudents, sportsTeams) {
        super(name, 'High', numberOfStudents);
        this._sportsTeams = sportsTeams;
    }
    get sportsTeams() {
        console.log(this._sportsTeams);
    }
}


const stVeronicas = new Primary('St Veronicas', 250, true);
//console.log(stVeronicas)

const suttonHigh = new Middle('Sutton High', 1250);
//console.log(suttonHigh);

const allSaints = new High('All Saints', 345, ['Rossendale Valley', 'Hassy Juniors', 'Everton']);
//console.log(allSaints); 

console.log(allSaints.quickFacts());

console.log(School.pickSubstituteTeacher(['Mrs Senior', 'Mrs Arthur', 'Mrs Brown', 'Mr Gee']));

stVeronicas.newStudentCount = 5470;
console.log(stVeronicas.numberOfStudents);