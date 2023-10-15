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
            switch (obj.shipName) {
              case "Carrier":
                this.myFleet[0].hit();
                break;
              case "Battleship":
                this.myFleet[1].hit();
                break;
              case "Destroyer":
                this.myFleet[2].hit();
                break;
              case "Submarine":
                this.myFleet[3].hit();
                break;
              case "Patrol Boat":
                this.myFleet[4].hit();
                break;

              default:
                break;
            }
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
    checkSunkShips() {
      let fleet = this.myFleet;
      fleet.forEach((ship) => {
        if (ship.sunk === true) {
          this.sunkShips.push(ship.name);
        }
      });
    },
  };
};

module.exports = { gameboard };

const myBoard = gameboard();
console.log(myBoard);
