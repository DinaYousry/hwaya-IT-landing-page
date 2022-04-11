import React from "react";
import "./home.css";
import { useNavigate } from "react-router";

import { websiteProjects, mobileProjects } from "../services/myVars";
import ProjCollection from "../components/projCollection";

class Projects extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div style={{ paddingLeft: "5%", paddingRight: "5%" }}>
        <h1>Websites and E-commerce</h1>
        <ProjCollection projects={websiteProjects} />
        <br />
        <hr />
        <h1>Mobile Apps</h1>
        <ProjCollection projects={mobileProjects} />
        {/* <Row>
          {this.state.projects.map((proj, index) => (
            <Col xs={12} md={6} lg={3} className="pt-3" key={index}>
              <div>
                <Card className="mycard" style={{alignItems:"center" }}>
                  <Card.Img
                    style={{ cursor: "pointer" , width: "100%" , height:"250px" , paddingTop:"10%" }}
                    variant="top"
                    src={proj.imgSrc}
                  />
                  <Card.Body>
                    <Card.Title style={{width :"max-content"}}>
                      <h2 className="fontsize100">{proj.title}</h2>
                    </Card.Title>

                    <Button
                      style={{ backgroundColor: "#1A306F" }}
                      onClick={() => this.props.navigation("/quote")}
                    >
                      Request Quote
                    </Button>
                    <Card.Text>
                      <br />
                      <a href={proj.url}>Check it online</a>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          ))}
        </Row> */}

        {/* <Row>
          <Col lg={6} sm={12} xs={12}>
            <div className="mycarddiv1">
              <Card className="mycard">
                <Card.Img
                  style={{ cursor: "pointer" }}
                  variant="top"
                  src={`${process.env.PUBLIC_URL}/assets/online.png`}
                  onClick={() => this.props.navigation("/ecommerce")}
                />
                <Card.Body>
                  <Card.Title>
                    <h2 className="fontsize100">E-Commerce</h2>
                  </Card.Title>

                  <Button
                    style={{ backgroundColor: "#1A306F" }}
                    onClick={() => this.props.navigation("/quote")}
                  >
                    Request Quote
                  </Button>
                  <Card.Text>
                    <br />
                    <a href="#">Learn more...</a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="mycarddiv1">
              <Card className="mycard">
                <Card.Img
                  style={{ cursor: "pointer" }}
                  variant="top"
                  src={`${process.env.PUBLIC_URL}/assets/online.png`}
                  onClick={() => this.props.navigation("/ecommerce")}
                />
                <Card.Body>
                  <Card.Title>
                    <h2 className="fontsize100">E-Commerce</h2>
                  </Card.Title>

                  <Button
                    style={{ backgroundColor: "#1A306F" }}
                    onClick={() => this.props.navigation("/quote")}
                  >
                    Request Quote
                  </Button>
                  <Card.Text>
                    <br />
                    <a href="#">Learn more...</a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row> */}
      </div>
    );
  }
}

export default function MyProjects(props) {
  const navigation = useNavigate();
  const goServices = (aRoute) => {
    navigation(aRoute);
  };
  return <Projects {...props} navigation={goServices} />;
}
