/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores,roundScore,activePlayer,dice, gamePlaying;

init();

//Setting Value / Setter
// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-'+ activePlayer).innerHTML = '<em>' + dice + '</em>'

// Reading Value / Getter
// var x = document.querySelector('#score-0').textContent;
// console.log(x);




    // Anonymous function                                    callbackFunction

document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying){
//1. random number
dice = Math.floor(Math.random() * 6) + 1;

// 2. display result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    //change img in js
    diceDOM.src = 'dice-' + dice + '.png';

    // 3. Update the round score IF the rolled number was NOT 1 
     if(dice !== 1) {
         //add score
         roundScore += dice;
         document.querySelector('#current-'+ activePlayer).textContent = roundScore;
     }else{
         //next player
        nextPlayer();
     }
    }
    

})


document.querySelector('.btn-hold').addEventListener('click',function(){
if(gamePlaying){
// Add Current Score to Gloabl Score
scores[activePlayer] += roundScore;

// Update the UI
document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

// Check if player won the game
 if  (scores[activePlayer] >= 10) {
     document.querySelector('#name-'+ activePlayer).textContent = 'Winner!';
     document.querySelector('.dice').style.display = 'none';
     document.querySelector('.player-'+ activePlayer + '-panel').classList.add('winner');
     document.querySelector('.player-'+ activePlayer + '-panel').classList.remove('active');
     gamePlaying = false;
 } else{
     // Next Player
 nextPlayer();
 }
}


})
function nextPlayer(){
     //next player
     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
     roundScore = 0;

     document.getElementById('current-0').textContent = '0';
     document.getElementById('current-1').textContent = '0';

     document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
    //  document.querySelector('.player-0-panel').classList.remove('active');
    //  document.querySelector('.player-1-panel').classList.add('active');
    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click',init);
function init(){
    scores = [0,0];
roundScore = 0;
activePlayer = 0;
gamePlaying = true;
// Js CSS
document.querySelector('.dice').style.display = 'none';
// select elemnt by id
document.getElementById('score-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
}


