const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
     if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
       return userInput;
     } else {
       console.log('Error!');
     }
   };
   
   const getComputerChoice = () => {
     let randomNumber = Math.floor(Math.random() * 3);
     switch (randomNumber) {
       case 0: 
         return 'rock';
       case 1:
         return 'paper';
       case 2:
         return 'scissors';
       } 
     };
   
   const determineWinner = (userChoice, computerChoice) => {
     if (userChoice === 'bomb') {
       return 'The user wins!'
     }
     if (userChoice === computerChoice) {
       return 'The game is a tie!';
       }
     if (userChoice === 'rock') {
       if (computerChoice === 'paper') {
       return 'The computer wins!';}
       else if (computerChoice === 'scissors'){
         return 'The user wins!';
       }
     }
     if (userChoice === 'paper') {
       if (computerChoice === 'rock') {
        return 'The user wins!'} 
       else if (computerChoice === 'scissors') {
         return 'The computer wins!';
       }
         } 
     if (userChoice === 'scissors') {
       if (computerChoice === 'rock') {
         return 'The computer wins!'}
         else if (computerChoice === 'paper') {
           return 'The user wins!';
         }
       }
     }
     
   const playGame = () => {
     let userChoice = getUserChoice('bomb');
     let computerChoice = getComputerChoice();
     console.log(userChoice, computerChoice);
     console.log(determineWinner(userChoice, computerChoice));
   }
   playGame();
   
   