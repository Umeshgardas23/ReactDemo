import React from "react";

const Car = (props) => {
  return (
    <div className="car">
      <h3>{props.name}</h3>
      <h3>{props.year}</h3>
      <h3>{props.price}</h3>
    </div>
  );
};

export default Car;
