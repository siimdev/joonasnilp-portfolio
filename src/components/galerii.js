import React, { Component } from 'react';
import Gallery from "react-photo-gallery";
import Lightbox from "react-images";

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
            imageCountSeparator={" / "}
            backdropClosesModal={true}
            leftArrowTitle={"Liigu vasakule"}
            rightArrowTitle={"Liigu paremale"}
            closeButtonTitle={"Sulge galerii"}
          />
        </div>
      </section>
    )
  }
}

export default Galerii;