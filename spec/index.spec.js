const bacteria = require("../bacteria");
const { expect } = require("chai");

describe("bacteria", () => {
  it("No bacteria are created when there are no bacteria to begin with", () => {
    expect(bacteria([])).to.eql([]);
  });
  it("Isolated bacteria die", () => {
    expect(bacteria([[0, 0]])).to.eql([]);
    expect(bacteria([[0, 0], [4, 4]])).to.eql([]);
  });
  it("Behaves as expected with the provided test case", () => {
    const grid1 = [
      [1, 2],
      [2, 2],
      [3, 2],
      [1000000001, 1000000002],
      [1000000002, 1000000002],
      [1000000003, 1000000002]
    ];
    const grid2 = [
      [2, 1],
      [2, 2],
      [2, 3],
      [1000000002, 1000000001],
      [1000000002, 1000000002],
      [1000000002, 1000000003]
    ];
    expect(bacteria(grid1)).to.eql(grid2);
    expect(bacteria(grid2)).to.eql(grid1);
  });
  it("Diamonds are forever", () => {
    const diamond = [[1, 3], [1, 4], [2, 2], [2, 5], [3, 3], [3, 4]];
    expect(bacteria(diamond)).to.eql(diamond);
  });
  it("The grid shifts when bacteria expands, if the shift argument is used", () => {
    let startGrid = [[1, 0], [2, 0], [3, 0]];
    let endGrid = [[2, 0], [2, 1], [2, 2]];
    expect(bacteria(startGrid, true)).to.eql(endGrid);
    startGrid = [[0, 1], [0, 2], [0, 3]];
    endGrid = [[0, 2], [1, 2], [2, 2]];
    expect(bacteria(startGrid, true)).to.eql(endGrid);
  });
  it("Negative positions on the grid are used when bacteria expands, if the shift argument is not used", () => {
    let startGrid = [[1, 0], [2, 0], [3, 0]];
    let endGrid = [[2, -1], [2, 0], [2, 1]];
    expect(bacteria(startGrid)).to.eql(endGrid);
    startGrid = [[0, 1], [0, 2], [0, 3]];
    endGrid = [[-1, 2], [0, 2], [1, 2]];
    expect(bacteria(startGrid)).to.eql(endGrid);
  });
});
