import React from "react";
import portree from "../assets/images/esileht/portree.jpg";
import droon1 from "../assets/images/esileht/droon.jpg";
import uritus1 from "../assets/images/esileht/uritus.jpg";
import { Button, Modal } from 'react-materialize'
import Droonifotod from "./droonifotod";


export default props => {
  return (
    <section id="skills">
      <div className="millegaTeglen">
        <hr />
        <h3>Millega ma tegelen</h3>
        {/* kaart */}
        <div className="row">
          <div className="col s12 l4">
            <div className="background-text text-faded ">
              <div className="card z-depth-2">
                <div className="card-image waves-effect waves-block waves-light">
                  <img className="activator" src={portree} alt="Portree" />
                </div>
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

          {/* kaart */}
          <div className="col s12 l4">
            <div className="background-text text-faded">
              <div className="card z-depth-2">
                <div className="card-image waves-effect waves-block waves-light">
                  <img className="activator" src={droon1} alt="Loodus" />
                </div>
                <div className="card-action">
                  <Modal
                    trigger={<Button>Vaata näiteid</Button>}
                    actions={<Button className="waves-effect waves-light btn-flat modal-action modal-close tekst-valge">Sulge</Button>}>
                    <Droonifotod />

                  </Modal>
                </div>
              </div>
            </div>
          </div>

          {/* kaart */}
          <div className="col s12 l4">
            <div className="background-text text-faded">
              <div className="card z-depth-2">
                <div className="card-image waves-effect waves-block waves-light">
                  <img src={uritus1} alt="Loodus" />
                </div>
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
    </section>
  );
};
