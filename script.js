//selecting element
const score0E1=document.querySelector("#score-0");
const score1E1 = document.getElementById("score-1");
const diceE1 = document.querySelector(".dice");
const current0E1 = document.getElementById("current-0")
const current1E1 = document.getElementById("current-1")


const btnNew = document.querySelector(".btn-new");
const btnRoll=document.querySelector(".btn-Roll");
const btnHold = document.querySelector(".btn-hold");

const player0E1 = document.querySelector(".player-0")
const player1E1 = document.querySelector(".player-1")
//start conditions
score0E1.textContent = 0;
score1E1.textContent = 0;
diceE1.classList.add('hidden');
let currentScore = 0;
let activePlayer = 0;
const scores=[0,0];
// reload pages for new playing
const pages = document.querySelector("body");
btnNew.addEventListener("click",function(){
    pages = window.location.reload(true);
})
// switch player
const switchPlayer =function(){
    document.getElementById(`current-${activePlayer}`).textContent = 0;
        //switch  to next player
        activePlayer = activePlayer === 0 ? 1 : 0;
        currentScore = 0;
        player0E1.classList.toggle('player-active');
        player1E1.classList.toggle('player-active');
    
}

//the rolling dice functionality
btnRoll.addEventListener("click",function(){
    //generating a random rollDice
    const dice = Math.floor(Math.random()*6)+1;
    console.log(dice);
    //display the dice
    diceE1.classList.remove('hidden');
    diceE1.src=`dice-${dice}.png`;
    //check for the rolled 1 is true switch to next player
    if(dice!== 1){
        //add dice current score
        currentScore +=dice;
        document.getElementById(`current-${activePlayer}`).textContent = currentScore;
        current0E1.textContent = currentScore;
    }else{
        switchPlayer()
    }


})

btnHold.addEventListener("click",function(){
    scores[activePlayer]+=currentScore;
    // scores[1] = scores[1]+ currentScore;
    document.getElementById(`score-${activePlayer}`).textContent = scores[activePlayer];
    if(scores[activePlayer]>=20){
        document.querySelector(`.player-${activePlayer}`).classList.add("anim")
        document.querySelector("audio").play();
        document.querySelector("h4").innerHTML="vous avez gagner";
        document.querySelector(`.player-${activePlayer}`).classList.add('player-winner')
        document.querySelector(`.player-${activePlayer}`).classList.remove('player-active')


    }else{

        switchPlayer();
    }
});
