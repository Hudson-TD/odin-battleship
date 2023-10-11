const gameboard = () => {
  let xAxis = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  let yAxis = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  const generateGrid = (x, y) => {
    let grid = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        grid.push(`${x[i]}${y[j]}`);
      }
    }
    return grid;
  };

  return {
    playerBoard: generateGrid(xAxis, yAxis),
    enemyBoard: generateGrid(xAxis, yAxis),
  };
};

module.exports = { gameboard };
