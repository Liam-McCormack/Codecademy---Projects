console.log("Will I be rich?");

let randomNumber = Math.floor(Math.random() * 8) + 1
let magicBallAnswer = "";

if (randomNumber === 1) {
    magicBallAnswer = 'No chance';
} else if (randomNumber === 2) {
    magicBallAnswer = 'Yes';
} else if (randomNumber === 3) {
    magicBallAnswer = 'No';
} else if (randomNumber === 4) {
    magicBallAnswer = 'Maybe in the future';
} else if (randomNumber === 5) {
    magicBallAnswer = 'Sooner than expected';
} else if (randomNumber === 6) {
    magicBallAnswer = 'Maybe';
} else if (randomNumber === 7) {
    magicBallAnswer = 'Definitely maybe';
} else if (randomNumber === 8) {
    magicBallAnswer = 'Who knows';
}

console.log(magicBallAnswer);
