import React from "react";
import "../screens/home.css";
import { useNavigate } from "react-router";
import { Card, Row, Col } from "react-bootstrap";

class ProjCollection extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div style={{ paddingLeft: "5%", paddingRight: "5%" }}>
        <Row>
          {this.props.projects.map((proj, index) => (
            <Col xs={12} md={6} lg={3} className="pt-3" key={`col${index}`}>
              <div>
                <Card className="mycard" style={{ alignItems: "center" }}>
                  <Card.Img
                    style={{
                      cursor: "pointer",
                      width: "100%",
                      height: "250px",
                      paddingTop: "10%",
                      objectFit: "contain",
                    }}
                    variant="top"
                    src={proj.imgSrc}
                    onClick={() => this.props.navigation(proj.route)}
                    alt="software solutions"
                  />
                  <Card.Body style={{ width: "100%" }}>
                    <Card.Title style={{ width: "max-content" }}>
                      <h2 className="fontsize100">{proj.title}</h2>
                    </Card.Title>

                    <Card.Text>
                      {proj.url ? (
                        <a href={proj.url}>Check it online</a>
                      ) : (
                        <>
                          {proj.android ? (
                            <a href={proj.android}>
                              <img
                                src={`${process.env.PUBLIC_URL}/assets/android_badge.png`}
                                width={"50%"}
                                alt="software solutions"
                              />
                            </a>
                          ) : null}

                          {proj.ios ? (
                            <a href={proj.ios}>
                              <img
                                src={`${process.env.PUBLIC_URL}/assets/ios.svg`}
                                width={"50%"}
                                style={{ padding: "4%" }}
                                alt="software solutions"
                              />
                            </a>
                          ) : null}
                        </>
                      )}
                    </Card.Text>
                    <div className="d-flex justify-content-center"></div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default function MyProjCollection(props) {
  const navigation = useNavigate();
  const goServices = (aRoute) => {
    navigation(aRoute);
  };
  return <ProjCollection {...props} navigation={goServices} />;
}
