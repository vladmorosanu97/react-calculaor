import React, { Component } from "react";

import "../styles/Button.scss";
import "../styles/Colors.scss";
class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { value, type } = this.props;
    return (
      <div
        className="button"
        style={
          {
            backgroundColor:
              type === "operand" 
                ? "#eaf8f3" 
                : type === "equal" 
                ? "#f8dade" 
                : null,
            color:
              type === "operand"
                ? "#99dfc6"
                : type === "equal"
                ? "#ea8894"
                : null
          }
        }
        onClick={() => this.props.onClickItem(value)}
      >
        {value}
      </div>
    );
  }
}

export default Button;
