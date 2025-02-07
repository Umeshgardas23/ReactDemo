import React, { useContext } from "react";
import Car from "./Car";
import MyContext from "../context/MyContext";

const Cars = () => {
  const carsdata = useContext(MyContext);

  return (
    <>
      {Object.keys(carsdata.cars).map((carID) => (
        <Car
          key={carID}
          name={carsdata.cars[carID].name}
          year={carsdata.cars[carID].year}
          price={carsdata.cars[carID].price}
        />
      ))}
    </>
  );
};

export default Cars;
