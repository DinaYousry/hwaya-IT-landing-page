import React from "react";
import "./home.css";
import { useNavigate } from "react-router";
import { Table, Button } from "react-bootstrap";
import Quote from "./quote";

class Prices extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        <h1>E-Commerce Monthly Membership</h1>

        <div className="price">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th
                  style={{
                    borderLeftColor: "white",
                    borderTop: "hidden",
                    borderRightColor: "white",
                  }}
                ></th>
                <th
                  style={{ borderLeftColor: "white", borderTop: "hidden" }}
                ></th>
                <th>
                  <h2
                    style={{
                      color: "white",
                      backgroundColor: "#1a306f",
                    }}
                  >
                    Most Popular
                  </h2>
                </th>
                <th
                  style={{ borderRightColor: "white", borderTop: "hidden" }}
                ></th>
              </tr>
              <tr>
                <th style={{ borderLeftColor: "white", borderTop: "hidden" }}>
                  <h1> </h1>
                </th>
                <th>
                  {" "}
                  <h1>Economic</h1>
                </th>
                <th>
                  {" "}
                  <h1>Professional</h1>
                </th>
                <th>
                  {" "}
                  <h1>Ultimate</h1>
                </th>
              </tr>
              <tr>
                <th style={{ borderLeftColor: "white", borderTop: "hidden" }}>
                  <h1> </h1>
                </th>
                <th>
                  <h2 style={{ color: "red" }}>
                    499<span style={{ color: "#1a306f" }}>EGP</span>
                  </h2>
                </th>
                <th>
                  <h2 style={{ color: "red" }}>
                    799<span style={{ color: "#1a306f" }}>EGP</span>
                  </h2>
                </th>
                <th>
                  <h2 style={{ color: "red" }}>
                    1999<span style={{ color: "#1a306f" }}>EGP</span>
                  </h2>
                </th>
              </tr>
              <tr>
                <td
                  className="feature"
                  style={{ borderLeftColor: "white", borderTop: "hidden" }}
                >
                  {" "}
                </td>
                <td>
                  {" "}
                  <Button
                    style={{ backgroundColor: "#1A306F" }}
                    onClick={() => this.props.navigation("/quote")}
                  >
                    Select
                  </Button>
                </td>
                <td>
                  {" "}
                  <Button
                    style={{ backgroundColor: "#1A306F" }}
                    onClick={() => this.props.navigation("/quote")}
                  >
                    Select
                  </Button>
                </td>
                <td>
                  {" "}
                  <Button
                    style={{ backgroundColor: "#1A306F" }}
                    onClick={() => this.props.navigation("/quote")}
                  >
                    Select
                  </Button>
                </td>
              </tr>
            </thead>

            {/*  ******************************Sales Channels*************************   */}
            <thead>
              <tr>
                <th colSpan={4} className="theady">
                  {" "}
                  Sales Channels{" "}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="feature">Online Store</td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
              </tr>
              <tr>
                <td className="feature">
                  Free Mobile App (progressive web app)
                </td>
                <td className="check" style={{ color: "red" }}>
                  X
                </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
              </tr>

              <tr>
                <td className="feature">Free Android Mobile App</td>
                <td className="check" style={{ color: "red" }}>
                  X
                </td>
                <td className="check">Extra fees</td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
              </tr>
              <tr>
                <td className="feature"> Sell On Facebook and Insagram </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
              </tr>
            </tbody>

            {/*  ****************************** Main Features *************************   */}
            <thead>
              <tr>
                <th colSpan={4} className="theady">
                  {" "}
                  Main Features{" "}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="feature">Products</td>
                <td className="check">Unlimited</td>
                <td className="check">Unlimited</td>
                <td className="check">Unlimited</td>
              </tr>
              <tr>
                <td className="feature">SSL protection</td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
              </tr>
              <tr>
                <td className="feature">Link your own domain name</td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
              </tr>
              <tr>
                <td className="feature">Multi-Language </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
              </tr>
              <tr>
                <td className="feature"> Payment & Shipping Integrations </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
              </tr>
              <tr>
                <td className="feature"> Accept Cash on delivery payments </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
              </tr>
              <tr>
                <td className="feature"> Stock management </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
              </tr>

              <tr>
                <td className="feature"> Free Domain Name and hosting</td>
                <td className="check">Extra fees</td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
              </tr>
              <tr>
                <td className="feature"> Custom Order Workflow </td>
                <td className="check" style={{ color: "red" }}>
                  X
                </td>
                <td className="check" style={{ color: "red" }}>
                  X
                </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
              </tr>
              <tr>
                <td className="feature"> Order History Tracking </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
              </tr>

              <tr>
                <td className="feature"> Product return life cycle </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
              </tr>

              <tr>
                <td className="feature"> Excel Export & Import </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
              </tr>
            </tbody>

            {/*  ****************************** Advanced Features *************************   */}
            <thead>
              <tr>
                <th colSpan={4} className="theady">
                  {" "}
                  Advanced Features{" "}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="feature"> Responsive Design </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
              </tr>
              <tr>
                <td className="feature"> Advanced Template Editor </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
              </tr>

              <tr>
                <td className="feature"> Blogs </td>
                <td className="check" style={{ color: "red" }}>
                  X
                </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
              </tr>
              <tr>
                <td className="feature"> Footer Web Pages </td>
                <td className="check" style={{ color: "red" }}>
                  X
                </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
              </tr>
              <tr>
                <td className="feature">Premium Footer editor </td>
                <td className="check" style={{ color: "red" }}>
                  X
                </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
              </tr>
              <tr>
                <td className="feature"> Advanced Product Filters </td>
                <td className="check" style={{ color: "red" }}>
                  X
                </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
              </tr>
            </tbody>

            {/*  ******************************  Marketing tools  *************************   */}
            <thead>
              <tr>
                <th colSpan={4} className="theady">
                  {" "}
                  Marketing tools{" "}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="feature"> Discount Coupons </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
              </tr>
              <tr>
                <td className="feature"> Gift Vouchers </td>
                <td className="check" style={{ color: "red" }}>
                  X
                </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
              </tr>

              <tr>
                <td className="feature"> Customize Notification Emails </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
              </tr>

              <tr>
                <td className="feature"> Recently added products </td>
                <td className="check" style={{ color: "red" }}>
                  X
                </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
              </tr>
              <tr>
                <td className="feature"> Related products section </td>
                <td className="check" style={{ color: "red" }}>
                  X
                </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
              </tr>
              <tr>
                <td className="feature"> Curated collections section </td>
                <td className="check" style={{ color: "red" }}>
                  X
                </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
              </tr>
              <tr>
                <td className="feature">
                  {" "}
                  Product Rating & Customers Reviews{" "}
                </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
              </tr>
              <tr>
                <td className="feature"> User Wish list </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
              </tr>
              <tr>
                <td className="feature"> Easy access user details </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
              </tr>
            </tbody>

            {/*  ******************************  Services  *************************   */}
            <thead>
              <tr>
                <th colSpan={4} className="theady">
                  {" "}
                  Services{" "}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="feature">
                  {" "}
                  Personalized Marketing Consultations{" "}
                </td>
                <td className="check" style={{ color: "red" }}>
                  X
                </td>
                <td className="check" style={{ color: "red" }}>
                  X
                </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
              </tr>
              <tr>
                <td className="feature"> Marketing Campaigns Management </td>
                <td className="check">Extra fees </td>
                <td className="check">Discounted fees </td>
                <td className="check">Discounted fees </td>
              </tr>
              <tr>
                <td className="feature"> Social Media Management </td>
                <td className="check">Extra fees </td>
                <td className="check">Discounted fees</td>
                <td className="check">Discounted fees</td>
              </tr>
            </tbody>

            {/*  ******************************  Analytics  *************************   */}

            {/*  ******************************  Team  *************************   */}
            <thead>
              <tr>
                <th colSpan={4} className="theady">
                  {" "}
                  Team{" "}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="feature"> Dashboard admin accounts </td>
                <td className="check">3 </td>
                <td className="check">10</td>
                <td className="check">Unlimited</td>
              </tr>
            </tbody>

            {/*  ******************************  Support  *************************   */}
            <thead>
              <tr>
                <th colSpan={4} className="theady">
                  {" "}
                  Support{" "}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="feature"> Social login </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
                <td className="check" style={{ color: "green" }}>
                  {" "}
                  &#10003;
                </td>
              </tr>
              <tr>
                <td className="feature"> WhatsApp Chat </td>
                <td className="check"> Extra fees</td>
                <td className="check" style={{ color: "green" }}>
                  &#10003;
                </td>
                <td className="check" style={{ color: "green" }}>
                  {" "}
                  &#10003;
                </td>
              </tr>

              <tr>
                <td className="feature"> Sign-in to store </td>
                <td className="check" style={{ color: "green" }}>
                  {" "}
                  &#10003;
                </td>
                <td className="check" style={{ color: "green" }}>
                  {" "}
                  &#10003;
                </td>
                <td className="check" style={{ color: "green" }}>
                  {" "}
                  &#10003;
                </td>
              </tr>
              <tr>
                <td
                  className="feature"
                  style={{ borderLeftColor: "white", borderBottom: "hidden" }}
                >
                  {" "}
                </td>
                <td>
                  {" "}
                  <Button
                    style={{ backgroundColor: "#1A306F" }}
                    onClick={() => this.props.navigation("/quote")}
                  >
                    Select
                  </Button>
                </td>
                <td>
                  {" "}
                  <Button
                    style={{ backgroundColor: "#1A306F" }}
                    onClick={() => this.props.navigation("/quote")}
                  >
                    Select
                  </Button>
                </td>
                <td>
                  {" "}
                  <Button
                    style={{ backgroundColor: "#1A306F" }}
                    onClick={() => this.props.navigation("/quote")}
                  >
                    Select
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <br />
        <hr />
        <h1>Buy your Customezed Ecommerce Product</h1>
        <h2 style={{ paddingRight: "3%", paddingLeft: "3%" }}>
          (E-Commerce, website, Mobile app, System)
        </h2>
        <div style={{ paddingRight: "10%", paddingLeft: "10%" }}>
          <Quote />
        </div>
      </div>
    );
  }
}

export default function MyPrices(props) {
  const navigation = useNavigate();
  const goServices = (aRoute) => {
    navigation(aRoute);
  };
  return <Prices {...props} navigation={goServices} />;
}
