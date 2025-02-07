import { createContext, useState } from "react";

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("umesh");

 

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter === 0) {
      return;
    }
    setCounter(counter - 1);
  };

  return (
    <CounterContext.Provider
      value={{ counter, increment, decrement, name, setName }}
    >
      {children}
    </CounterContext.Provider>
  );
};
