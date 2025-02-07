import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const Counter = () => {
  const { counter, increment, decrement, name, setName } =
    useContext(CounterContext);

  return (
    <div>
      <h2>Counter :{counter} </h2>
      <p>{name}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={() => setName("maxxzoom")}>Updatename</button>
    </div>
  );
};

export default Counter;
