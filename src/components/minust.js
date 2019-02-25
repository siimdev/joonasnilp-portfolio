import React from "react";
import minuPilt from "../assets/images/lisa/lisa2.jpg";
import { MediaBox, Row, Col } from "react-materialize";

export default props => {
  return (
    <section id="minust">
      <div className="container minustTaust">
        <hr className="white-color" />
        <h3 className="white-color">Kes ma olen?</h3>

        <Row>
          <Col s={12} m={6} l={4} className="grid-example">
            <p className="text-faded white-color">
              Videograafia ning fotograafia on olnud pikalt juba tõsine kirg.
              Viimased 2,5 aastat olen sellega tegelenud tõsisemalt ning
              pühendanud enamuse oma vabast ajast fotograafiale.
            </p>
          </Col>
          <Col s={12} m={6} l={4} className="grid-example">
            <p className="text-faded white-color">
              Olen alati olnud see kes proovib kõike seega ei ole ka endale
              fotograafias seadnud mingeid piire ning võtan uusi katsumusi alati
              võimalusena ennast harida.
            </p>
          </Col>

          <Col s={12} l={4} className="grid-example">
            <MediaBox src={minuPilt} width="100%" className="minuPilt"/>
          </Col>
        </Row>
      </div>
    </section>
  );
};
