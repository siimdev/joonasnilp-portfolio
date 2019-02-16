import React from "react";
import portree from "../assets/images/esileht/portree.jpg";
import droon1 from "../assets/images/esileht/droon.jpg";
import uritus1 from "../assets/images/esileht/uritus.jpg";

export default props => {
  return (
    <section id="skills">
      <div className="millegaTeglen">
        <hr />
        <h3>Millega ma tegelen</h3>

        <div className="row">
          <div className="col s12 l4">
            <div className="background-text text-faded ">
              <div className="card z-depth-2">
                <div className="card-image waves-effect waves-block waves-light">
                  <img className="activator" src={portree} alt="Portree" />
                  {/* <span className="card-title">Portreefotod</span> */}
                </div>
                {/* <div className="card-content">
                  <span class="activator grey-text text-darken-4">
                    Pildid loodusest ja muudest huvitavatest kohtadest
                  </span>
                </div> */}
                {/* <div class="card-reveal">
                  <h4>
                    <span class="card-title grey-text text-darken-4">
                      Tehnika
                      <i class="material-icons right">close</i>
                    </span>
                  </h4>
                  <ul class="collection with-header">
                    <li class="collection-header">
                      <span className="card-title">Kaamera</span>
                    </li>
                    <li class="collection-item">Nikon D5500</li>
                  </ul>
                  <ul class="collection with-header">
                    <li class="collection-header">
                      <span className="card-title">Objektiivid</span>
                    </li>
                    <li class="collection-item">Sigma 17-70mm F2.8-4’</li>
                    <li class="collection-item">Sigma 18-35mm F1.8</li>
                    <li class="collection-item">
                      Tamron 70-200mm Di Vc Usd G2
                    </li>
                  </ul>
                </div> */}
                <div className="card-action">
                  <a
                    className="waves-effect waves-light btn modal-trigger tooltipped"
                    data-position="right"
                    data-tooltip="*Uuendamisel*"
                    href="#modal1"
                  >
                    Vaata näiteid
                  </a>
                  {/* <a className="activator waves-effect waves-light btn">
                    Tehnika
                  </a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col s12 l4">
            <div className="background-text text-faded">
              {/* kaart */}
              <div className="card z-depth-2">
                <div className="card-image waves-effect waves-block waves-light">
                  <img className="activator" src={droon1} alt="Loodus" />
                  {/* <span className="card-title">Droonifotod</span> */}
                </div>
                {/* <div className="card-content">
                  <span class="activator grey-text text-darken-4">
                    Võimalik ka droonifotosi/videosi teha
                  </span>
                </div> */}
                {/* <div class="card-reveal">
                  <h4>
                    <span class="card-title grey-text text-darken-4">
                      Tehnika
                      <i class="material-icons right">close</i>
                    </span>
                  </h4>
                  <ul class="collection with-header">
                    <li class="collection-header">
                      <span className="card-title">Droon</span>
                    </li>
                    <li class="collection-item">DJI Phantom 4 Advanced Plus</li>
                  </ul>
                  <ul class="collection with-header">
                    <li class="collection-header">
                      <span className="card-title">Muu</span>
                    </li>
                    <li class="collection-item">Gopro Hero 4 Session</li>
                    <li class="collection-item">Hero 3+ Silver</li>
                  </ul>
                </div> */}
                <div className="card-action">
                  <a
                    className="waves-effect waves-light btn tooltipped"
                    data-position="right"
                    data-tooltip="*Uuendamisel*"
                    href="#modal1"
                  >
                    Vaata näiteid
                  </a>
                  {/* <a className="activator waves-effect waves-light btn">
                    Tehnika
                  </a> */}
                </div>
              </div>
              {/* kaart */}
            </div>
          </div>
          <div className="col s12 l4">
            <div className="background-text text-faded">
              <div className="card z-depth-2">
                <div className="card-image waves-effect waves-block waves-light">
                  <img src={uritus1} alt="Loodus" />
                  {/* <span className="card-title">Üritused</span> */}
                </div>
                {/* <div className="card-content">
                  <p>Ürituste pildistamine</p>
                </div> */}
                <div className="card-action">
                  <a
                    className="waves-effect waves-light btn modal-trigger tooltipped"
                    data-position="right"
                    data-tooltip="*Uuendamisel*"
                    href="#modal1"
                  >
                    Vaata näiteid
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <h3>Tehnika</h3>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col s12 l6 skills">
            <img className="col s3 htmlLogo" src={htmlLogo} alt="HTML" />

            <div className="col s6 skillsText">
              <strong>Fotoaparaat</strong> Nikon
            </div>
          </div>

          <div className="col s12 l6 skills">
            <div className="col s6 push-l6 skillsText">
              <strong>Objektiivid</strong> tele, makro jne.
            </div>
            <img
              className="col s3 pull-l6 jsLogo"
              src={jsLogo}
              alt="Javascript"
            />
          </div>
        </div>

        <div className="row">
          <div className="col s12 l6 skills">
            <img
              className="col s3 jqueryLogo"
              src={jqueryajaxLogo}
              alt="JQuery Ajax"
            />

            <div className="col s6 skillsText">
              <strong>Droon</strong> DJI Phantom 4
            </div>
          </div>

          <div className="col s12 l6 skills">
            <div className="col s6 push-l6 skillsText">
              <strong>Kaamerad</strong> GoPro Hero 4 jne.
            </div>
            <img
              className="col s3 pull-l6 reactLogo"
              src={reactLogo}
              alt="React"
            />
          </div>
        </div>
      </div> */}
    </section>
  );
};
