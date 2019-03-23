import React, { Component } from "react";
import "../styles/App.scss";
import Calculator from "./Calculator";
import "../styles/flexbox.scss";

class App extends Component {
  render() {
    return (
      <div className="App display-flex">
        <section className="margin-left-auto margin-right-50 margin-top-auto margin-bottom-auto">
          <Calculator />
        </section>
      </div>
    );
  }
}

export default App;
