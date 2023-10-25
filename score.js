// Iteration 8: Making scoreboard functional

let scoreBoard = document.getElementById("score-board")
console.log(window.location.search);

let params = new URLSearchParams(window.location.search)

let score = params.get("score")
console.log("score: ",score);

scoreBoard.textContent = score;

let playagainbtn = document.getElementById("play-again-button")
playagainbtn.onclick = ()=>{
    window.location.href = "./game.html"
}