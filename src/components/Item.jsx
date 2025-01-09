import React from "react";


const Item = ({ image, key }) => {
  return (
    <div className="item">
      <p>{key}</p>
      <img src={image} />
    </div>
  );
};

export default Item;
