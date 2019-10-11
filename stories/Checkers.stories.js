import React from "react";
import Draggable from "react-draggable";
import "./style.css";

// This is used by Storybook:
export default {
  title: "Checkers"
};

// This is the main app:
export const Checkers = () => {
  // base size
  return <Board size={400} />;
};
/* size modifier for the board and pieces */
class Board extends React.Component {
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
  // rendering the board its self with its color
  render() {
    // calculate how big the space to be
    const spaceSize = this.props.size / 8;
    // calculate how big the piece radius should be aka a circle
    const pieceRadius = spaceSize / 2;

    return (
      // vector graphic object (dose not use pixels but instead shapes)
      <svg
        // passing in a 400 by 400 board
        height={this.props.size}
        width={this.props.size}
        // focusing on the board game
        viewBox={`0 0 ${this.props.size} ${this.props.size}`}
      >
        {/* cycles through each row */}
        {this.state.board.map((row, y) => {
          // check if its an even row
          const isEvenRow = y % 2;
          // calculting where it will be on the y axis within the svg
          const spaceY = spaceSize * y;
          // go through each space of the row
          return row.map((space, x) => {
            // checking if its a even space
            const isEvenSpace = x % 2;
            // calculting where it will be on the x axis within the svg
            const spaceX = spaceSize * x;

            return (
              <Space
                spaceX={x} //grabbing x coordinate of space
                spaceY={y} //grabbing y coordinate of space
                key={x} // came back undefined
                checker={space} //check to see if player one or two is on the space
                shade={
                  (isEvenSpace && !isEvenRow) || (!isEvenSpace && isEvenRow)
                }
                size={spaceSize}
                x={spaceX}
                y={spaceY}
              />
            );
          });
        })}
        {/* going through each row to place the pieces */}
        {this.state.board.map((row, y) => {
          const spaceY = spaceSize * y;

          return row.map((space, x) => {
            const spaceX = spaceSize * x;

            if (space === 0) {
              // The space is empty.
              return null;
            }

            return (
              <Piece
                checkerX={x} //grabbing x coordinate of checker
                checkerY={y} //grabbing Y coordinate of checker
                key={x} // came back undefined
                centerX={spaceX + pieceRadius}
                centerY={spaceY + pieceRadius}
                player={space}
                radius={pieceRadius * 0.75}
              />
            );
          });
        })}
      </svg>
    );
  }
}

class Space extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.checkSpace = this.checkSpace.bind(this);
  }
  checkSpace() {
    if (this.props.checker === 1) {
      console.log("player1");
    } else if (this.props.checker === 2) {
      console.log("player2");
    }
  }
  handleClick() {
    console.log(this.props.spaceX, this.props.spaceY);
  }
  render() {
    return (
      <rect
        onClick={this.checkSpace}
        fill={this.props.shade ? "green" : "lightgray"}
        height={this.props.size}
        width={this.props.size}
        x={this.props.x}
        y={this.props.y}
      />
    );
  }
}

class Piece extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log(this.props.checkerX, this.props.checkerY);
  }
  render() {
    return (
      <Draggable>
        <circle
          onClick={this.handleClick}
          cx={this.props.centerX}
          cy={this.props.centerY}
          fill={this.props.player === 1 ? "white" : "red"}
          r={this.props.radius}
        />
      </Draggable>
    );
  }
}
