import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router";
import "./home.css";
import Quote from "./quote";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col lg={6} xs={12} className="hom1">
              <br />
              <img
                src={`${process.env.PUBLIC_URL}/assets/Testing.jpg`}
                width={"100%"}
                alt="software solutions"
              />
            </Col>

            <Col lg={6} xs={12} className="hom2">
              <br />
              <br />
              <br />
              <br />
              <br />
              <p className="text">
                GET IN TOUCH with <br />
                the Future
              </p>

              <p style={{ fontSize: "30px" }}>
                Turn your ideas into projects. Through our smart solutions for
                busnisses with brilliant ideas.
              </p>
              <h4>#_in_touch_with_tomorrow</h4>
              <br />

              <Row>
                <Col lg={6} xs={12}>
                  <button
                    className="btn-block"
                    onClick={() => this.props.navigation("/process")}
                  >
                    <div className="ex2">Learn more</div>
                  </button>
                </Col>
                <Col lg={6} xs={12}>
                  <button
                    className="btn-block"
                    onClick={() => this.props.navigation("/quote")}
                  >
                    <div className="ex1">Work with us</div>
                  </button>
                </Col>
              </Row>
            </Col>
          </Row>
          <br />
          <br />
          <br />

          <p
            style={{ textAlign: "center", fontSize: "30px", fontWeight: "700" }}
          >
            Brilliant Software and Application
            <br />
            Development Solutions
          </p>
          <p style={{ fontSize: "20px", textAlign: "center" }}>
            Have an IDEA? You think it can reach people through an app or
            website? Can your idea really make a change?
            <br />
            Here we are to make an app or website out of your idea. Change your
            idea to a project with the help of our expert developers,
            <br />
            We solved the difficult balance between quality and price. YES it
            can be HIGH QUALITY and AFFORDABLE thanks to our brilliant marketing
            team and accountants.
          </p>

          <Row>
            <Col lg={4} xs={12}>
              <Card
                style={{
                  textAlign: "center",
                  alignItems: "center",
                  borderColor: "transparent",
                }}
              >
                <Card.Img
                  variant="top"
                  src={`${process.env.PUBLIC_URL}/assets/ecommerce.png`}
                  style={{ width: "20%" }}
                  alt="software solutions"
                />
                <Card.Body>
                  <Card.Title>
                    <h2 className="fontsize1">E-commerce</h2>
                  </Card.Title>

                  <Card.Text>
                    Need online store? Can you have a place beside Amazone, Ebay
                    and Alibaba? YES YOU CAN... See the details to learn more
                    about our E-commerce products.
                    <br />
                    <a
                      href="#"
                      className="lin"
                      onClick={() => this.props.navigation("/ecommerce")}
                    >
                      Learn more...
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} xs={12}>
              <Card
                style={{
                  textAlign: "center",
                  alignItems: "center",
                  borderColor: "transparent",
                }}
              >
                <Card.Img
                  variant="top"
                  src={`${process.env.PUBLIC_URL}/assets/internet.png`}
                  style={{ width: "20%" }}
                  alt="software solutions"
                />
                <Card.Body>
                  <Card.Title>
                    <h2 className="fontsize1">Website</h2>
                  </Card.Title>

                  <Card.Text>
                    Present your work to the WORLD. Show your COMPANY and
                    present your BRAND. It is time to go ONLINE. Book yourself a
                    spot in the cyber space and get #_in_touch_with_tomorrow.
                    <br />
                    <a
                      href="#"
                      className="lin"
                      onClick={() => this.props.navigation("/website")}
                    >
                      Learn more...
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} xs={12}>
              <Card
                style={{
                  textAlign: "center",
                  alignItems: "center",
                  borderColor: "transparent",
                }}
              >
                <Card.Img
                  variant="top"
                  src={`${process.env.PUBLIC_URL}/assets/development.png`}
                  style={{ width: "20%" }}
                  alt="software solutions"
                />
                <Card.Body>
                  <Card.Title>
                    <h2 className="fontsize1">Mobile Apps</h2>
                  </Card.Title>

                  <Card.Text>
                    Reach each and every customer of yours. Build customer
                    relationship through customized experience tailored to them.
                    Through mobile apps you can individualy target your customer
                    needs.
                    <br />
                    <a
                      href="#"
                      className="lin"
                      onClick={() => this.props.navigation("/mobileapps")}
                    >
                      Learn more...
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <br />
        <br />
        <div className="d-flex justify-content-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Hvd5_CaK9XE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <br />
        <br />
        <hr />
        <div style={{ paddingRight: "10%", paddingLeft: "10%" }}>
          <h1>Request a Quote now!!!</h1>
          <Quote />
        </div>
      </div>
    );
  }
}

export default function MyHome(props) {
  const navigation = useNavigate();
  const goHome = (aRoute) => {
    navigation(aRoute);
  };
  return <Home {...props} navigation={goHome} />;
}
