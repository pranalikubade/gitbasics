let money = 100;
let goal = 200;
let bets = 0;
let wins = 0;

while (money > 0 && money < goal) {
  bets++;
  if (Math.random() < 0.5) {
    // win Rs 1
    money++;
    wins++;
  } else {
    // lose Rs 1
    money--;
  }
}

console.log("Number of bets:" +bets);
console.log('Number of wins:' +wins);
console.log('Winning percentage: '+(wins/bets)*100+"%");
console.log('Final amount: Rs '+money);
