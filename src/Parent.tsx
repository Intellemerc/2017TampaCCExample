import * as React from "react";

export default class Parent extends React.Component {
  render() {
    return (
      <div>
        Parent
        {this.props.children}
      </div>
    );
  }
}