import React from "react";

export default props => {
  return (
    <section id="videod">
      <div className="container">
        <div className="row">
          <div className="col s12 l4">
            <div className="video-container">
              <iframe
                width="560"
                height="315"
                title="Video"
                src="https://www.youtube.com/embed/enRKtRzafDQ?rel=0&amp;showinfo=0"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
          <div className="col s12 l4">
            <div className="video-container">
              <iframe
                width="560"
                height="315"
                title="Video"
                src="https://www.youtube.com/embed/Fk7cOR-9kRI?rel=0&amp;showinfo=0"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
          <div className="col s12 l4">
            <div className="video-container">
              <iframe
                width="560"
                height="315"
                title="Video"
                src="https://www.youtube.com/embed/5TYzFQmlwc8?rel=0&amp;showinfo=0"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
