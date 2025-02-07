import React, { useContext, useEffect, useState } from "react";
import "./Test.css";
import { CounterContext } from "../context/CounterContext";
import MyContext from "../context/MyContext";

const Test = () => {
  const { counter, increment, decrement } = useContext(CounterContext);

  // useState
  //  to define state
  // one params, default value of the state
  // const [currentvalue, updatevalue] = useState("intialvalue");

  const [count, setCount] = useState(0);
  const [name, setName] = useState("Firstname");

  // useEffect - side effects of component
  useEffect(() => {
    console.log("Test component is mount");
    return () => {
      console.log("Test component is unmount");
    };
  }, []);

  // useEffect
  useEffect(() => {
    console.log(count + " is updated");
    console.log(name + " is updated");
  }, [count, name]);

  // useContext
  // - context API implementation
  // by using this method we can access global state
  // consumer logic can be used better in class components rather than function components
  // in functional components better to use hooks method i.e useContext

  // benefits of using useContext
  // Wrapping not required
  // no need of subscriber
  //  less complexity
  // better readability of code

  return (
    <div className="testcontainer">
      <h2>Counter :{counter} </h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Test;
