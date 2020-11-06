import React, { Component, useState } from "react";
import "../styles/App.css";
import Relative from "./relative";

class App extends Component {
  constructor() {
    super();
    this.state = { relative: ["arun", "bibin", "nikhil", "amal"] };
  }
  render() {
    return (
      <div id="main">
        {/* Do not remove the main div */}
        <ol key="relativeList">
          {this.state.relative.map((name, index) => (
            <Relative
              key={`relativeListItem${index + 1}`}
              name={name}
              index={index}
            />
          ))}
        </ol>
      </div>
    );
  }
}

export default App;
