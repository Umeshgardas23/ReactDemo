import React from "react";
import "./Home.css"
class Home extends React.Component {
  constructor() {
    super();
    this.getData=this.getData.bind(this)
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
  };
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

  // Mounting
  componentDidMount() {
    const getData = fetch("https://jsonplaceholder.typicode.com/posts");
    console.log("componentDidMount called");
  }

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
          {this.state.heading}
          <img src={this.state.image} alt="Landscape" />
          <button onClick={this.getData}>Click</button>
        </div>
      </>
    );
  }
}
export default Home;
