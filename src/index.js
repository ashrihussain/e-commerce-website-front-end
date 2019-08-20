import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Cart from "./cart";
import Home from "./home";
import Navbar from "./navbar";
import Checkout from "./Checkout"
import Product from "./product";
import Login from "./login";
import SideBar from "./sidebar";
import Detailed from "./detailed";
import { BrowserRouter as Router, Route, IndexRoute } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import { IndexRouter } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { NavLink, Redirect, Switch } from "react-router-dom";
import Review from "./Review";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
