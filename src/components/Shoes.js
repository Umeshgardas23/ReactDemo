import React, { useContext } from "react";
import Car from "./Car";
import MyContext from "../context/MyContext";

const Shoes = () => {
  const shoesdata = useContext(MyContext);

  return (
    <>
      {Object.keys(shoesdata.shoes).map((shoeID) => (
        <Car
          key={shoeID}
          name={shoesdata.shoes[shoeID].name}
          year={shoesdata.shoes[shoeID].year}
          price={shoesdata.shoes[shoeID].price}
        />
      ))}
    </>
  );
};

export default Shoes;
