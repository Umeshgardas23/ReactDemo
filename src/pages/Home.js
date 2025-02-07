import React from "react";
import "./Home.css";
import Product from "../components/Product";
import { Helmet } from "react-helmet";
import Counter2 from "../components/Counter2";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
    this.state = {
      heading: "Hello",
      image: "https://th.wallhaven.cc/small/l8/l8x1pr.jpg",
      loader: true,
    };
    console.log("Constructor called");
  }

  getData() {
    this.setState({
      heading: "How are you",
      image: "https://th.wallhaven.cc/small/6d/6dryw6.jpg",
    });
  }
  // Mounting
  componentDidMount() {
    const getData = fetch("https://jsonplaceholder.typicode.com/posts");
    console.log("componentDidMount called");
  }
  // fetch some data from API ,external source
  // Updating
  ShouldComponentUpdate = () => {
    return false;
  };

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log("PrevProps", prevProps);
    console.log("PrevState", prevState);
    return "Umesh";
  };

  ComponentDidUpdate = (prevProps, prevState, data) => {
    console.log("PrevProps", prevProps);
    console.log("PrevState", prevState);
    console.log(data);
  };

  // Unmounting
  componentWillUnmount = () => {
    console.log("componentWillUnmount called");
    this.setState({
      heading: "Bye",
    });
  };

  render() {
    console.log("Render called");
    return (
      <>
        <div className="home">
          <Helmet>
            <meta charSet="utf-8" />
            <title>Home</title>
            <link rel="canonical" href="http://localhost:3000/" />
          </Helmet>
         {/*  {this.state.heading}
          <img src={this.state.image} alt="Landscape" />

          <button onClick={this.getData}>Click</button> */}
          {/* <Product /> */}
          <Counter2 />
        </div>
      </>
    );
  }
}
export default Home;
