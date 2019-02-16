import React from "react";
import minuPilt from "../assets/images/lisa/lisa2.jpg";

export default props => {
  return (
    <section id="about">
      <div className="container">
        <hr className="white-color" />
        <h3 className="white-color">Kes ma olen?</h3>

        <div className="center row valign-wrapper">
          <div className="white-color">
            <p className="text-faded">
              Videograafia ning fotograafia on olnud pikalt juba tõsine kirg.
              Viimased 2,5 aastat olen sellega tegelenud tõsisemalt ning
              pühendanud enamuse oma vabast ajast fotograafiale.
            </p>
            <p className="text-faded">
              Olen alati olnud see kes proovib kõike seega ei ole ka endale
              fotograafias seadnud mingeid piire ning võtan uusi katsumusi alati
              võimalusena ennast harida.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="minuPilt">
            <img
              src={minuPilt}
              alt="Mina"
              className="circle responsive-img z-depth-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
