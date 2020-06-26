
const MessageMixer = require('./messageMixer');
//import MessageMixer from './messageMixer'; //ES6 syntax

function displayMessage() {
    console.log(MessageMixer.countCharacter("What is the color of the sky?", "t"));
    console.log(MessageMixer.capitalizeFirstCharacterOfWords("What is the color of the sky?"));
    console.log(MessageMixer.reverseWord("What is the color of the sky?"));
    console.log(MessageMixer.reverseAllWords("What is the color of the sky?"));
    console.log(MessageMixer.replaceFirstOccurence("What is the color of the sky?", "sky", "water"));
    console.log(MessageMixer.encode("What is the color of the sky?"));
    console.log(MessageMixer.palindrome("Liam was here."));
    console.log(MessageMixer.pigLatin("Hello there little Hobbits", 'I'));
};
  
displayMessage(); 
 

/*
//ES6 IMPORT - Functions as their own variables

import { countCharacter, capitalizeFirstCharacterOfWords, reverseWord, reverseAllWords, replaceFirstOccurence, encode, palindrome, pigLatin} from './messageMixer';

 function displayMessage() {
    console.log(countCharacter("What is the color of the sky?", "t"));
    console.log(capitalizeFirstCharacterOfWords("What is the color of the sky?"));
    console.log(reverseWord("What is the color of the sky?"));
    console.log(reverseAllWords("What is the color of the sky?"));
    console.log(replaceFirstOccurence("What is the color of the sky?", "sky", "water"));
    console.log(encode("What is the color of the sky?"));
    console.log(palindrome("Liam was here."));
    console.log(pigLatin("Hello there little Hobbits", 'I'));
  }
  
  displayMessage();
  */