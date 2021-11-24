let guess = 0;
let randomNumber;
let userNumber;
let highestNumber;
let setMaxTries;
let userChoice;

// Set how big should the random number be
function setMaxNumber(){
    highestNumber = document.getElementById("setMaxNumber").value;
    setRandomNumber();
    if (highestNumber <= 0){
        createPopup("Please enter number bigger than 0", true);
    }
}

// Set how many tries user wants to find the number
function setMaxAttempts(){
    setMaxTries = document.getElementById("setMaxAttempts").value;
    if (setMaxTries <= 0){
        createPopup("Please enter number bigger than 0",true);
    }
}

// activate next screen
function startGame(){
    let activeDiv = document.getElementsByClassName("active")[0];
    activeDiv.classList.remove("active");
    activeDiv.nextElementSibling.classList.add("active");
}

// tries to find the random number
function findNumber(){
    userChoice = document.getElementById("userNumber").value;
    if(setMaxTries > guess){
        if(userChoice == randomNumber){
            createPopup("You Won the game, Congratulations", true);
        }
        else if(userChoice > randomNumber){
            guess++;
            message.innerHTML = "The number " + userChoice + " is too big";
        }
        else if(userChoice < randomNumber){
            guess++;
            message.innerHTML = "The number "  + userChoice + " is too small";
        }
    }else{
        createPopup("You lost, the limit of guesses has been reached", true);
    }
}

// Set random number
function setRandomNumber(){
    let stettedMaxNumber = document.getElementById("setMaxNumber").value;
    randomNumber = Math.random() * stettedMaxNumber + 1;
    randomNumber = Math.round(randomNumber);
}
