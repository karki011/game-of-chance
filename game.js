//need score for both user and computer
//we are storing all the dom in variable so easy uses
const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

const getComputerChoice = function () {
    const choices = ["r", "p", "s"];
    const randonNumber = Math.floor(Math.random() * 3); //gets random number between 0 -3
    return choices[randonNumber];
}
getComputerChoice();
console.log('getComputerChoice():', getComputerChoice())
const game = function (userChoice) {

}
const main = function () {
    rock_div.addEventListener('click', function () {
        game("r");
    });
    paper_div.addEventListener('click', function () {
        game("p");

    });
    scissors_div.addEventListener('click', function () {
        game("s");
    });
}

main();