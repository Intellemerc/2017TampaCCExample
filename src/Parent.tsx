import * as React from "react";
import "./Parent.css";

interface Props {
  children: React.ReactNode;
}
export default (props: Props) => (
  <div className="Parent">
    Parent
    {props.children}
  </div>
);
