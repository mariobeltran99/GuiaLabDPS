class Rombo {
  diagonalVertical: number;
  diagonalHorizontal: number;
  constructor(diagonal_Vertical, diagonal_Horizontal) {
    this.diagonalVertical = diagonal_Vertical;
    this.diagonalHorizontal = diagonal_Horizontal;
  }

  area() {
    return (
      'El área del rombo es: ' + this.diagonalVertical * this.diagonalHorizontal
    );
  }
}

let myRombo = new Rombo(4, 5);
// myRombo.diagonalVertical = 4;
// myRombo.diagonalHorizontal = 5;

console.log(myRombo.area());
