import React, { useState } from "react";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";
import { SecondaryButton } from "../../atoms/button/SecondaryButton";

const Counter: React.FC<{}> = () => {
  const initialValue: any = 0;
  const [value, setValue] = useState<number>(initialValue);

  const increment = () => {
    setValue((prevState) => prevState + 1);
  };

  const decrement = () => {
    setValue((prevState) => prevState - 1);
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
