import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Test from "./pages/Test";
import Counter2 from "./components/Counter2";
import Counter3 from "./components/Counter3";

// Components

class App extends React.Component {
  render() {
    return <Counter2 />;
  }
}
export default App;
