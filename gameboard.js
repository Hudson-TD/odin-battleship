const gameboard = () => {
  let gridArr = [];

  const generateGrid = () => {
    for (let i = 1; i <= 100; i++) {
      gridArr.push({
        coordinate: i,
        shipName: undefined,
        attacked: false,
      });
    }
    return gridArr;
  };

  return {
    grid: generateGrid(),
  };
};

module.exports = { gameboard };

console.log(gameboard());
