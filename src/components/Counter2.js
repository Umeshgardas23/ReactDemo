import React, { useCallback, useState } from "react";

const funcounter = new Set();

const Counter2 = () => {
  // useCallback - hook
  //  component - child - re-rendering multiple times (frequent)
  const [counter, setCounter] = useState(0);
  const [mycounter, setMyCounter] = useState(0);

  const increment = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  const decrement = useCallback(() => {
    setCounter(counter - 1);
  }, [counter]);

  const MyCounterincrement = useCallback(() => {
    setMyCounter(mycounter + 1);
  }, [mycounter]);

  console.log("set called", funcounter.size);
  funcounter.add(increment);
  funcounter.add(decrement);
  funcounter.add(MyCounterincrement);

  return (
    <div>
      <h4>Counter: {counter}</h4>
      <h4>Mycounter : {mycounter}</h4>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={MyCounterincrement}>MyCounter</button>
    </div>
  );
};

export default Counter2;
