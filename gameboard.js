const gameboard = () => {
  let xAxis = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  let yAxis = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  const generateGrid = (x, y) => {
    let gridArr = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        gridArr.push(`${x[i]}${y[j]}`);
      }
    }
    return gridArr;
  };

  return {
    grid: generateGrid(xAxis, yAxis),
  };
};

module.exports = { gameboard };
