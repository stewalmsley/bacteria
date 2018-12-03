exports.countNeighbourInstances = liveCoordinateArr => {
  return liveCoordinateArr.reduce((tallyObj, coordinate) => {
    let keyName = coordinate.join(",");
    let x = coordinate[0];
    let y = coordinate[1];
    if (tallyObj[keyName]) tallyObj[keyName].live = true;
    else tallyObj[keyName] = { live: true, count: 0, x, y };
    for (let i = x - 1; i <= x + 1; i++) {
      for (let j = y - 1; j <= y + 1; j++) {
        if (!((i === x) & (j === y))) {
          keyName = `${i},${j}`;
          if (tallyObj[keyName]) tallyObj[keyName].count++;
          else tallyObj[keyName] = { live: false, count: 1, x: i, y: j };
        }
      }
    }
    return tallyObj;
  }, {});
};

exports.identifyNextGen = neighbourCounts => {
  let shiftX = false;
  let shiftY = false;
  const nextGen = [];
  for (let key in neighbourCounts) {
    let { live, count, x, y } = neighbourCounts[key];
    if ((live && count > 1 && count < 4) || (!live && count === 3)) {
      if (x === -1) shiftX = true;
      if (y === -1) shiftY = true;
      nextGen.push([x, y]);
    }
  }
  return { nextGen, shiftX, shiftY };
};

exports.shiftGrid = (nextGen, shiftX, shiftY) => {
  return nextGen.map(coordinate => {
    let x = coordinate[0];
    let y = coordinate[1];
    if (shiftX) x++;
    if (shiftY) y++;
    return [x, y];
  });
};
