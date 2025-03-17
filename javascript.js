const ROCK = 1;
const PAPER = 2;
const SCISSOR = 3;
const NUMBER_OF_CHOICES = 3;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");

const displayBoard = document.querySelector(".display-board");
const para = document.createElement("p");
para.classList.toggle("para");
displayBoard.appendChild(para);
para.innerText = "Welcome!\n\nPick either rock, paper, or scissor."

function choiceNumberToString(choiceNumber) {
    switch (choiceNumber) {
        case ROCK:
            return "Rock";
        case PAPER:
            return "Paper";
        case SCISSOR:
            return "Scissor";
    }
}

function winDeterminer(userPlay, robotPlay) {
    if (userPlay == robotPlay) {
        para.innerText = "Tie!\n" + "You both chose " + choiceNumberToString(userPlay) + ".\nGive it another go!";
    }
    else if (userPlay == ROCK && robotPlay == SCISSOR) {
        para.innerText = "You Win!\n" + "Robot chose  " + choiceNumberToString(robotPlay) + ".\nGive it another go!";
    }
    else if (userPlay == PAPER && robotPlay == ROCK) {
        para.innerText = "You Win!\n" + "Robot chose  " + choiceNumberToString(robotPlay) + ".\nGive it another go!";
    }
    else if (userPlay == SCISSOR && robotPlay == PAPER) {
        para.innerText = "You Win!\n" + "Robot chose  " + choiceNumberToString(robotPlay) + ".\nGive it another go!";
    }
    else {
        para.innerText = "Loss!\n" + "Robot chose  " + choiceNumberToString(robotPlay) + ".\nGive it another go!";
    }
}

function robotPlay(numOfChoices) {
    return Math.floor(Math.random() * NUMBER_OF_CHOICES) + 1;
}

rock.addEventListener("click", () => winDeterminer(ROCK, robotPlay(NUMBER_OF_CHOICES)));
paper.addEventListener("click", () => winDeterminer(PAPER, robotPlay(NUMBER_OF_CHOICES)));
scissor.addEventListener("click", () => winDeterminer(SCISSOR, robotPlay(NUMBER_OF_CHOICES)));

function increaseIcon(icon) {
    icon.style.height = "170px";
}

function revertIcon(icon) {
    icon.style.height = "150px";
}

rock.addEventListener("mouseover", () => increaseIcon(document.getElementById("rock")));
paper.addEventListener("mouseover", () => increaseIcon(document.getElementById("paper")));
scissor.addEventListener("mouseover", () => increaseIcon(document.getElementById("scissor")));

rock.addEventListener("mouseout", () => revertIcon(document.getElementById("rock")));
paper.addEventListener("mouseout", () => revertIcon(document.getElementById("paper")));
scissor.addEventListener("mouseout", () => revertIcon(document.getElementById("scissor")));