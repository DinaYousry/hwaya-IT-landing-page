import React from "react";
import "./home.css";
import { useNavigate } from "react-router";

class EcommerceTemplate extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        <h1>Ecommerce template</h1>
      </div>
    );
  }
}

export default function MyEcommerceTemplate(props) {
  const navigation = useNavigate();
  const goServices = (aRoute) => {
    navigation(aRoute);
  };
  return <EcommerceTemplate {...props} navigation={goServices} />;
}
