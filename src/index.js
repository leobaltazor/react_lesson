import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

let initState = {
  currentTime: new Date().toISOString()
};
function time(state = initState, action) {
  if (action.type === "NEW_TIME") {
    return {
      ...state,
      currentTime: action.newTime
    };
  }
  return state;
}
let initState2 = {
  name: Math.random()
};
function test(state = initState2, action) {
  if (action.type === "NAME") {
    return {
      ...state,
      name: action.name
    };
  }
  return state;
}

const appStore = combineReducers({
  time,
  test
});
const store = createStore(appStore);

window.addEventListener("click", function () {
	
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
