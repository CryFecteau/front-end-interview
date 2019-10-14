import React from "react";

export default class Piece extends React.Component {
  constructor(...args) {
    super(...args);
    this.clickHandler = this.props.clickHandler
      ? this.props.clickHandler.bind(this)
      : function() {};
    this.boardX = this.props.boardX;
    this.boardY = this.props.boardY;
  }
  render() {
    return (
      <circle
        className="piece"
        onClick={this.clickHandler}
        cx={this.props.centerX}
        cy={this.props.centerY}
        fill={this.props.player === 1 ? "white" : "red"}
        r={this.props.radius}
      />
    );
  }
}
