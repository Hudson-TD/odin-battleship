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
    missedShots: [],
    receiveAttack(gridEl) {
      let targetCoord = gridEl - 1;
      let hitTile = this.grid[targetCoord];
      hitTile.attacked = true;
      if (hitTile.shipName === undefined) {
        this.missedShots.push(hitTile.coordinate);
      }
    },
  };
};

module.exports = { gameboard };

console.log(gameboard());
