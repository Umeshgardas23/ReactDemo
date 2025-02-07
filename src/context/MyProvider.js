import React from "react";
import MyContext from "./MyContext";

export default class MyProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "umesh",
      cars: {
        car1: { name: "Honda", year: "2016", price: "100000" },
        car2: { name: "BMW", year: "2019", price: "200000" },
        car3: { name: "Mercedes", year: "2020", price: "300000" },
      },
      shoes: {
        shoe1: { name: "Bata", year: "2016", price: "100000" },
        shoe2: { name: "Nike", year: "2019", price: "200000" },
        shoe3: { name: "paragon", year: "2020", price: "300000" },
      },
    };
  }

  render() {
    return (
      <MyContext.Provider value={this.state}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
