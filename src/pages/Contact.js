import React from "react";
import Item from "../components/Item";

const Contact = () => {
  const data = [
    {
      id: 1,
      img: "https://th.wallhaven.cc/small/ex/exmxpw.jpg",
    },
    {
      id: 2,
      img: "https://th.wallhaven.cc/small/yx/yxdvjx.jpg",
    },
    {
      id: 3,
      img: "https://th.wallhaven.cc/small/rr/rrl1kj.jpg",
    },
  ];
  return (
    <div>
      {data.map((item) => {
        return <Item key={item.id} image={item.img} />;
      })}
    </div>
  );
};

export default Contact;
