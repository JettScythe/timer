const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const timer = (myArgs) => {
  for (const arg of myArgs) {
    let val = arg.split(",").map(Number)
    if (val > 0) {
      setTimeout(() => {
        process.stdout.write('.');
      }, val * 1000);
    } else {
      return;
    }
  } 
};
timer(myArgs);