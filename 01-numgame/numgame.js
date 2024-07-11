// GUIDELINES:
//  1. Give every variable/const smallest scope
//  2. Grab HTML elements by tag and store in const
//  3. Put all other code inside functions
const colorField = document.getElementById("color-field");
const messageText = document.getElementById("message-text");

let secret;
let min = 0;
let max = 256;
let secretString;

var myConfetti = confetti.create(null, {
    resize: true,
    useWorker: true
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
   
    }

function loadGame(){
        colorField.min = min;
        colorField.max = max;
        colorField.value = max;
        red = Math.floor(Math.random()*max);
        green = Math.floor(Math.random()*max);
        blue = Math.floor(Math.random()*max);
        
    }

// function loadGame() {
   // numField.min = min;
    //numField.max = max;
    //numField.value = max;
   // secret = Math.random(); 
    //secret = secret * (max-min+1);
   // secret = secret + min;
   // secret = Math.floor(secret);
//}

function makeGuess() {
    //let guess = parseInt(colorField.value)
    guess = colorField.value;
    console.log(`Guess: ${guess}`);
    guess = '0x'+ guess.slice(1);
    guessnum = Number(guess);
    
    console.log(`Guessnum: ${guessnum}`);
    if(guess == secret){

        messageText.innerHTML = `${guess} is correct!`
        myConfetti({
            particleCount: 900,
            spread: 360

        });
    
    } else {
        messageText.innerHTML = `Incorrect`
    }
}