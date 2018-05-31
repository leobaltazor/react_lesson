import React, { Component } from "react";
import "./App.css";
//component
import { connect } from "react-redux";

import Checkbox from "./component/Checkbox";
import Input from "./component/Input";
import Select from "./component/Select";

class App extends Component {
  constructor(props) {
    super(props);

    setInterval(() => {
      //***********
      let { revers, bgct } = this.state;

      if (revers) {
        bgct = bgct + 4;
        revers = bgct < 240 ? true : false;
      } else {
        bgct = bgct - 4;
        revers = bgct > 4 ? false : true;
      }

      //***********
      this.setState({
        currentDate: getDate(),
        bgct: bgct,
        revers: revers
      });
    }, 1000);

    this.state = {
      currentDate: getDate(),
      bgct: 0,
      revers: true
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
  newSelectValue = val => console.log(val);

  render() {
		console.log(this.props);
		
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
      placeholder: "Select Value",
      endSelect: this.newSelectValue
    };
    let { revers } = this.state;
    let bgct = revers ? 255 : 0;
    let backgroundColor = {
      backgroundColor: `rgb(${bgct}, ${bgct}, ${bgct})`,
      transition: `background-color 60s`
    };
    return (
      <div className="App">
			
        <form onSubmit={this.sendForm.bind(this)} style={backgroundColor}>
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
          {/* <Select {...optionSelect} /> */}
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

const mapStateToProps = state => {
  console.log(state);
  return {
		time: state.time.currentTime,
		key: state.test.name
  };
};

export default connect(mapStateToProps)(App);

function getDate() {
  var data = new Date();
  data = data.toISOString();
  data = data.replace("T", " ");
  data = data.replace(/\..{1,}/, "");
  // data = data.toLocaleTimeString();
  return data;
}
let dat = [
  {
    index: "",
    manufacturerCPU: "INTEL",
    seriesCPU: "Atom",
    modelCPU: "Atom 230 (Silverthorne)",
    priceCPU: "392.04",
    "старая цена": "400",
    ядра: "",
    "Дата выпуска": ""
  },
  {
    index: "2",
    manufacturerCPU: "INTEL",
    seriesCPU: "Atom",
    modelCPU: "Atom 330 (Diamondville)",
    priceCPU: "392.04",
    "старая цена": "400",
    ядра: "",
    "Дата выпуска": ""
  }
];
