import React from "react";
import Space from "./Space";
import Piece from "./Piece";

// size modifier for the board and pieces
export default class Board extends React.Component {
  state = {
    board: [
      [0, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 1, 0, 1],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [2, 0, 2, 0, 2, 0, 2, 0],
      [0, 2, 0, 2, 0, 2, 0, 2],
      [2, 0, 2, 0, 2, 0, 2, 0]
    ]
  };
  // render the spaces and pieces with color
  render() {
    // calculating gow big the space is
    const spaceSize = this.props.size / 8;
    // calculating how big the piece radius should be
    const pieceRadius = spaceSize / 2;

    return (
      // scalable vector graphic object(does not use pixels but instead shapes)
      <svg
        // passing in a 400 by 400 board from checker.stories
        height={this.props.size}
        width={this.props.size}
        // focusing on the board game
        viewBox={`0 0 ${this.props.size} ${this.props.size}`}
      >
        {/* cycles through each row */}
        {this.state.board.map((row, y) => this.renderSpaces(row, y, spaceSize))}
        {this.state.board.map((row, y) =>
          this.renderPieces(row, y, spaceSize, pieceRadius)
        )}
      </svg>
    );
  }
  // rendering each space in the row on the checker board
  renderSpaces(row, y, spaceSize) {
    // checks if its an even row
    const isEvenRow = y % 2;
    // calculting where it will be on the y axis within the svg
    const spaceY = spaceSize * y;
    // cycles through each space in the row
    return row.map((space, x) => {
      // checks if its an even space
      const isEvenSpace = x % 2;
      // calculting where it will be on the x axis withing the svg
      const spaceX = spaceSize * x;
      // args passed through to tell where titles will start off on the board
      return this.renderSpace(
        x,
        y,
        spaceX,
        spaceY,
        spaceSize,
        isEvenSpace,
        isEvenRow
      );
    });
  }
  // rendering each piece on the board
  renderPieces(row, y, spaceSize, pieceRadius) {
    // calculting where it will be on the y axis within the svg
    const spaceY = spaceSize * y;
    // cycles through each space on the row
    return row.map((space, x) => {
      // calculting where it will be on the x axis withing the svg
      const spaceX = spaceSize * x;
      // if space is empty
      if (space === 0) {
        return null;
      }
      // args passed through to tell where pieces will start off on the board
      return this.renderPiece(space, x, y, spaceX, spaceY, pieceRadius);
    });
  }

  renderPiece(space, x, y, spaceX, spaceY, pieceRadius) {
    return (
      <Piece
        key={x}
        centerX={spaceX + pieceRadius}
        centerY={spaceY + pieceRadius}
        player={space}
        radius={pieceRadius * 0.75}
        boardX={x}
        boardY={y}
        clickHandler={this.manipulatePiece(this)}
      />
    );
  }

  renderSpace(x, y, spaceX, spaceY, spaceSize, isEvenSpace, isEvenRow) {
    return (
      <Space
        key={x}
        shade={(isEvenSpace && !isEvenRow) || (!isEvenSpace && isEvenRow)}
        size={spaceSize}
        x={spaceX}
        y={spaceY}
        boardX={x}
        boardY={y}
        clickHandler={this.manipulateSpace(this)}
      />
    );
  }

  movePieceToSpace(origin, destination) {
    // if the movement is not a legal one then do nothing
    if (!this.isLegalMove(origin, destination)) {
      return false;
    }
    // getting the piece value depending where it sits on the x and y axis
    const pieceVal = this.state.board[origin.y][origin.x];
    // setting the space to zero what its empty
    this.state.board[origin.y][origin.x] = 0;
    this.state.board[destination.y][destination.x] = pieceVal;

    this.setState(this.state);

    return true;
  }
  // NEED TO FIX: pieces can also move backwards
  isLegalMove(origin, destination) {
    // allowing both players to move
    return function() {
      if (this.props.player === 1) {
        const isValidY =
          destination.y === origin.y + 1 || destination.y === origin.y - 1;
        const isValidX =
          destination.x === origin.x + 1 || destination.x === origin.x - 1;
        return isValidX && isValidY;
      }
    };
  }

  manipulateSpace(board) {
    return function() {
      if (!board.state.movingPiece) {
        return false;
      }

      board.movePieceToSpace(board.state.movingPiece, {
        x: this.boardX,
        y: this.boardY
      });

      board.state.movingPiece = null;

      return true;
    };
  }

  manipulatePiece(board) {
    return function() {
      board.state.movingPiece = { x: this.boardX, y: this.boardY };
    };
  }
}
