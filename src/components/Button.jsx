import React from "react";
import classNames from "classnames";

import "../styles/Button.scss";
import "../styles/Colors.scss";
import { ButtonType } from "../models/buttonType";

const Button = props => {
  const { value, type } = props;
  
  var stylesButton = classNames({
    button: true,
    "button-operator": type === ButtonType.operator,
    "button-equal": type === ButtonType.equal
  });

  
  return (
    <div className={stylesButton} onClick={() => props.onClickItem(value)}>
      {value}
    </div>
  );
};

export default Button;
