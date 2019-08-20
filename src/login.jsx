import React, { Component } from "react";
import "./login.css";
import Home from "./home.jsx";
import Cookies from 'universal-cookie';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";


class Login extends Component {
  validateAccount = () => {};
 
  
  state = {
    users: [],
    user: "",
    hasAccount: false,
    isLoggedIn: false
  };


  render() {
    return (
      <div className="mainlogs">
        <div >

        <div class="ImagesX">
        
          <div class="loginicon"> <img src="http://www.clker.com/cliparts/o/B/M/C/K/6/queen-crown-green-hi.png" id="icon" alt="User Icon" /></div>
        
        </div>
 

          <form onSubmit={this.props.checkLogin}>  
            <div className="inputs">
              <input
                type="text"
                className=""
                placeholder="Enter username"
                name="username"
              />
            </div>
            <div className="inputs">
              <input
                type="text"
                className=""
                placeholder="Enter password"
                name="password"
              />
            </div>
            <div className="inputsbuton">
              <input type="submit"/>
            </div>
            <div className="inputsbutonlink"> <Link to ="/signup" > <a>Click here to create your account! </a> </Link> </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
