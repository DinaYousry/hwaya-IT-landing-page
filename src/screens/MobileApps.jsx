import React from "react";
import { Row, Col } from "react-bootstrap";
import "./home.css";
import { useNavigate } from "react-router";
import ProjCollection from "../components/projCollection";
import { mobileProjects } from "../services/myVars";

class MobileApps extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {};
  texts = [
    {
      title: "Hard competetion",
      text: (
        <>
          {" "}
          Too many apps and too many app types available in the market. Many of
          them are cross-platform apps where the developer make one app for both
          android and IOS. It seems nice but this type has many conflitcs and
          disadvantages, where the
          <span style={{ backgroundColor: "#FFC240", fontWeight: "800" }}>
            {" "}
            native apps{" "}
          </span>{" "}
          gives the user a great bug-free experience that utilize all the
          capabilities available in his mobile. That was the reason behind using
          native app development in our company.
          <span style={{ backgroundColor: "#FFC240", fontWeight: "800" }}>
            {" "}
            The competition is hard.{" "}
          </span>{" "}
          You must be equally strong to your competitors to survive. That was
          not the situation few years ago. Because of:
          <span style={{ textAlign: "start" }}>
            {" "}
            <br />*
            <span style={{ backgroundColor: "#FFC240", fontWeight: "800" }}>
              {" "}
              Corona{" "}
            </span>{" "}
            virus epidemic made many
            <span style={{ backgroundColor: "#FFC240", fontWeight: "800" }}>
              {" "}
              big companies{" "}
            </span>{" "}
            to direct a huge part of their investment to the online field.{" "}
            <br />*
            <span style={{ backgroundColor: "#FFC240", fontWeight: "800" }}>
              {" "}
              The quality{" "}
            </span>{" "}
            that the user expects from an app have evolved drammatically. Now
            the user expects
            <span style={{ backgroundColor: "#FFC240", fontWeight: "800" }}>
              {" "}
              high levels of performance.{" "}
            </span>{" "}
            And you need to be ready for
            <span style={{ backgroundColor: "#FFC240", fontWeight: "800" }}>
              {" "}
              competetion.{" "}
            </span>{" "}
            <br />
            Now this is a fierce competition that you cannot sustain unless you
            have the
            <span style={{ backgroundColor: "#FFC240", fontWeight: "800" }}>
              {" "}
              proper tools.{" "}
            </span>{" "}
          </span>
        </>
      ),
      imgSrc: `${process.env.PUBLIC_URL}/assets/compete.jpg`,
      imgWidth: "100%",
    },
    {
      title: "Money risk?",
      text: (
        <>
          {" "}
          Spending money in a competition that you can never win is money loss.
          <br />
          When you buy a
          <span style={{ backgroundColor: "#FFC240", fontWeight: "800" }}>
            {" "}
            cheap app{" "}
          </span>{" "}
          website that
          <span style={{ backgroundColor: "#FFC240", fontWeight: "800" }}>
            {" "}
            cannot{" "}
          </span>{" "}
          meet the expectations of the user or compete with other apps you
          definitely will lose your money.
          <br />
          So the wise thing to do is to get yourself
          <span style={{ backgroundColor: "#FFC240", fontWeight: "800" }}>
            {" "}
            ready{" "}
          </span>{" "}
          to the
          <span style={{ backgroundColor: "#FFC240", fontWeight: "800" }}>
            {" "}
            battle{" "}
          </span>{" "}
          by using a well prepared and organized app with a
          <span style={{ backgroundColor: "#FFC240", fontWeight: "800" }}>
            {" "}
            high performance{" "}
          </span>{" "}
          and a
          <span style={{ backgroundColor: "#FFC240", fontWeight: "800" }}>
            {" "}
            friendly interface.{" "}
          </span>{" "}
          <br />
          So if you are a
          <span style={{ backgroundColor: "#FFC240", fontWeight: "800" }}>
            {" "}
            startup,{" "}
          </span>{" "}
          is it impossible to get into the market?
          <br />
          Of course no, and that is why we are here offering
          <span style={{ backgroundColor: "#FFC240", fontWeight: "800" }}>
            {" "}
            smart solutions{" "}
          </span>{" "}
          in the next section.
        </>
      ),
      imgSrc: `${process.env.PUBLIC_URL}/assets/risk.jpg`,
      imgWidth: "100%",
    },
    {
      title: "Smart solutions",
      text: (
        <>
          {" "}
          You are a
          <span style={{ backgroundColor: "#FFC240", fontWeight: "800" }}>
            {" "}
            startup{" "}
          </span>{" "}
          or new to the online market?
          <br />
          you need to have a
          <span style={{ backgroundColor: "#FFC240", fontWeight: "800" }}>
            {" "}
            competing mobile app{" "}
          </span>{" "}
          but you cannot afford them at this stage? <br />
          Or you are trying online market and you do not want to risk a
          <span style={{ backgroundColor: "#FFC240", fontWeight: "800" }}>
            {" "}
            huge amount of money?{" "}
          </span>{" "}
          <br />
          You came to the right place.
          <br />
          We offer you the
          <span style={{ backgroundColor: "#FFC240", fontWeight: "800" }}>
            {" "}
            best performance{" "}
          </span>{" "}
          with a
          <span style={{ backgroundColor: "#FFC240", fontWeight: "800" }}>
            {" "}
            cutting edge design{" "}
          </span>{" "}
          that can
          <span style={{ backgroundColor: "#FFC240", fontWeight: "800" }}>
            {" "}
            win you the online battle{" "}
          </span>{" "}
          with other competitors.
          <br />
          That comes with
          <span style={{ backgroundColor: "#FFC240", fontWeight: "800" }}>
            {" "}
            minimal price and minimal risk.
          </span>{" "}
          <br />
          The idea is to chose one of our
          <span style={{ backgroundColor: "#FFC240", fontWeight: "800" }}>
            {" "}
            Models,{" "}
          </span>{" "}
          we prepare your market and you have your app.
          <br />
          And do not worry about the money, you will pay only half the fees and
          the rest if you continue to have the app ready for sale after 3
          months. <br />
          <span style={{ backgroundColor: "#FFC240", fontWeight: "800" }}>
            {" "}
            IT RATHER WISE TO ROLL A BALL THAN TO PUSH A SQUARE.{" "}
          </span>{" "}
        </>
      ),
      imgSrc: `${process.env.PUBLIC_URL}/assets/competetion.png`,
      imgWidth: "100%",
    },
    {
      title: "Push up revenue",
      text: (
        <>
          {" "}
          Now you have the proper app, all what you need is the proper
          <span style={{ backgroundColor: "#FFC240", fontWeight: "800" }}>
            {" "}
            advertisement{" "}
          </span>{" "}
          which is
          <span style={{ backgroundColor: "#FFC240", fontWeight: "800" }}>
            {" "}
            critical{" "}
          </span>{" "}
          to success.
          <br />
          If you have a great app that nobody knows about, you are back in
          square 1.
          <br />
          With the help of our
          <span style={{ backgroundColor: "#FFC240", fontWeight: "800" }}>
            {" "}
            marketing experts{" "}
          </span>{" "}
          you can push up your revenue and develop your business.
          <br />
          Our apps are
          <span style={{ backgroundColor: "#FFC240", fontWeight: "800" }}>
            {" "}
            designed for success.{" "}
          </span>{" "}
          <br />
          All what you need now is the goods and a smart marketing plan.
        </>
      ),
      imgSrc: `${process.env.PUBLIC_URL}/assets/fix.jpg`,
      imgWidth: "100%",
    },
  ];
  headStyle = {
    paddingLeft: "1%",
    backgroundColor: "#1a306f",
    borderRadius: "10px",
    textAlign: "center",
    color: "white",
  };
  bodyStyle = { backgroundColor: "#FFC240", borderRadius: "10px" };

  render() {
    return (
      <div>
        <h1 className="d-flex justify-content-center ">Mobile Apps</h1>
        <div className="mycard">
          {this.texts.map((item, index) => (
            <div key={index}>
              <Row>
                <Col lg={3} xs={12} className="d-flex align-items-center">
                  <img
                    src={item.imgSrc}
                    width={item.imgWidth}
                    alt="software solutions"
                  />
                </Col>
                <Col lg={9} xs={12}>
                  <div className="mycarddiv" style={this.headStyle}>
                    <h3 style={{ color: "white" }}>{item.title}</h3>
                  </div>
                  <div className="mycarddiv" style={this.bodyStyle}>
                    <h5 style={{ textAlign: "left" }}>{item.text}</h5>
                  </div>
                </Col>
              </Row>
              <br />
            </div>
          ))}

          <hr />

          <br />
          <h1>Projects</h1>

          <ProjCollection projects={mobileProjects} />
          {/* <Row>
            <Col lg={6} xs={12}>
              <div className="mycarddiv1">
                <Card className="">
                  <Card.Img
                    variant="top"
                    src={`${process.env.PUBLIC_URL}/assets/ecommerce.png`}
                    onClick={() => this.props.navigation("/ecomtemplate")}
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
            <Col lg={6} xs={12}>
              <div className="mycarddiv1">
                <Card className="">
                  <Card.Img
                    variant="top"
                    src={`${process.env.PUBLIC_URL}/assets/fb.png`}
                    onClick={() => this.props.navigation("/fbtemplate")}
                  />
                  <Card.Body>
                    <Card.Title>
                      <h2 className="fontsize100">Food & Beverage</h2>
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
          <hr />
        </div>
      </div>
    );
  }
}

export default function MyMobileApps(props) {
  const navigation = useNavigate();
  const goServices = (aRoute) => {
    navigation(aRoute);
  };
  return <MobileApps {...props} navigation={goServices} />;
}
