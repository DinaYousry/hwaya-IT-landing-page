import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router";
import "./home.css";
import { colors } from "../services/myVars";

class Services extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {};
  headStyle = {
    paddingLeft: "1%",
    backgroundColor: "#1a306f",
    borderRadius: "10px",
    textAlign: "center",
    color: "white",
  };
  texts = [
    {
      title: "E-Commerce",
      text: (
        <>
          Need online store? Can you have a place beside{" "}
          <span style={{ fontWeight: "bold" }}>Amazone, Ebay</span> and
          <span style={{ fontWeight: "bold" }}>Alibaba? YES YOU CAN...</span>
          <br /> It is really a difficult situation to choose between
          <span style={{ fontWeight: "bold" }}>quality and price.</span> However
          we solved that as you will see in a moment.
          <br />
          Over the past few years the trade over the internet increased
          enormously especially after the{" "}
          <span style={{ fontWeight: "bold" }}>COVID-19 </span>Epidemic.{" "}
          <span style={{ fontWeight: "bold" }}>Large companies</span>
          invested huge amounts of money to{" "}
          <span style={{ fontWeight: "bold" }}>build their websites</span>
          and online stores. They demanded better user experience and best
          performance.
          <br />
          As a result, the{" "}
          <span style={{ fontWeight: "bold" }}>
            customers now is used to a certain level of performance
          </span>{" "}
          they will not accept a lower level of service. For example, few years
          ago you could just browse the products on an online store and pick it
          up. However now you have suggestions for products based on your
          choices and what you might like.
          <br />{" "}
          <span style={{ fontWeight: "bold" }}>If you are a startup</span> or
          have an established business and want to go online, you have a{" "}
          <span style={{ fontWeight: "bold" }}>challenge</span>. You need to{" "}
          <span style={{ fontWeight: "bold" }}>compete</span> with stuff like
          this. But this{" "}
          <span style={{ fontWeight: "bold" }}>costs a fortune</span> and you
          are still not sure about your success online.{" "}
          <span style={{ fontWeight: "bold" }}>
            And here comes our share of the process.
          </span>{" "}
          With us you can start with as low as{" "}
          <span style={{ fontWeight: "bold" }}>35$ </span>and have a fully
          equiped E-Commerce website.{" "}
          <span style={{ fontWeight: "bold" }}>Yes 35$ and fully Equiped.</span>
          <br /> Many e-commerce solutions are now in the market, however we
          extend our hand with technical support and help until your E-Commerce
          is fully customized to your needs and ready to show products. We help
          you with <span style={{ fontWeight: "bold" }}>
            all the details
          </span>{" "}
          and take your hand to{" "}
          <span style={{ fontWeight: "bold" }}>avoid all the pitfalls </span>
          that are known to fail E-Commerce experience.
          <br />
          <br />
          Check our{" "}
          <a href="" onClick={() => this.props.navigation("/prices")}>
            monthly packages
          </a>{" "}
          or{" "}
          <a href="" onClick={() => this.props.navigation("/quote")}>
            Request a Quote
          </a>
        </>
      ),
    },
    {
      title: "Website",
      text: (
        <>
          <span style={{ fontWeight: "bold" }}>First impressions last. </span>
          Catchy design is a unique feature of successful websites. <br />
          <span style={{ fontWeight: "bold" }}>Presenting your brand</span> in
          the proper way and determining the{" "}
          <span style={{ fontWeight: "bold" }}>brand voice</span> and the
          customer segmentation is pivotal to success. <br />
          <span style={{ fontWeight: "bold" }}>We study your brand</span>, know
          the <span style={{ fontWeight: "bold" }}>target audience </span>
          for your website and{" "}
          <span style={{ fontWeight: "bold" }}>tailor</span> the user experience
          accordingly using the latest and most effective techniques of UI and
          UX to let your
          <span style={{ fontWeight: "bold" }}>
            {""} audience receive the message you want to deliver
          </span>
          . <br />
          If you are an artist, the beauty of your art or designs are not the
          only factor to success, but how will you present them too.
          <br />
          Recently many
          <span style={{ fontWeight: "bold" }}>
            {""} researches in psychology
          </span>{" "}
          were performed to act on the audience and
          <span style={{ fontWeight: "bold" }}>
            {""} affect their reactions to certain models
          </span>{" "}
          of UI making them{" "}
          <span style={{ fontWeight: "bold" }}>more ready to listen</span> to
          your brand voice and ready to{" "}
          <span style={{ fontWeight: "bold" }}>make decisions </span>
          accordingly. Our front-end designs are{" "}
          <span style={{ fontWeight: "bold" }}>not only beautiful</span>, but
          they are also <span style={{ fontWeight: "bold" }}>purposeful</span>.
          <br />
          <br />
          <a href="" onClick={() => this.props.navigation("/quote")}>
            Request a Quote
          </a>
        </>
      ),
    },
    {
      title: "Mobile Apps",
      text: (
        <>
          {" "}
          Reach each and every customer of yours. Build customer relationship
          through{" "}
          <span style={{ fontWeight: "bold" }}>customized experience</span>{" "}
          tailored to them. Through mobile apps you can individually target your
          customer needs. <br />
          One of the most important advantages of mobile apps over websites is
          the customization of the user experience to each and every individual.
          To reach that we use many of the{" "}
          <span style={{ fontWeight: "bold" }}>mobile utilities</span> like
          <span style={{ fontWeight: "bold" }}>
            {" "}
            location, camera, motion sensors etc… Personalizing the experience
          </span>{" "}
          to every user is a key feature to creating{" "}
          <span style={{ fontWeight: "bold" }}>loyalty</span> and building good
          customer base. <br />
          On the other hand{" "}
          <span style={{ fontWeight: "bold" }}>re-engaging users</span> using
          push notifications is very important together with delivering{" "}
          <span style={{ fontWeight: "bold" }}>
            important messages to customers in the proper time
          </span>
          .
          <br />
          <br /> Make yourself an app with us,{" "}
          <a href="" onClick={() => this.props.navigation("/quote")}>
            Request a Quote
          </a>
          .
        </>
      ),
    },
    {
      title: "Systems",
      text: (
        <>
          {" "}
          Save effort and money and start paperless work with our administrative
          systems on most operating systems (Windows, Mac OSX). Tailor the
          system to your needs and make the most of the advanced technologies
          available.
          <br />
          <br /> Start now,{" "}
          <a href="" onClick={() => this.props.navigation("/quote")}>
            Request a Quote
          </a>
        </>
      ),
    },
  ];

  bodyStyle = { backgroundColor: "#FFC240", borderRadius: "10px" };
  render() {
    return (
      <div>
        <h1
          className="d-flex justify-content-center"
          style={{ fontSize: "64px", color: colors.primary }}
        >
          Services
        </h1>
        {/* <div className="d-flex justify-content-center"> */}
        <div className=" justify-content-center">
          {/* ********************************************************************************************************************************** */}

          <Row>
            <Col lg={6} sm={12} xs={12}>
              <div className="mycarddiv1">
                <Card className="mycard">
                  <Card.Img
                    style={{ cursor: "pointer" }}
                    variant="top"
                    // src={`${process.env.PUBLIC_URL}/assets/online.png`}
                    src={`${process.env.PUBLIC_URL}/assets/ecommerce.png`}
                    onClick={() => this.props.navigation("/ecommerce")}
                  />
                  <Card.Body>
                    <Card.Title>
                      <h2 className="fontsize100">E-Commerce</h2>
                    </Card.Title>

                    <Card.Text>
                      <br />
                      <a href="#ecommerce">Learn more...</a>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col lg={6} sm={12} xs={12}>
              <div className="mycarddiv2">
                <Card className="mycard">
                  <Card.Img
                    style={{ cursor: "pointer" }}
                    variant="top"
                    src={`${process.env.PUBLIC_URL}/assets/internet.png`}
                    onClick={() => this.props.navigation("/website")}
                  />
                  <Card.Body>
                    <Card.Title>
                      <h2 className="fontsize100">Website</h2>
                    </Card.Title>

                    <Card.Text>
                      <br />
                      <a href="#website">Learn more...</a>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
          {/* <br/> */}
          <Row>
            <Col lg={6} sm={12} xs={12}>
              <div className="mycarddiv1">
                <Card className="mycard">
                  <Card.Img
                    style={{ cursor: "pointer" }}
                    variant="top"
                    src={`${process.env.PUBLIC_URL}/assets/development.png`}
                    onClick={() => this.props.navigation("/mobileapps")}
                  />
                  <Card.Body>
                    <Card.Title>
                      <h2 className="fontsize100">Mobile Apps</h2>
                    </Card.Title>

                    <Card.Text>
                      <br />
                      <a href="#mobile">Learn more...</a>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col lg={6} sm={12} xs={12}>
              <div className="mycarddiv2">
                <Card className="mycard">
                  <Card.Img
                    style={{ cursor: "pointer" }}
                    variant="top"
                    src={`${process.env.PUBLIC_URL}/assets/analytics.png`}
                    onClick={() => this.props.navigation("/systems")}
                  />
                  <Card.Body>
                    <Card.Title>
                      <h2 className="fontsize100">Systems</h2>
                    </Card.Title>

                    <Card.Text>
                      <br />
                      <a href="#">Learn more...</a>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
        <br />

        <br />
        {this.texts.map((item, index) => (
          <div key={index}>
            <Container>
              <hr /> <h1 style={this.headStyle}>{item.title}</h1>
              <h5 style={this.bodyStyle}>
                {/* {this.test} */}
                {item.text}
              </h5>
            </Container>
          </div>
        ))}
      </div>
    );
  }
}

export default function MyServices(props) {
  const navigation = useNavigate();
  const goServices = (aRoute) => {
    navigation(aRoute);
  };
  return <Services {...props} navigation={goServices} />;
}
