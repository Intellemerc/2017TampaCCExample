import * as React from "react";
import "./App.css";

import Parent from "./Parent";
import Child from "./Child";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Parent>
          <Child FName="James" />
          <Child FName="Gene" />
        </Parent>
      </div>
    );
  }
}

export default App;
