import React from "react";
import "./home.css";
import { useNavigate } from "react-router";

class FbTemplate extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        <h1>Fb template</h1>
      </div>
    );
  }
}

export default function MyFbTemplate(props) {
  const navigation = useNavigate();
  const goServices = (aRoute) => {
    navigation(aRoute);
  };
  return <FbTemplate {...props} navigation={goServices} />;
}
