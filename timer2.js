const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  if (line === "b") {
    console.log('.');
  } else if (parseInt(line, 10) != NaN && parseInt(line, 10) <= 9) {
    console.log(`setting timer for ${line} seconds...`)
    setTimeout(() => {
      console.log('.');
    }, line * 1000);
  }
});

rl.on('SIGINT', () => {
  console.log("Thanks for using me, ciao!");  
  rl.close();
});
