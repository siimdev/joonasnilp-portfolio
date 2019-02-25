import React, { Component } from "react";
import Gallery from "react-photo-gallery";
import Lightbox from "react-images";

import pilt1 from "../assets/images/esileht/1.jpg";
import pilt2 from "../assets/images/esileht/2.jpg";
import pilt3 from "../assets/images/esileht/3.jpg";
import pilt4 from "../assets/images/esileht/4.jpg";
import pilt5 from "../assets/images/esileht/5.jpg";
import pilt6 from "../assets/images/esileht/6.jpg";
import pilt7 from "../assets/images/esileht/7.jpg";
import pilt8 from "../assets/images/esileht/8.jpg";
import pilt9 from "../assets/images/esileht/9.jpg";

// galerii osa start
const photos = [
  {
    src: {pilt1},
    width: 4,
    height: 3,
    alt: "Pilt"
  },
  {
    src: {pilt2},
    width: 3,
    height: 4,
    alt: "Pilt"
  },
  {
    src: {pilt3},
    width: 3,
    height: 4,
    alt: "Pilt"
  },
  {
    src: {pilt4},
    width: 4,
    height: 3,
    alt: "Pilt"
  },
  {
    src: {pilt5},
    width: 3,
    height: 4,
    alt: "Pilt"
  },
  {
    src: {pilt6},
    width: 4,
    height: 3,
    alt: "Pilt"
  },
  {
    src: {pilt7},
    width: 3,
    height: 4,
    alt: "Pilt"
  },
  {
    src: {pilt8},
    width: 4,
    height: 3,
    alt: "Pilt"
  },
  {
    src: {pilt9},
    width: 4,
    height: 3,
    alt: "Pilt"
  }
];

class Galerii extends Component {
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

  render() {
    return (
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
            imageCountSeparator={" - "}
            backdropClosesModal={true}
            leftArrowTitle={"Liigu vasakule"}
            rightArrowTitle={"Liigu paremale"}
            closeButtonTitle={"Sulge galerii"}
          />
        </div>
      </section>
    );
  }
}

export default Galerii;
