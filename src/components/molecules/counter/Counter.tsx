import React, { useState } from "react";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";
import { SecondaryButton } from "../../atoms/button/SecondaryButton";

const Counter: React.FC<{}> = () => {
  const [value, setValue] = useState<number>(0);

  const increment = () => {
    setValue(value + 1);
  };

  const decrement = () => {
    setValue(value - 1);
  };

  return (
    <div>
      <div>value: {value}</div>
      <PrimaryButton onClick={increment}>+1</PrimaryButton>
      <SecondaryButton onClick={decrement}>-1</SecondaryButton>
    </div>
  );
};

export default Counter;
