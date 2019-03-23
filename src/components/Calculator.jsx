import React, { Component } from "react";

import "../styles/Calculator.scss";
import Button from "./Button";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queue: "",
      result: ""
    };
  }

  handleOnClick = value => {
    if (this.state.result.toString().length > 0) {
      this.setState({
        queue: "",
        result: ""
      });
    }

    if (value.props !== undefined) {
      this.setState(prevState => {
        return {
          queue: prevState.queue.substring(0, prevState.queue.length - 1)
        };
      });
    } else if (value === "=") {
      let result = this.performCalculations();
      this.setState({ result: result });
    } else if (value === "C") {
      this.setState({ queue: "", result: "" });
    } else {
      this.setState(prevState => {
        return {
          queue: prevState.queue + value
        };
      });
    }
  };

  performOperation(first, second, operator) {
    let result;
    switch (operator) {
      case "+":
        result = parseFloat(first, 10) + parseFloat(second, 10);
        break;
      case "x":
        result = parseFloat(first, 10) * parseFloat(second, 10);
        break;

      case "-":
        result = parseFloat(first, 10) - parseFloat(second, 10);
        break;

      case "/":
        result = parseFloat(first, 10) / parseFloat(second, 10);
        break;

      case "%":
        result = parseFloat(first, 10) % parseFloat(second, 10);
        break;

      default:
        result = 0;
        break;
    }
    if (result % 1 !== 0) {
      result = result.toFixed(2);
    }
    return result.toString();
  }

  performCalculations() {
    let queue = this.state.queue;
    let firstNumber = "";
    let secondNumber = "";
    let operator = "";

    for (let index = 0; index < queue.length; index++) {
      if (firstNumber.length > 0 && operator.length > 0) {
        if (!isNaN(queue[index]) || queue[index] === ".") {
          secondNumber += queue[index];
        } else {
          firstNumber = this.performOperation(
            firstNumber,
            secondNumber,
            operator
          );
          secondNumber = "";
          operator = queue[index];
        }
      } else if (!isNaN(queue[index]) || queue[index] === ".") {
        firstNumber += queue[index];
      } else {
        operator = queue[index];
      }
    }
    return this.performOperation(firstNumber, secondNumber, operator);
  }
  
  render() {
    const { queue, result } = this.state;
    return (
      <div class="calculator display-flex flex-column space-between">
        <div className="display-calculator display-flex flex-column align-end flex-end margin-right-20 margin-top-auto margin-bottom-20">
          <div className="history text-right">
            {result.toString().length > 0 ? <div>{queue}</div> : null}
          </div>
          <div className="output-results text-right">
            {result.toString().length > 0 ? (
              <div>{result}</div>
            ) : (
              <div>{queue}</div>
            )}
          </div>
        </div>

        <div className="buttons margin-bottom-40">
          <div className="line-buttons margin-left-20 margin-right-20 display-flex space-around">
            <Button
              value={"%"}
              type="operand"
              onClickItem={this.handleOnClick}
            />
            <Button
              value={"/"}
              type="operand"
              onClickItem={this.handleOnClick}
            />
            <Button
              value={"C"}
              type="operand"
              onClickItem={this.handleOnClick}
            />
            <Button
              value={<i class="material-icons">keyboard_backspace</i>}
              type="operand"
              onClickItem={this.handleOnClick}
            />
          </div>
          <div className="line-buttons margin-left-20 margin-right-20 display-flex space-around">
            <Button value={1} onClickItem={this.handleOnClick} />
            <Button value={2} onClickItem={this.handleOnClick} />
            <Button value={3} onClickItem={this.handleOnClick} />
            <Button
              value={"x"}
              type="operand"
              onClickItem={this.handleOnClick}
            />
          </div>
          <div className="line-buttons margin-left-20 margin-right-20 display-flex space-around">
            <Button value={4} onClickItem={this.handleOnClick} />
            <Button value={5} onClickItem={this.handleOnClick} />
            <Button value={6} onClickItem={this.handleOnClick} />
            <Button
              value={"-"}
              type="operand"
              onClickItem={this.handleOnClick}
            />
          </div>
          <div className="line-buttons margin-left-20 margin-right-20 display-flex space-around">
            <Button value={7} onClickItem={this.handleOnClick} />
            <Button value={8} onClickItem={this.handleOnClick} />
            <Button value={9} onClickItem={this.handleOnClick} />
            <Button
              value={"+"}
              type="operand"
              onClickItem={this.handleOnClick}
            />
          </div>
          <div className="line-buttons margin-left-20 margin-right-20 display-flex space-around">
            <Button value={"00"} onClickItem={this.handleOnClick} />
            <Button value={0} onClickItem={this.handleOnClick} />
            <Button value={"."} onClickItem={this.handleOnClick} />
            <Button value={"="} type="equal" onClickItem={this.handleOnClick} />
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
