import * as React from "react";

interface Props {
  FName: string;
  LName?: string;
}

export default (props: Props) => {
  return (
    <div>
      <div>{props.FName}</div>
      {props.LName ? <div>{props.LName}</div> : null}
    </div>
  );
};
