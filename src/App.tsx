import * as React from "react";
import "./App.css";

import Parent, { Parent2 } from "./Parent";
import Child from "./Child";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Parent>
          <Child />
          <Child />
        </Parent>
        <br />
        <Parent2>
          <Child />
          <Child />
          <Child />
          <Child />
          <Child />
        </Parent2>
      </div>
    );
  }
}

export default App;
