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
    isGameOver: false,
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
    receiveAttack: function (xCoord, yCoord) {
      console.log(`Hit logged at ${xCoord},${yCoord}`);
      this.grid.forEach((obj) => {
        if (obj.x == xCoord && obj.y == yCoord) {
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
    plotFleet: function () {
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
    checkSunkShips: function () {
      let fleet = this.myFleet;
      fleet.forEach((ship) => {
        if (ship.sunk === true) {
          this.sunkShips.push(String(ship.name));
        }
      });
    },

    checkGameOver: function () {
      if (this.sunkShips.length === 5) {
        this.isGameOver = true;
      }
    },
  };
};

module.exports = { gameboard };
