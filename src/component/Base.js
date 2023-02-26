
import React from "react";

export default class Base extends React.Component {


  changeState = (e) => {
    var data = {};
    data[e.target.name] = e.target.value;
    this.setState(data);
  }

  changeFormState = (e) => {
    var data = this.state["form"];
    data[e.target.name] = e.target.value;
    this.setState(data);
    this.setState({});

  }
  changeInputError = (name, value) => {
    var data = this.state["inputError"];
    data[name] = value;
    this.setState(data);

  }
  getInputError = (name) => {
    var data = this.state["inputError"];
    return data[name];

  }


}
