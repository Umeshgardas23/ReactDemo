import React from "react";
class Data1 extends React.Component {
  constructor() {
    super();
    console.log(this);
  }
  render() {
    return (
      <div style={{ width: "200px", height: "200px", border: "1px solid red" }}>
        <h1>Data 1 component</h1>
        <p>{this.props.fullname} </p>
        <p>{this.props.updateage} </p>
      </div>
    );
  }
}
export default Data1;
