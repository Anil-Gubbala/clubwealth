import React from "react";
import ReactDOM from "react-dom";

import MainRouter from "./routes/MainRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/style/main.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <MainRouter />
  </React.StrictMode>,
  rootElement
);
