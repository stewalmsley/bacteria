const readline = require("readline");
const bacteria = require("./bacteria");

const checkForArguments = () => {
  const args = process.argv.slice(2);
  const shift = args.find(arg => arg.toLowerCase() === "shift") ? true : false;
  const generations = args.find(
    arg => typeof +arg === "number" && +arg > 1 && +arg < 21
  );
  return { shift, generations };
};

const stdInHandler = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const input = [];
  rl.on("line", function(cmd) {
    if (cmd === "end") rl.close();
    input.push(cmd.split(",").map(coordinate => +coordinate));
  });

  rl.on("close", function(cmd) {
    const { shift, generations } = checkForArguments();
    const cycles = generations ? generations : 1;
    let generationCount = 0;
    let newCoordinates = null;
    while (generationCount < cycles) {
      newCoordinates = newCoordinates
        ? bacteria(newCoordinates, shift)
        : bacteria(input, shift);
      generationCount++;
      process.stdout.write(newCoordinates.join("\n") + "\nend \n");
    }
    process.exit(0);
  });
};

stdInHandler();

module.exports = stdInHandler;
