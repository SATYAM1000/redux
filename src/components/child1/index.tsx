import React, { FC } from "react";
import { TValue } from "../../App";

interface IChildProps {
  value: TValue;
}

const Child: FC<IChildProps> = ({ value }) => {
  value.key1 = "value changed";
  return <div>Child</div>;
};

export default Child;
