// Game Logic

let money = 0;
let currentTool = 'teeth';
let scissorsPrice = 5;
let pushLawnmowerPrice = 25;
let batteryLawnmowerPrice = 250;
let teamPrice = 500;


// Game Function

function cutGrass() {
    if (currentTool === 'teeth') {
      money += 1;
      alert('You earned $1 with your teeth!');
    } else if (currentTool === 'scissors') {
      money += 5;
      alert('You earned $5 with the scissors!');
    } 
  }
  

  // buying toolds

  function buyScissors() {
    if (money >= scissorsPrice) {
      money -= scissorsPrice;
      currentTool = 'scissors';
      alert('You bought scissors!');
    } else {
      alert("You don't have enough money to buy scissors!");
    }
  }
  

  
  function startGame() {
    while (true) {
      let action = prompt('Type "cut" to cut grass, "buy" to buy tools, or "status" to check your status.');
  
      if (action === 'cut') {
        cutGrass();
      } else if (action === 'buy') {
        let toolChoice = prompt('Type "scissors", "pushLawnmower", "batteryLawnmower", or "team" to buy a tool.');
        if (toolChoice === 'scissors') {
          buyScissors();
        } 
      } else if (action === 'status') {
        alert('You have $' + money + ' and your current tool is ' + currentTool + '.');
      }
  
      if (currentTool === 'team' && money >= 1000) {
        alert("You've won the game!");
        break;
      }
    }
  }
  
  startGame();
  