function computerPlay(){
    let computer_choice = Math.floor(Math.random()*3);
    if (computer_choice == 0){
        return "rock";
    } else if(computer_choice == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playerSelection(){
    let choice = prompt("What do you choose? Rock, Paper or Scissors?");
    choice = choice.toLowerCase();
    return choice;
}

function whoWon(computer, player){
    if (player != "paper" && player != "scissors" && player!="rock"){
        return "You misspelled something.";
    } 
    if (computer == player){
        return `It's a draw. You both chose ${computer}.`;
    }
    if (computer == "rock"){
        if(player=="scissors"){
            score-=1;
            return 'You loose. Rock beats scissors.'; 
        } else {
            score +=1;
            return 'You win. Paper beats rock.';
        }
    }

    if (computer == "paper"){
        if (player== "rock"){
            score-=1;
            return "You loose. Paper beats rock.";
        } else {
            score +=1;
            return "You win. Scissors beats paper.";
        }
    }

    if (computer == "scissors"){
        if (player == "rock"){
            score +=1;
            return "You win. Rock beats scissors.";
        } else {
            score-=1;
            return "You lost. Scissors beats paper.";
        }
    }

}

function game(){
    score=0;
    for (let i=0;i<5;i++){
        let player = playerSelection();
        console.log(whoWon(computerPlay(),player));
    }
    if (score==0){
        console.log("It's a draw.")
    } else if(score>1){
        console.log("Congratualtions, you won.")
    }else{
        console.log("You lost.")
    }
}
let score;
game();