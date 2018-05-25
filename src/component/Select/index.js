import React, { Component } from "react";
import "./index.css";
import dat from "./CPU_serv.js";

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    //   let dd = './CPU_serv.js'
// console.log(dd);

    // let dat = [
    //   { index: "1", name: "name1" },
    //   { index: "2", name: "name2" },
    //   { index: "3", name: "name3" }
    // ];
    return (
      <div className="select-custom">
        <select name="" id="" multiple size="10">
          {dat.map(function(el) {
            return <option>{el.modelCPU}</option>;
          })}
        </select>
      </div>
    );
  }
}

export default Select;
