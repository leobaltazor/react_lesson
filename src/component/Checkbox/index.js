import React, { Component } from "react";
import "./index.css";

class Checkbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: true
    };
  }

  helperClick(checked) {
    this.setState({
      checked: !this.state.checked
    });
  }

  render() {
    let checked = this.state.checked;
    return (
      <div className="custom-checkbox">
        <span
          onClick={() => this.helperClick(checked)}
          className={checked ? "active" : ""}
        />
        <p onClick={() => this.helperClick(checked)}>
          I agree to the Terms of Use and Privacy Policy
        </p>
      </div>
    );
  }
}

export default Checkbox;
