import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/index.css";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/app/store";
import { Provider } from "react-redux";
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <BrowserRouter>
      <Provider store={store}>
            <App />
      </Provider>
  </BrowserRouter>
);
