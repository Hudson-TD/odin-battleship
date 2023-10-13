const { ship } = require("./ship");

const gameboard = () => {
  let gridArr = [];

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
    myFleet: [
      ship("Carrier"),
      ship("Battleship"),
      ship("Destroyer"),
      ship("Submarine"),
      ship("Patrol Boat"),
    ],
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
    plotFleet() {
      let fleet = this.myFleet;
      fleet.forEach((ship) => {
        let plots = ship.location;
        plots.forEach((coord) => {
          this.grid.forEach((obj) => {
            if (obj.x === coord.x && obj.y === coord.y) {
              obj.shipName = ship.name;
            }
          });
        });
      });
    },
  };
};

module.exports = { gameboard };

let test = gameboard();
test.plotFleet();
console.log(test);
