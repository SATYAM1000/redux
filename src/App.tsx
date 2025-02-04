import React, { useEffect } from "react";
import Child from "./components/child1";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import {
  incremented,
  decremented,
  amountAdded
} from "./features/counter/counter.slice";

export type TValue = {
  key1: string;
  key2: string;
};

const App = () => {
  const currentValueOfCounter = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const [value, setValue] = React.useState<TValue>({
    key1: "value1",
    key2: "value2",
  });

  useEffect(() => {
    console.log("useffect is called");
    console.log("value is ", value);
  }, [value]);
  return (
    <div>
      <Child value={value} />

      <div>{currentValueOfCounter}</div>
      <button onClick={() => dispatch(incremented())}>increment</button>
      <button onClick={() => dispatch(decremented())}>decrement</button>
      <button onClick={() => dispatch(amountAdded(10))}>amountAdded</button>
    </div>
  );
};

export default App;
