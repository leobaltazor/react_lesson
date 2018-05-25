import React, { Component } from "react";
import "./index.css";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      validateStatus: true
    };
  }
  blur = () => {
    const { text } = this.state;
    let { validateStatus } = this.state;
    const { regExp, endWrite } = this.props;
    if (this.props.regExp) {
      validateStatus = regExp.test(text);
      this.setState({ validateStatus });
    }
    endWrite && endWrite(text, validateStatus);
  };
  helperInput = e => {
    this.setState({ text: e.target.value });
    // console.log(e.target.value);
  };
  render() {
    const { placeholder, err } = this.props;
    let { text, validateStatus } = this.state;
    return (
      <div className="input-custom">
        <input
          type="text"
          placeholder={placeholder}
          onInput={this.helperInput}
          onBlur={this.blur}
        />
        {text && !validateStatus ? <p>{err}</p> : ""}
      </div>
    );
  }
}

export default Input;
