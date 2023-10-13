const { ship } = require("./ship");

const gameboard = () => {
  let gridArr = [];

  let carrier = ship("Carrier");
  let battleship = ship("Battleship");
  let destroyer = ship("Destroyer");
  let submarine = ship("Submarine");
  let patrol = ship("Patrol Boat");

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
    missedShots: [],
    sunkShips: [],
    receiveAttack(gridEl) {
      let targetCoord = gridEl - 1;
      let hitTile = this.grid[targetCoord];
      hitTile.attacked = true;
      if (hitTile.shipName === undefined) {
        this.missedShots.push(hitTile.coordinate);
      } else {
        console.log(`${hitTile.shipName} was hit`);
      }
    },
  };
};

module.exports = { gameboard };

console.log(gameboard());
