import React, { Component } from "react";
import { Navigator } from "react-native";
import { Provider } from "react-redux";
import configureStore from "./app/store/configureStore";
import Root from "./app/root";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      store: configureStore(),
    };
  }

  render() {
    return (
      <Provider store={this.state.store}>
        <Root />
      </Provider>
    );
  }
}
