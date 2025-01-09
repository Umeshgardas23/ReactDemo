import React from "react";
import Item from "../components/Item";
import "./Home.css"
import "../components/Item.css";
const Home = () => {
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
    {
      id: 2,
      img: "https://th.wallhaven.cc/small/yx/yxdvjx.jpg",
    },
    {
      id: 3,
      img: "https://th.wallhaven.cc/small/rr/rrl1kj.jpg",
    },
    {
      id: 2,
      img: "https://th.wallhaven.cc/small/yx/yxdvjx.jpg",
    },
    {
      id: 3,
      img: "https://th.wallhaven.cc/small/rr/rrl1kj.jpg",
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
    <>
      <div className="items">
        {data.map((item) => {
          return <Item key={item.id} image={item.img} />;
        })}
      </div>
    </>
  );
};

export default Home;
