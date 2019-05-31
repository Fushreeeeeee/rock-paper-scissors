let wins = 0;
let losses = 0;
let ties = 0;

function computersMove() {
let randInt = Math.floor(Math.random()*3)
if (randInt === 0){
return "scissors"
}
if (randInt === 1){
return "rock"
}
if (randInt === 2){
return "paper"
}
}
function updatescore(result){
    if (result === "won"){
        wins = wins + 1;
        document.getElementById("wins").innerHTML = wins;
    }
    if (result === "tied") {
        ties = ties + 1;
        document.getElementById("ties").innerHTML = ties;
    
    }
    if (result === "lost") {
        losses = losses + 1;
        document.getElementById("losses").innerHTML = ties;
    }
}
function onClickRock() {
    let cm = computersMove();
    if (cm === "rock") {
        updatescore("tied");
        alert("Rock")
    }
    if (cm === "scissors") {
        updatescore("won");
        alert("scissors")
        
    if (cm === "paper") {
        updatescore("lost");
        alert("paper")
}

function onClickPaper(){
let cm = computersMove();
    if (cm === "rock") {
        updatescore("won");
        alert("Rock")
    }
    if (cm === "scissors") {
        updatescore("lost");
        alert("scissors")
        
    if (cm === "paper") {
        updatescore("tied");
        alert("paper")
}
fucntion onClickScissors(){
    let cm = computersMove();
    if (cm === "rock") {
        updatescore("lost");
        alert("Rock")
    }
    if (cm === "scissors") {
        updatescore("tied");
        alert("scissors")
        
    if (cm === "paper") {
        updatescore("win");
        alert("paper")
}

document.getElementById("rock").onclick = onClickRock
document.getElementById("paper").onclick = onClickPaper
document.getElementById("scissors").onclick = onClickScissors