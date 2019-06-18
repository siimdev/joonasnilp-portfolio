import React, { Component } from "react";
import { BrowserRouter as Router, Route, } from "react-router-dom";
import "../node_modules/materialize-css/dist/css/materialize.min.css";
import "../node_modules/materialize-css/dist/js/materialize.min.js";
// import "../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import "./App.css";
import NavBar from "./components/navbar";
import StartLeht from "./components/start_leht";
import About from "./components/minust";
import Skills from "./components/oskused";
import Videod from "./components/videod";
import Footer from "./components/footer";
// import Portfolio from "./components/portfolio";
import Galerii from "./components/galerii";

// mobiili osa
function AlgusVideo() {
  if (window.innerWidth > 991) {
    return <StartLeht />;
  }
  return null;
}


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route
            exact
            path="/"
            render={props => (
              <div>
                <AlgusVideo />
                <Galerii />
                <About />
                <Skills />
                <Videod />
                <Footer />
              </div>
            )}
          />
          {/* <Route path="/meedia" component={Portfolio} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
