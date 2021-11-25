let counter;
let userPoint = 0;
let pcPoint = 0;

// check if counter(user input for how many tries) is null or less error message, else change to next screen
function readCounter(){

    counter = counterInput.value;

    if(counter <= 0){
        // Error message
        createPopup("Please enter number bigger than 0");
    }else{
        // activate next screen
        let activeDiv = document.getElementsByClassName("active")[0];
        activeDiv.classList.remove("active");
        activeDiv.nextElementSibling.classList.add("active");
        let activeWelcome = document.getElementsByClassName("activate")[0];
        activeWelcome.classList.remove("activate");
        activeWelcome.nextElementSibling.classList.add("activate");
    }
}

// klick on game image and save the image as user choice then play vs pc 
function play(userChoice){
    // random num -> PC Choice
    let pcChoice = Math.ceil(Math.random() * 3);

    // change images
    userImage.setAttribute("src", "images/RockPaperScissors/Game" + userChoice + ".png");
    pcImage.setAttribute("src", "images/RockPaperScissors/Game" + pcChoice + ".png");

    // compare + // who won -> count up / TO FIX
    if(userChoice == pcChoice){
        setTimeout(function(){
            createPopup("Its a Tie, no one gets point", false);
            countPointsUser.innerHTML = " " + userPoint;
            countPointsPC.innerHTML = " " + pcPoint;
        },500)
    }
    else if(userChoice == 1 && pcChoice == 2){
        userPoint++;
        countPointsUser.innerHTML = " " + userPoint;
        countPointsPC.innerHTML = " " + pcPoint;
    }
    else if(userChoice == 2 && pcChoice == 3){
        userPoint++;
        countPointsUser.innerHTML = " " + userPoint;
        countPointsPC.innerHTML = " " + pcPoint;
    }
    else if(userChoice == 3 && pcChoice == 1){
        userPoint++;
        countPointsUser.innerHTML = " " + userPoint;
        countPointsPC.innerHTML = " " + pcPoint;
    }
    else{
        pcPoint++;
        countPointsUser.innerHTML = " " + userPoint;
        countPointsPC.innerHTML = " " + pcPoint;
    }


    counter--;
    if(counter == 0){
        // Counter check
        setTimeout(function(){
            if(userPoint > pcPoint){
                createPopup("You Won the game, Congratulations", true);
            }else if(userPoint == pcPoint){
                createPopup("Its a Tie, better luck next time", true);
                
            }else if(userPoint < pcPoint)
            createPopup("You lost, the computer wins", true);
            else{
                createPopup("You lost, the limit of guesses has been reached", true);
            }
        }, 500) 
    }
}