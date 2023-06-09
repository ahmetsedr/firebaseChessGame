import Piece from "./Piece";
import whiteRook from '../assets/Images/white_rook.svg';
import blackRook from '../assets/Images/black_rook.svg';

class Rook extends Piece {
    constructor(color,board,position, hasMoved){
        super(color,board,position, hasMoved);
        if(color==='white'){
            this.image = whiteRook;
        } else {
            this.image = blackRook;
        }
        this.letter = 'R';
    }

    availableMoves() {
        const [row, col] = this.position;
        const moves = [];

        const dirs = [[0,1],[0,-1],[1,0],[-1,0]];

        const check = (r,c,dir) => {
            const [newRow,newCol] = [r+dir[0],c+dir[1]];
            if(this.outOfBounds(newRow,newCol)) return;
            if(this.board[newRow][newCol]){
                if(this.board[newRow][newCol].color !== this.color) moves.push([newRow,newCol]);
                return;
            } else {
                moves.push([newRow,newCol]);
                check(newRow,newCol,dir);
            }
        };

        for(let dir of dirs) check(row,col,dir);

        return moves;
    }
}

export default Rook;