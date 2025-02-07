import React from "react";
import Item from "../components/Item";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact</title>
        <link rel="canonical" href="http://localhost:3000/" />
      </Helmet>
      {data.map((item) => {
        return <Item key={item.id} image={item.img} />;
      })}
    </div>
  );
};

export default Contact;
