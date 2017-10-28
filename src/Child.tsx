import * as React from "react";

interface Props {
  FName: string;
}

export default (props: Props) => {
  return (
    <div>
      <div>{props.FName}</div>
    </div>
  );
};
