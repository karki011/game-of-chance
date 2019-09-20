//need score for both user and computer
//we are storing all the dom in variable so easy uses
let userScore = 0;
let  computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const smUserWord = "user".fontsize(3).sub();
const smComputerWord = "comp".fontsize(3).sub();

const getComputerChoice = function () {
    const choices = ["Rock", "Paper", "Scissors"];
    const randonNumber = Math.floor(Math.random() * 3); //gets random number between 0 -3
    return choices[randonNumber];
}

const win = function(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${userChoice}${smUserWord} beats ${computerChoice}${smComputerWord}. You Win!`;
    document.getElementById(userChoice).classList.add('green-glow')
}
const lose = function(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${userChoice}${smUserWord} loses to ${computerChoice}${smComputerWord}. You lost!` ; 
}
const draw = function(userChoice, computerChoice){
    result_p.innerHTML = `${userChoice}${smUserWord} draws with ${computerChoice}${smComputerWord}. It's a draw!` ;   
}
const game = function (userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'RockScissors':
        case 'PaperRock':
        case 'ScissorsPaper':
            win(userChoice, computerChoice );
            break;
        case 'RockPaper':
        case 'PaperScissors':
        case 'ScissorsRock':
            lose(userChoice, computerChoice);
            break;
        case 'RockRock':
        case 'PaperPaper':
        case 'ScissorsScissors':
            draw(userChoice, computerChoice);
            break;
    }
}

const main = function () {
    rock_div.addEventListener('click', function () {
        game("Rock");
    });
    paper_div.addEventListener('click', function () {
        game("Paper");

    });
    scissors_div.addEventListener('click', function () {
        game("Scissors");
    });
}

main();