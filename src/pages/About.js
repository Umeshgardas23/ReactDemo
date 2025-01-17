import React, { useState } from "react";

// Components
import Test from "./Test";

// Styles
import "./About.css";

const About = () => {
  const firstname = "John";
  const lastname = "Doe";

  const container = "Aboutcontainers";
  const id = "container";
  // What we can to in jsx

  const age = 10;

  // const clickEvent = () => {
  //   alert("Hello");
  // };

  const array = [1, 2, 3, 4, 5];

  //   Types of binding
  //  1.Property binding
  //  2.Attribute binding
  //  3.conditional binding
  //  4.event binding
  //  5.iterative binding

  //  expression in jsx

  const [toggle, setToggle] = useState(false);

  return (
    <div className={age < 20 ? container : ""}>
      {toggle ? <Test /> : ""}
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </div>
  );
};

export default About;
