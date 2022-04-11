import React from "react";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
// logo color #1A306F

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    lang: false,
  };
  render() {
    return (
      <div>
        {/* 5994FF */}
        <Navbar style={{ backgroundColor: "#5994FF" }} expand="lg">
          <Container>
            <Navbar.Brand>
              <img
                width={"200px"}
                src={`${process.env.PUBLIC_URL}/assets/hdhIt.png`}
                onClick={() => this.props.navigation("/")}
                style={{ cursor: "pointer" }}
                alt="software solutions"
              />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
              <Nav
                fill
                variant="tabs"
                className="justify-content-end"
                style={{ marginRight: "1%" }}
              >
                <Nav.Item>
                  <NavLink
                    // eventKey="/Components/reservation"
                    to="/about"
                    className="nav-link"
                  >
                    About
                  </NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink
                    className="nav-link"
                    // eventKey="/Components/testYard"
                    to="/services"
                  >
                    Services
                  </NavLink>
                </Nav.Item>

                <Nav.Item>
                  <NavLink
                    // eventKey="/Components/sendImg"
                    to="/process"
                    className="nav-link"
                  >
                    Process
                  </NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink
                    // eventKey="/Components/sendImg"
                    to="/ecommerce"
                    className="nav-link"
                  >
                    E-Commerce
                  </NavLink>
                </Nav.Item>
                {/* <Nav.Item>
                  <NavLink
                    className="nav-link"
                    // eventKey="/Components/testYard"
                    to="/mobileapps"
                  >
                    Mobile Apps
                  </NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink
                    className="nav-link"
                    // eventKey="/Components/testYard"
                    to="/website"
                  >
                    Website
                  </NavLink>
                </Nav.Item> */}
                <Nav.Item>
                  <NavLink
                    // eventKey="/Components/sendImg"
                    to="/projects"
                    className="nav-link"
                  >
                    Projects
                  </NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink
                    className="nav-link"
                    // eventKey="/Components/testYard"
                    to="/prices"
                  >
                    Prices
                  </NavLink>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
            <Button
              variant="light"
              style={{
                color: "#1A306F",
                backgroundColor: "#FFC240",
                borderColor: "#FFC240",
              }}
              onClick={() => this.props.navigation("/quote")}
            >
              Request Quote
            </Button>
            <Button
              className="btnn	"
              // variant="light"
              style={{ fontSize: "15px" }}
              onClick={() => this.props.setPageDirection("ar")}
              // onClick={() => this.props.navigation("/quote")}
            >
              {/* ******* Arabic button hidden ************  */}
              {/* {this.rtlLanguages ? " الانجليزية " : "العربية "} 	 */}
            </Button>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default function MyHeader(props) {
  const rtlLanguages = ["ar"];
  function setPageDirection(language) {
    const dir = rtlLanguages.includes(language) ? "rtl" : "ltr";
    document.documentElement.dir = dir;
  }
  const toggleRtl = (lang) => {
    setPageDirection(lang);
  };

  const navigation = useNavigate();
  const goHome = (aRoute) => {
    navigation(aRoute);
  };
  return <Header {...props} navigation={goHome} setPageDirection={toggleRtl} />;
}
