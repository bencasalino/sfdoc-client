import React, { Component } from "react";
import Header from "./components/Header";
import About from "./components/About";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return <div className="App">
        <Header />
        <body>
          <div className="AboutSection">
            <About />
          </div>
        </body>
      </div>;
  }
}

export default App;
