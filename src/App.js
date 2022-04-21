import logo from "./logo.svg";
import React, { Component } from 'react';
import "./App.css";
import Header from "./components/header";
import Battery from "./components/container";
const counterDefaultVal = {
  speed: {
    title: "Speed",
    unit: "mph",
    step: 5,
    min: 45,
    max: 70,
  },
  temperature: {
    title: "Outside Temperature",
    unit: "°",
    step: 10,
    min: -10,
    max: 40,
  },
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Battery counterDefaultVal={counterDefaultVal}/>{" "}
      </div>
    );
  }
}
export default App;
