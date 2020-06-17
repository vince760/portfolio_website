import React, { Component } from "react";
import Header from '../src/components/Header'
import About from "../src/components/About"
import Resume from '../src/components/Resume'
import Portfolio from '../src/components/Portfolio'
import Contact from '../src/components/Contact'
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Header />
          <About />
          <Resume />
          <Portfolio />
          <Contact />

        </div>
      </React.Fragment>
    );
  }
}

export default App;
