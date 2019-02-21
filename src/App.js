import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import "../node_modules/materialize-css/dist/css/materialize.min.css";
import "../node_modules/materialize-css/dist/js/materialize.min.js";
import "../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import Gallery from "react-photo-gallery";
import Lightbox from "react-images";
import "./App.css";
import NavBar from "./components/navbar";
import LandingPage from "./components/start_leht";
import About from "./components/minust";
import Skills from "./components/oskused";
import Videod from "./components/videod";
import Footer from "./components/footer";
import portfolio from "./components/portfolio";

// mobiili osa
const getBrowserWidth = function () {
  if (window.innerWidth > 991) {
    return "desktop";
  }
};

const device = getBrowserWidth();

// galerii osa start
const photos = [
  {
    src: "https://failid.joonasnilp.ee/esilehepildid_edit/1.jpg",
    width: 4,
    height: 3
  },
  {
    src: "https://failid.joonasnilp.ee/esilehepildid_edit/2.jpg",
    width: 3,
    height: 4
  },
  {
    src: "https://failid.joonasnilp.ee/esilehepildid_edit/3.jpg",
    width: 3,
    height: 4
  },
  {
    src: "https://failid.joonasnilp.ee/esilehepildid_edit/4.jpg",
    width: 4,
    height: 3
  },
  {
    src: "https://failid.joonasnilp.ee/esilehepildid_edit/5.jpg",
    width: 3,
    height: 4
  },
  {
    src: "https://failid.joonasnilp.ee/esilehepildid_edit/6.jpg",
    width: 4,
    height: 3
  },
  {
    src: "https://failid.joonasnilp.ee/esilehepildid_edit/7.jpg",
    width: 3,
    height: 4
  },
  {
    src: "https://failid.joonasnilp.ee/esilehepildid_edit/8.jpg",
    width: 4,
    height: 3
  },
  {
    src: "https://failid.joonasnilp.ee/esilehepildid_edit/9.jpg",
    width: 4,
    height: 3
  }
];

class App extends Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }

  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  }

  // galerii osa end

  // lehe struktuur
  render() {
    // var shown = {
    //   display: this.state.shown ? "block" : "none"
    // };

    // var hidden = {
    //   display: this.state.shown ? "none" : "block"
    // };
    if (device === "desktop") {
      return (
        <Router>
          <div className="App">
            <NavBar />
            <Route
              exact
              path="/"
              render={props => (
                <div>
                  <LandingPage />
                  <section id="work">
                    <hr />

                    <div>
                      <Gallery photos={photos} onClick={this.openLightbox} />
                      <Lightbox
                        images={photos}
                        onClose={this.closeLightbox}
                        onClickPrev={this.gotoPrevious}
                        onClickNext={this.gotoNext}
                        currentImage={this.state.currentImage}
                        isOpen={this.state.lightboxIsOpen}
                        imageCountSeparator={" / "}
                        backdropClosesModal={true}
                        leftArrowTitle={"Liigu vasakule"}
                        rightArrowTitle={"Liigu paremale"}
                        closeButtonTitle={"Sulge galerii"}
                      />
                    </div>
                  </section>
                  <About />
                  <Skills />
                  <Videod />
                  <Footer />
                </div>
              )}
            />
            <Route path="/meedia" component={portfolio} />
          </div>
        </Router>
      );
    } else {
      return (
        <Router>
          <div className="App">
            <NavBar />
            <Route
              exact
              path="/"
              render={props => (
                <div>
                  <section id="work">
                    <div>
                      <Gallery photos={photos} onClick={this.openLightbox} />
                      <Lightbox
                        images={photos}
                        onClose={this.closeLightbox}
                        onClickPrev={this.gotoPrevious}
                        onClickNext={this.gotoNext}
                        currentImage={this.state.currentImage}
                        isOpen={this.state.lightboxIsOpen}
                        imageCountSeparator={" / "}
                        backdropClosesModal={true}
                        leftArrowTitle={"Liigu vasakule"}
                        rightArrowTitle={"Liigu paremale"}
                        closeButtonTitle={"Sulge galerii"}
                      />
                    </div>
                  </section>
                  <About />
                  <Skills />
                  <Videod />
                  <Footer />
                </div>
              )}
            />
            <Route path="/meedia" component={portfolio} />
          </div>
        </Router>
      );
    }
  }
}



export default App;
