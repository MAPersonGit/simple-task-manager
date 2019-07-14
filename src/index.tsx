import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import WebFont from 'webfontloader';
import { App } from "./components/app";


import "./normalize.css";
import "./index.css";

WebFont.load({
  google: {
    families: ['Open Sans:400,700', 'sans-serif']
  }
});



const { store } = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);