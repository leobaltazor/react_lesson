import React, { Component } from "react";
import "./index.css";

class Checkbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: true
    };
    console.log(props);
  }

  helperClick(checked) {
    this.setState({ checked });
    this.props.change(checked);
  }

  render() {
    let { checked } = this.state;
    const { label } = this.props;
    return (
      <div className="custom-checkbox">
        <span
          onClick={() => this.helperClick(!checked)}
          className={checked ? "active" : ""}
        />
        <p onClick={() => this.helperClick(!checked)}>{label}</p>
      </div>
    );
  }
}

export default Checkbox;
