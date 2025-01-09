import React from "react";
class Data2 extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div style={{ width: "200px", height: "200px", border: "1px solid red" }}>
        <h1>Data 2 component</h1>
        <p>{this.props.name} </p>
        <p>{this.props.age} </p>
      </div>
    );
  }
}
export default Data2;
