import React, { useEffect, useState } from "react";
import "./Test.css";

const Test = () => {
  // useState
  //  to define state
  // one params, default value of the state
  // const [currentvalue, updatevalue] = useState("intialvalue");

  const [count, setCount] = useState(0);
  
  // useEffect
  useEffect(() => {
    console.log("Test component is mount");
  },[]);

  useEffect(() => {
    return () => {
      console.log("Test component is unmount");
    };
  },[]);

  useEffect(() => {
    console.log(count + " is updated");
  },[count]);

  return (
    <div className="testcontainer">
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>increase cound</button>
      <button onClick={() => setCount(count - 1)}>decrease cound</button>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  );
};

export default Test;
