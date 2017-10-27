import * as React from "react";
import "./Parent.css";

interface Props {
  children: React.ReactNode;
}

export const Parent2 = (props: Props) => (
  <div className="Parent Parent2">
    Parent
    <div className="Children Children2">{props.children}</div>
  </div>
);

export default (props: Props) => (
  <div className="Parent DefaultParent">
    Parent
    <div className="Children DefaultChildren">{props.children}</div>
  </div>
);
