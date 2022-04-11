import React from "react";
import "./home.css";
import { Row, Col } from "react-bootstrap";

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        <h1
          className="d-flex justify-content-center"
          style={{ fontSize: "64px" }}
        >
          About Us
        </h1>
        <div className="mycard">
          <Row>
            <Col lg={6} sm={12} xs={12}>
              <div className="d-flex justify-content-center">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/ideas_hwaya_it.jpg`}
                  width={"100%"}
                  alt="software solutions"
                />
              </div>
            </Col>
            <Col lg={6} sm={12} xs={12}>
              <div
                className="mycarddiv"
                style={{ backgroundColor: "#1a306f", borderRadius: "10px" }}
              >
                <h1 style={{ color: "white" }}>IN TOUCH WITH TOMORROW!</h1>
              </div>
              <div
                className="mycarddiv"
                style={{
                  backgroundColor: "#FFC240",
                  borderRadius: "10px",
                }}
              >
                <h3 style={{ textAlign: "left" }}>
                  Simple yet effective technology is what we aim for together
                  with a pleasurable and rich user experience. We help
                  developing and growing your business through a very effective
                  IT system,{" "}
                  <span
                    style={{
                      backgroundColor: "#FFC240",
                      fontWeight: "800",
                      textDecorationLine: "underline",
                      textDecorationThickness: "4px",
                    }}
                  >
                    Fast
                  </span>{" "}
                  elegant website and a handy creative mobile app. Only a
                  carefully picked up team of geniuses can do the job, that is
                  why we are very meticulous in collecting our staff.{" "}
                  <span
                    style={{
                      backgroundColor: "#FFC240",
                      fontWeight: "800",
                      textDecorationLine: "underline",
                      textDecorationThickness: "4px",
                    }}
                  >
                    Creative simple and elegant
                  </span>{" "}
                  IT solutions are what we offer. Get{" "}
                  <span className="par">#IN_TOUCH_WITH_TOMORROW </span>
                  and be OUR #GROWTH_PARTNER.
                </h3>
              </div>
              <div
                className="mycarddiv"
                style={{ backgroundColor: "#5994ff", borderRadius: "10px" }}
              >
                <h5 style={{ textAlign: "left" }}>
                  We utilize the best available technologies to develop our
                  products. For instance, we use{" "}
                  <span
                    style={{
                      fontWeight: "800",
                      textDecorationLine: "underline",
                      textDecorationThickness: "4px",
                    }}
                  >
                    REACT
                  </span>{" "}
                  (technology used to develop facebook and instagram) for our
                  websites and e-commerce projects. For mobile apps we use{" "}
                  <span
                    style={{
                      fontWeight: "800",
                      textDecorationLine: "underline",
                      textDecorationThickness: "4px",
                    }}
                  >
                    NATIVE LANGUAGES
                  </span>{" "}
                  for programming to have the best performance that can be
                  gained.
                </h5>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default About;
