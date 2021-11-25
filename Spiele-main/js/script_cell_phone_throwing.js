let fallingSpeed = 0;
let throwingDistance = 0;
let guess = 0;
let gravity;

// get random number
let distanceToMonster = Math.random() * 90 + 10;
distanceToMonster = Math.round(distanceToMonster);

// does all the calculations
function calculateAll(){
    gravity = parseFloat(document.getElementById("planet").value);
    let calSpeed = document.getElementById("speed").value;
    let calAngle = document.getElementById("angle").value;

    if(calAngle > 90){
        createPopup("The angle should not be bigger then 90 degrees", false);
    }
    else{
        calAngle = calAngle * (Math.PI / 180);
        fallingSpeed = gravity;
        throwingDistance = ((calSpeed * calSpeed) + Math.sin(2 * calAngle)) / fallingSpeed;
        throwingDistance = Math.round(throwingDistance);
    }
}

// ties to find the right distance to monster
function throwPhone(){
    calculateAll();
    let numberThrows = document.getElementById("throws").value;
 
    if(guess < numberThrows){
       
        if(throwingDistance == distanceToMonster){
            objectcontainer.innerHTML = "Your current throw distance is " + throwingDistance + " m"
            + distanceToMonster  + " distance to monster ";
            createPopup("You Won the game, Congratulations", true);
        }
        else if(throwingDistance > distanceToMonster){
            guess++;
            objectcontainer.innerHTML =  "Your current throw distance is " + throwingDistance + " m" + 
            " the distance to monster is " + distanceToMonster  + " m";
        }
        else{
            guess++;
            objectcontainer.innerHTML = "Your current throw distance is " +  throwingDistance + " m" + 
             " the distance to monster is " + distanceToMonster  + " m";
        }
    }else{
        createPopup("You lost, the limit of guesses has been reached" + " " + numberThrows, true);
    }
}

// change screen to planet img and get gravity value
function goScreen(element){
    let numberThrows = document.getElementById("throws").value;
    if (numberThrows <= 0){
        createPopup("Please enter number bigger than 0", true);
    }else{
        gravity = parseFloat(document.getElementById("planet").value);
        startGame();
        switch (gravity) {
            case 9.81:
                document.body.style.backgroundImage = "url(\"../Spiele-main/images/ThrowYourPhone/earth_game_background01.jpg\")";
                break;
            case 1.62:
                document.body.style.backgroundImage = "url(\"../images/ThrowYourPhone/moon_background.jpg\")";
            break;
            case 3.69:
                document.body.style.backgroundImage = "url(\"../images/ThrowYourPhone/mars_game_background.jpg\")";
            break;
            case 24.79:
                document.body.style.backgroundImage = "url(\"../images/ThrowYourPhone/Jupiter_game_background.jpg\")";
            break;
        }
    }
}

// change screen
function startGame(){
    document.getElementById("ingame").classList.add("active");
    document.getElementById("mainmenu").classList.remove("active");
}





