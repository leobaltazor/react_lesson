import React, { Component } from "react";
import "./index.css";

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 1,
      value: "Select Value",
      dat: this.props.dat
    };
  }
  onFocus = e => {
    this.setState({
	  size: this.props.size
	});
  };
  blur = () => {
    const { endSelect } = this.props;
    let { value } = this.state;
    this.setState({
	  size: 1,
    });
    endSelect && endSelect(value);
  };
  optionInject(el) {
    return el.map(el => {
      return (
        <option
          key={el.index.toString()}
          value={el.index ? el.index : el.model}
        >
          {el.modelCPU}
        </option>
      );
    });
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  //Функция которая должна менять массив
  handleSearch(event) {
    let searchTarget = event.target.value.toLowerCase();
    let { dat } = this.props; //массив берем из props
    let showedOptions = dat.filter(function(el) {
      let serchValue = el.modelCPU.toLowerCase();
      return serchValue.indexOf(searchTarget) !== -1;
    });
    this.setState({
      dat: showedOptions
    });
    console.log(dat);
    console.log(searchTarget);
  }
  da(da) {
    this.setState({
      dat: da
    });
  }
  render() {
    const { dat } = this.props;
    let { size } = this.state;
    let arrData = this.state.dat;
    return (
      <div className="select-custom">
        <input
          type="text"
          onChange={this.handleSearch}
          onFocus={this.onFocus}
          onBlur={this.blur}
        />
        <select
          size={size}
          value={this.state.value}
          onFocus={this.onFocus}
          onBlur={this.blur}
          onChange={this.handleChange.bind(this)}
        >
          <option value="Select Value" defaultValue disabled>
            Select Value
          </option>
          {/* Сюда должны вставлятся опции при Render */}
          {this.optionInject(arrData)}
        </select>
      </div>
    );
  }
}

export default Select;
