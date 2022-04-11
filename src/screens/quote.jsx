import React from "react";
import { Row, Col } from "react-bootstrap";

class Quote extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    subject: "",
    Message: "",
    company: "",
    phone: "",
    name: "",
    services: [
      { name: "ecommerce", value: false, caption: "E-commerce website." },
      { name: "website", value: false, caption: "Website." },
      { name: "app", value: false, caption: "Mobile application." },
      { name: "system", value: false, caption: "Administrative system." },
      { name: "others", value: false, caption: "Other services." },
    ],
  };
  handleChange = (e) => {
    if (e.currentTarget.name === "subject") {
      this.setState({ subject: e.currentTarget.value });
    }
    if (e.currentTarget.name === "Message") {
      this.setState({ Message: e.currentTarget.value });
    }
    if (e.currentTarget.name === "company") {
      this.setState({ company: e.currentTarget.value });
    }
    if (e.currentTarget.name === "phone") {
      this.setState({ phone: e.currentTarget.value });
    }
    if (e.currentTarget.name === "name") {
      this.setState({ name: e.currentTarget.value });
    }
  };

  handleCheck = (e) => {
    let tempServices = this.state.services;
    tempServices.map((item) => {
      if (item.name === e.currentTarget.name) {
        item.value = !item.value;
      }
    });
    this.setState({ services: tempServices });
    // let tempCheck = !this.state.services[e.currentTarget.]
  };

  handleSubmit = (e) => {
    let serviceTxt = "";
    let tempServices = this.state.services;
    tempServices.map((item) => {
      if (item.value) {
        serviceTxt = serviceTxt + "%0D%0A" + item.caption;
      }
    });

    let messageBody = `Quote request %0D%0A %0D%0A Project title: ${this.state.subject} %0D%0A %0D%0A Project brief: ${this.state.Message} %0D%0A %0D%0A`;
    let services = `${"Services requested"}: ${serviceTxt} and ${message} %0D%0A%0D%0A`;
    let signature = `%0D%0A Signature: %0D%0A ${this.state.company} %0D%0A ${this.state.name} %0D%0A ${this.state.phone}`;
    let message = messageBody + services + signature;
    e.preventDefault();
    window.open(
      `mailto:${"sales@hwayadesigns.com"}?subject=${
        this.state.subject
      }&body=${message}`
    );
  };

  render() {
    return (
      <div style={{ margin: "2%" }} className="quote">
        <Row>
          <Col lg={6} sm={12} xs={12}>
            <div className="d-flex  align-items-center">
              <img
                src={`${process.env.PUBLIC_URL}/assets/RequestQuote.jpg`}
                className="quoteimg"
                alt="software solutions"
              />
            </div>
          </Col>
          <Col lg={6} sm={12} xs={12}>
            <div style={{ margin: "2%" }}>
              <h1>Send an email:</h1>

              <form
                // action={`mailto:sales@hwayadesigns.com?subject=${this.state.subject}`}
                encType="text/plain"
                method="post"
              >
                <div className="cen ">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                  <br />
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={this.state.company}
                    onChange={this.handleChange}
                  />
                  <br />
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={this.state.phone}
                    onChange={this.handleChange}
                  />
                  <br />
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Project title
                  </label>
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={this.state.subject}
                    onChange={this.handleChange}
                  />
                  {/* </div> */}
                  <br />
                  {/* <div className="mb-3"> */}
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Project brief
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    name="Message"
                    id="exampleInputMsg"
                    aria-describedby="emailHelp"
                    value={this.state.Message}
                    onChange={this.handleChange}
                  ></textarea>
                  <br />
                  <label className="form-label">Requested services</label>
                  {this.state.services.map((item, index) => (
                    <div key={`d${index}`}>
                      <input
                        type="checkbox"
                        style={{ marginRight: "1%", marginLeft: "1%" }}
                        id={item.name}
                        name={item.name}
                        checked={item.value}
                        onChange={this.handleCheck}
                      />
                      <label htmlFor={item.name}> {item.caption}</label>
                    </div>
                  ))}
                  <br />
                  <br />
                  {/* </div> */}

                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={this.handleSubmit}
                  >
                    Submit
                  </button>
                  <br />
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Quote;
