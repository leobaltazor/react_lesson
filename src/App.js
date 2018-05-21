import React, { Component } from "react";
import "./App.css";
//component
import Checkbox from "./component/Checkbox";


class App extends Component {
  constructor(props) {
		super(props);

		setInterval(() => {
			this.setState({
				currentDate:getDate()
			})
		}, 1000)

		this.state = {
			currentDate: getDate()
		};

	}
	componentWillUnmount(){
		alert("test");
		clearInterval(this.id);
	}

  sendForm(event) {
    event.preventDefault();
    console.log(event);
		console.log(this);

  }

  render() {

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
					<Checkbox />
          <button type="confirm">Accept</button>
        </form>
      </div>
    );
  }
}

export default App;


function getDate() {
	var data = new Date();
	data = data.toISOString()
	data = data.replace("T", " ");
	data = data.replace(/\..{1,}/, "");
	// data = data.toLocaleTimeString();
	return data
}