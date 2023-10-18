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
    isLoser: false,
    grid: generateGrid(),
    missedShots: [],
    hits: [],
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
                this.hits.push({ x: xCoord, y: yCoord });
                this.myFleet[0].hit();
                break;
              case "Battleship":
                this.hits.push({ x: xCoord, y: yCoord });
                this.myFleet[1].hit();
                break;
              case "Destroyer":
                this.hits.push({ x: xCoord, y: yCoord });
                this.myFleet[2].hit();
                break;
              case "Submarine":
                this.hits.push({ x: xCoord, y: yCoord });
                this.myFleet[3].hit();
                break;
              case "Patrol Boat":
                this.hits.push({ x: xCoord, y: yCoord });
                this.myFleet[4].hit();
                break;

              default:
                break;
            }
          }
        }
      });
      this.checkSunkShips();
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
        if (ship.sunk === true && !this.sunkShips.includes(ship.name)) {
          this.sunkShips.push(String(ship.name));
        }
      });
      this.toggleGameOver();
    },

    toggleGameOver: function () {
      let trigger = this.sunkShips.length;
      if (trigger == 5) {
        this.isLoser = true;
      }
    },
  };
};

module.exports = { gameboard };
