import React, { useEffect, useState } from "react";

// Components
import Test from "./Test";

// Styles
import "./About.css";
import { Helmet } from "react-helmet";
import Counter from "../components/Counter";

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
  const [name, setName] = useState("umseh");

  useEffect(() => {
    console.log("initial called");

    return () => {
      console.log("component unmounted");
    };
  }, [name]);

  return (
    <div className={age < 20 ? container : ""}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About</title>
        <link rel="canonical" href="http://localhost:3000/" />
      </Helmet>
      {toggle ? <Test /> : ""}
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {name}
      <button onClick={() => setName("umesh")}>Change name</button>

      <Counter />
    </div>
  );
};

export default About;
