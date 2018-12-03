const {
  countNeighbourInstances,
  identifyNextGen,
  shiftGrid
} = require("./utils");
const bacteria = (startCoordinates, shift) => {
  const neighbourCounts = countNeighbourInstances(startCoordinates);
  const { nextGen, shiftX, shiftY } = identifyNextGen(neighbourCounts);
  if (!shift || !(shiftX || shiftY)) return nextGen;
  return shiftGrid(nextGen, shiftX, shiftY);
};

module.exports = bacteria;
