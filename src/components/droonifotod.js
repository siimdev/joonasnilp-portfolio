import React, { Component } from 'react';
import { MediaBox, Row, Col } from 'react-materialize'

class Droonifotod extends Component {

    render() {
        return (
            <div >
                <Row>
                    <Col s={4} className='grid-example'><MediaBox src="https://failid.joonasnilp.ee/esilehepildid_edit/4.jpg" caption="Näide 1" width="100%" /></Col>
                    <Col s={4} className='grid-example'><MediaBox src="https://failid.joonasnilp.ee/esilehepildid_edit/4.jpg" caption="Näide 1" width="100%" /></Col>
                    <Col s={4} className='grid-example'><MediaBox src="https://failid.joonasnilp.ee/esilehepildid_edit/4.jpg" caption="Näide 1" width="100%" /></Col>
                </Row>
            </div>

        )
    }
}

export default Droonifotod;