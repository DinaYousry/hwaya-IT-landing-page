import React from "react";
import { Row, Col } from "react-bootstrap";
import "./home.css";
import { useNavigate } from "react-router";
import { onlyEcommerceProjects } from "../services/myVars";
import ProjCollection from "../components/projCollection";

class ECommerce extends React.Component {
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
      title: "Hard competetion",
      text: (
        <>
          {" "}
          All of us want to come out on top. In e-commerce, your goal should be
          to
          <span style={{ backgroundColor: "#FFC240", fontWeight: "800" }}>
            {" "}
            dominate.{" "}
          </span>{" "}
          If you do not harbor this desire, either secretly or overtly, you
          probably won't last long in e-commerce.
          <span style={{ backgroundColor: "#FFC240", fontWeight: "800" }}>
            {" "}
            The competition between online retailers is cutthroat.{" "}
          </span>{" "}
          You must be equally cutthroat to survive. That was not the situation
          few years ago. Because of:
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
            that the user expects from an online store have evolved
            drammatically. Now the user expects levels of performance of
            ecommerce website as that of
            <span style={{ backgroundColor: "#FFC240", fontWeight: "800" }}>
              {" "}
              Amazon{" "}
            </span>{" "}
            and
            <span style={{ backgroundColor: "#FFC240", fontWeight: "800" }}>
              {" "}
              Ebay.{" "}
            </span>{" "}
            <br />
            Now it is a fierce competition that you cannot sustain unless you
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
          Spending money in a competition that you can never win is money loss.
          <br />
          When you buy a
          <span style={{ backgroundColor: "#FFC240", fontWeight: "800" }}>
            {" "}
            cheap ecommerce{" "}
          </span>{" "}
          website that
          <span style={{ backgroundColor: "#FFC240", fontWeight: "800" }}>
            {" "}
            cannot{" "}
          </span>{" "}
          meet the expectations of the user or compete with the other online
          stores you definitely will lose your money.
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
          by using a well prepared and organized online store with a
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
            competing ecommerce{" "}
          </span>{" "}
          website but you cannot afford them at this stage? <br />
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
          we prepare your market and in a few days you have your online store.
          <br />
          And do not worry about the money, you will pay monthly fees that were
          brought to minimal. <br />
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
          Now you have the proper store online, all what you need is the proper
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
          If you have a great website that nobody knows about, you are back in
          square 1.
          <br />
          With the help of our
          <span style={{ backgroundColor: "#FFC240", fontWeight: "800" }}>
            {" "}
            marketing experts{" "}
          </span>{" "}
          you can push up your revenue and develop your business.
          <br />
          Our online store is
          <span style={{ backgroundColor: "#FFC240", fontWeight: "800" }}>
            {" "}
            designed to be selling.{" "}
          </span>{" "}
          <br />
          All what you need now is the goods and a smart marketing plan.
        </>
      ),
      imgSrc: `${process.env.PUBLIC_URL}/assets/fix.jpg`,
      imgWidth: "100%",
    },
  ];
  bodyStyle = { backgroundColor: "#FFC240", borderRadius: "10px" };
  render() {
    return (
      <div>
        <h1 className="d-flex justify-content-center ">E-Commerce</h1>
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
          <br />
          <br />
          Check our{" "}
          <a href="#" onClick={() => this.props.navigation("/prices")}>
            monthly packages
          </a>{" "}
          or{" "}
          <a href="#" onClick={() => this.props.navigation("/quote")}>
            Request a Quote
          </a>
          <hr />
          <br />
          <br />
          <h2>Projects sample:</h2>
          <ProjCollection projects={onlyEcommerceProjects} />
          <hr />
        </div>
      </div>
    );
  }
}

export default function MyEcommerce(props) {
  const navigation = useNavigate();
  const goServices = (aRoute) => {
    navigation(aRoute);
  };
  return <ECommerce {...props} navigation={goServices} />;
}
