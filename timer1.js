let myArgs = process.argv.slice(2);
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
