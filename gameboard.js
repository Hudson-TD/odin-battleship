const { ship } = require("./ship");

const gameboard = () => {
  let gridArr = [];

  let fleet = [
    "Carrier",
    "Battleship",
    "Destroyer",
    "Submarine",
    "Patrol Boat",
  ];

  const generateGrid = () => {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        gridArr.push({
          x: i,
          y: j,
          shipName: undefined,
          attacked: false,
        });
      }
    }
    return gridArr;
  };

  return {
    grid: generateGrid(),
    missedShots: [],
    sunkShips: [],
    receiveAttack(xCoord, yCoord) {
      this.grid.forEach((obj) => {
        if (obj.x === xCoord && obj.y === yCoord) {
          obj.attacked = true;
          if (obj.shipName === undefined) {
            this.missedShots.push({ x: xCoord, y: yCoord });
          } else {
            console.log(`${obj.shipName} was hit`);
          }
        }
      });
    },
  };
};

module.exports = { gameboard };

let test = gameboard();
test.receiveAttack(0, 5);
console.log(test);
