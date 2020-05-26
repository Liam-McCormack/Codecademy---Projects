//let raceNumber = Math.floor(Math.random()*1000);
//let earlyRegristration = Boolean;
//let runnerAge = 29


raceDay = (runnerAge, earlyRegristration) => {
    let raceNumber = Math.floor(Math.random()*1000);
    if (earlyRegristration === false) {
    raceNumber = raceNumber + 1000;
}

if (runnerAge >= 18 && earlyRegristration === true) {
    console.log(`Your race starts at 9:30am and your race number is: ${raceNumber}.`)
} else if (runnerAge >= 18 || earlyRegristration === true) {
    console.log(`Your race starts at 11:00am and your race number is: ${raceNumber}.`)
} else if (runnerAge < 18 && earlyRegristration === false) {
    console.log(`Your race starts at 12:30pm and your race number is ${raceNumber}.`)
} else {
    console.log('Please see the registration desk to get your number.') 
}
}
