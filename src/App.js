import React, { Component } from "react";
import "./App.css";
//component
import Checkbox from "./component/Checkbox";
import Input from "./component/Input";
import Select from "./component/Select";
import dat from "./component/Select/CPU_serv.js";

class App extends Component {
  constructor(props) {
    super(props);

    setInterval(() => {
      this.setState({
        currentDate: getDate()
      });
    }, 1000);

    this.state = {
      currentDate: getDate()
    };
  }
  componentWillUnmount() {
    alert("test");
    clearInterval(this.id);
  }

  sendForm(event) {
    event.preventDefault();
    console.log(event);
    console.log(this);
  }
  newMailValue = (val, status) => console.log(val, status);
  newSelectValue = (val) => console.log(val);

  render() {
    const options = {
		// eslint-disable-next-line
      regExp: /^(([^<>()\[\]\/\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      err: "Mail invalid",
      endWrite: this.newMailValue,
      placeholder: "Custom Input"
    };
    const optionSelect = {
	  size: 10,
	  dat: dat,
	  endSelect: this.newSelectValue
    };
    return (
      <div className="App">
        <form onSubmit={this.sendForm.bind(this)}>
          <div>{this.state.currentDate}</div>
          <div>Register</div>
          <input className="app-email" placeholder="Email" type="email" />
          <input className="app-pass" placeholder="Password" type="password" />
          <input
            className="app-pass"
            placeholder="Confirm Password"
            type="password"
          />
          <Select {...optionSelect} />
          <Select {...optionSelect} />
          <Input {...options} />
          <Checkbox
            label="I agree to the Terms of Use and Privacy Policy"
            change={val => console.log("curr state", val)}
          />
          <button type="confirm">Accept</button>
        </form>
      </div>
    );
  }
}

export default App;

function getDate() {
  var data = new Date();
  data = data.toISOString();
  data = data.replace("T", " ");
  data = data.replace(/\..{1,}/, "");
  // data = data.toLocaleTimeString();
  return data;
}
