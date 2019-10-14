import React from "react";

export default class Space extends React.Component {
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
      <rect
        className="space"
        onClick={this.clickHandler}
        fill={this.props.shade ? "green" : "lightgray"}
        height={this.props.size}
        width={this.props.size}
        x={this.props.x}
        y={this.props.y}
      />
    );
  }
}
