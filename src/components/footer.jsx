import React from "react";
import { Col, Row } from "react-bootstrap";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div style={{ backgroundColor: "#5994ff" }}>
        {/* <h1 style={{ marginBottom: "0px" }}>Call or whatsapp:</h1> */}
        <hr />
        <Row style={{ paddingBottom: "2%" }}>
          {/*  */}
          <Col lg={11} md={11} xs={9}>
            <a href="tel:+201155533344" className="call">
              {" "}
              <span style={{ fontSize: "35px" }}>
                <b>✆</b>
              </span>
              {/* {" "} */}
              +201155533344{" "}
            </a>

            <a href="tel:+2035867790" className="call">
              {" "}
              <span style={{ fontSize: "35px" }}>
                <b>✆</b>
              </span>
              {/* {" "} */}
              +2035867790{" "}
            </a>

            <a href="tel:+2035867791" className="call">
              {" "}
              <span style={{ fontSize: "35px" }}>
                <b>✆</b>
              </span>
              {/* {" "} */}
              +2035867791{" "}
            </a>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Footer;
