import * as React from "react";
import "./App.css";

import Parent, { Parent2 } from "./Parent";
import Child from "./Child";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Parent>
          <Child FName="James" />
          <Child FName="Gene" />
        </Parent>
        <br />
        <Parent2>
          <Child FName="Michael" LName="Smith" />
          <Child FName="Tiffany" LName="Doe" />
          <Child FName="Jane" LName="Ross" />
          <Child FName="Ellie" LName="Macy" />
          <Child FName="Benji" LName="Arthur" />
        </Parent2>
      </div>
    );
  }
}

export default App;
