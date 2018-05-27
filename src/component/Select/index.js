import React, { Component } from "react";
import "./index.css";

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 1,
      value: "Select Value",
      searchTarget: "",
      dat: this.props.dat
    };
  }
  onFocus = e => {
    this.setState({
      size: this.props.size
    });
  };
  blur = e => {
    const { endSelect } = this.props;
    let { value } = this.state;
    this.setState({
      size: 1
    });
    endSelect && endSelect(value);
    this.lostFocus();
  };
  optionInject(el) {
    return el.map(el => {
      return (
        <option key={el.index.toString()} value={el.modelCPU}>
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
      dat: showedOptions,
      searchTarget: searchTarget
    });
  }
  lostFocus() {
    let { value } = this.state;
    this.setState({
      searchTarget: value
    });
  }
  render() {
    let { size, searchTarget, dat } = this.state;
    const { placeholder } = this.props;
    return (
      <div className="select-custom">
        <input
          type="text"
          value={searchTarget}
          onChange={this.handleSearch.bind(this)}
          onFocus={this.onFocus}
          onBlur={this.blur}
          placeholder={placeholder}
        />
        <select
          size={size}
          value={this.state.value}
          onFocus={this.onFocus}
          onBlur={this.blur}
          onChange={this.handleChange.bind(this)}
          onClick={this.handleChange.bind(this)}
        >
          <option value={placeholder} defaultValue disabled>
            {placeholder}
          </option>
          {/* Сюда должны вставлятся опции при Render */}
          {this.optionInject(dat)}
        </select>
      </div>
    );
  }
}

export default Select;
