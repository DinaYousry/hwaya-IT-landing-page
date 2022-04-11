import React from "react";
import "./home.css";
import { Row, Col } from "react-bootstrap";

class Process extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {};
  texts = [
    {
      title: "1- Concept",
      text: (
        <>
          {" "}
          The first step to a good piece of software is a thorough conception
          process. During this stage, we work directly with you and your team to
          understand critical project elements and outline a basic plan to
          ensure that the final product is a success: <br />
          * Product Discovery <br />
          * Identify Business Goals <br />
          * Define Critical Features <br />
          * Identify the Team <br />
          * Outline Milestones <br />
          Develop a Deployment Plan Once we have a solid framework for your
          software project, we’ll begin designing the app.
        </>
      ),
      width: "100%",
      src: `${process.env.PUBLIC_URL}/assets/Concept.jpg`,
    },
    {
      title: "2- Design",
      text: (
        <>
          {" "}
          Great design makes a great first impression. Using the direction and
          framework that we gained in the Concept phase, our expert engineers
          and app designers will begin designing the look and feel of your
          software project: <br />* Wireframing
          <br />* Architecture <br />* User Interface Design <br /> A stunning
          app design and user-friendly interface give your users the experience
          that they expect with a visual impact that they love.
        </>
      ),
      width: "70%",
      src: `${process.env.PUBLIC_URL}/assets/Design.jpg`,
    },
    {
      title: "3- Development",
      text: (
        <>
          Once the design has been established for your software, our expert
          engineers will begin the process of bringing it to life through code.
          Throughout this process, we use leading edge software development
          technologies to work within ‘real world’ expectations to ensure that
          your software functions perfectly in real, user situations: <br />
          * Mobile Development <br />
          * Full-Stack Development <br />
          * Backend Design (API) and Development <br />
          * Third-Party Integration <br />
          * Analytics Integration <br />* User Documentation <br />
          This phase tends to take the most time, but we are committed to
          regular bi-weekly updates with bite-sized milestones, so you know
          exactly where you stand at every stage of the process.
        </>
      ),
      width: "70%",
      src: `${process.env.PUBLIC_URL}/assets/Development.jpg`,
    },
    {
      title: "4- Testing",
      text: (
        <>
          {" "}
          Testing is a fundamental element in all software development because
          it avoids potential bugs and optimizes the experience for the end-user
          from the very beginning. To ensure that your software is perfectly
          attuned to your user’s needs, we conduct QA testing and a variety of
          functionality, technical, and user-based tests throughout the entire
          project process: <br />
          * Functional & Non-Functional Testing <br />
          * API & Backend Testing
          <br />
          * Mobile Apps Testing <br />
          * Testing Automation Services <br />
          Once your software has been thoroughly and exhaustively tested, we’ll
          begin working on a launch plan.
        </>
      ),
      width: "80%",
      src: `${process.env.PUBLIC_URL}/assets/Testing.jpg`,
    },
    {
      title: "5- Launch",
      text: (
        <>
          {" "}
          Launching a new piece of enterprise software is so much more than just
          flipping the switch and watching what happens. Smart analytics and a
          structured launch plan can ensure that your public software launch
          goes well, and you can further optimize your software: <br />
          * Soft Launch <br />
          * Communication Plan <br />
          * Training <br />
          * Sales Team Buy-In <br />
          * Deploy <br />
          Once your software is launched, we continue to collect relevant user
          data and analytics to optimize the user experience in the future.
        </>
      ),
      width: "100%",
      src: `${process.env.PUBLIC_URL}/assets/Launch.jpg`,
    },
    {
      title: "6- Support",
      text: (
        <>
          {" "}
          After the public launch of your new software, things are far from
          over. Next comes the general support and maintenance of the software
          to ensure that it remains bug-free and operational. Depend on built-in
          analytics and end-user feedback to best support the functionality and
          value of your software through: <br />
          * Feature Improvement <br />
          * Feature Additions <br />
          * Application Production Support <br />
          * Application Management <br />
          Great software can change the world, and we intend to make sure that
          your software is innovative, actionable, and fully supported
          throughout its lifecycle.
        </>
      ),
      width: "100%",
      src: `${process.env.PUBLIC_URL}/assets/Support.jpg`,
    },
  ];

  imageDiv = (src, width) => (
    <div className="d-flex justify-content-center">
      <img
        // src={`${process.env.PUBLIC_URL}/assets/Concept.jpg`} 100%
        width={width}
        src={src}
        alt="software solutions"
      />
    </div>
  );
  textDiv = (title, text) => (
    <>
      {" "}
      <div className="mycarddiv" style={this.headStyle}>
        <h3 style={{ color: "white" }}>{title}</h3>
      </div>
      <div className="mycarddiv" style={this.bodyStyle}>
        <h5>{text}</h5>
      </div>
    </>
  );
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
        <h1
          className="d-flex justify-content-center"
          style={{ fontSize: "64px" }}
        >
          Process
        </h1>

        <div className="mycard">
          {this.texts.map((item, index) => (
            <div key={index}>
              <Row>
                <Col lg={6} sm={12} xs={12}>
                  {index === 1 || index === 3 || index === 5 ? (
                    <>{this.textDiv(item.title, item.text)}</>
                  ) : (
                    <> {this.imageDiv(item.src, item.width)}</>
                  )}
                </Col>
                <Col lg={6} sm={12} xs={12}>
                  {index === 1 || index === 3 || index === 5 ? (
                    <>{this.imageDiv(item.src, item.width)}</>
                  ) : (
                    <> {this.textDiv(item.title, item.text)}</>
                  )}
                </Col>
              </Row>
              <br />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Process;
