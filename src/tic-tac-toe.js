	class TicTacToe {
    constructor() {
     this.counter = 0;
     this.field = [
         '0',
         '0',
         '0',
         '0',
         '0',
         '0',
         '0',
         '0',
         '0',
     ];
    }

    getCurrentPlayerSymbol() {
    if ( this.counter % 2 === 0) 
    return 'x';
    else return 'o';
    }

    nextTurn(rowIndex, columnIndex) {
            if(this.field[rowIndex * 3 + columnIndex] === 'x' || 
               this.field[rowIndex * 3 + columnIndex] === 'o')
            {
            }
            else {
             this.field[rowIndex * 3 + columnIndex] = this.getCurrentPlayerSymbol();
             this.counter++;
                 }
    }

    isFinished() {
    if(this.getWinner() || this.noMoreTurns())
     return true;
     else return false;
    }

    getWinner() {          
        for(var i = 0; i < 7; i = i + 3) {
            if(this.field[i] !== "0" && this.field[i] === this.field[i + 1] && this.field[i + 1] == this.field[i + 2]) {
                return this.field[i];
            }
        }

        for(var i = 0; i < 3 ; i++) {
            if(this.field[i] !== "0" && this.field[i] === this.field[i + 3] && this.field[i + 3] === this.field[i + 6]) {
                return this.field[i];
            }
        }

        for(var i = 0, j = 4; i < 3 ; i = i + 2, j = j - 2) {
            if(this.field[i] !== "0" && this.field[i] == this.field[i + j] && this.field[i + j] === this.field[i + 2*j]) {
                return this.field[i];
            }
        }
        return null;
}

    noMoreTurns() {
     if(this.counter === 9)
      return true;
     else return false;
    }

    isDraw() {
    if (this.noMoreTurns() && this.getWinner() === null)
     return true;
     else return false;
    }

    getFieldValue(rowIndex, colIndex) {
	if ( this.field[rowIndex * 3 + colIndex] === 'x' ||         
         this.field[rowIndex * 3 + colIndex] === 'o')
		return this.field[rowIndex * 3 + colIndex];
        else return null;
    }
}

module.exports = TicTacToe;
