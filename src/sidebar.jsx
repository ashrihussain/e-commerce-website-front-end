import React, { Component } from "react";
import "./css/sidebar.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Cart from "./cart";
import Home from "./home";
import Login from "./login";
import UserProfile from "./UserProfile";
import SearchBar from "./SearchBar";
import Cookies from 'universal-cookie';


class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username : ""
    };
  }
 
  componentDidMount() {
    const cookie = new Cookies();
    this.state.username = cookie.get("username");
    
  }

  componentDidUpdate() {
    const cookie = new Cookies();
    this.state.username = cookie.get("username");
    
  }

   
  logout = () => { 

    const cookie = new Cookies();
    cookie.set('username', "", { path: '/' });

  }

  render() {
    return ( 
      <nav class="colorlib-nav" role="navigation">
			<div class="top-menu">
				<div class="container">
					<div class="row">
						<div class="col-xs-2">
						
						</div>
						<div class="col-xs-10 text-right menu-1">
							<ul>
								<li><a >< Link to="/home">Home</Link></a></li>
                <li><a><i class="icon-shopping-cart"></i><Link to="/cart">Shopping Cart</Link></a></li>
                

			        	<li><a> <Link to="/orders">Purchase History</Link></a></li>
								<li><a><Link to="/profile">Account Settings</Link></a></li>
		
								<li><a>{
                this.state.username == "" ? 
              <li>
              <Link to="/login">Login</Link>
              </li> 
              :
              <li>
              <Link
                to="/login"
                onClick={this.logout}
              >
                Logout
              </Link>
              </li>
              }</a></li>
								
							</ul>
						</div>
					</div>
				</div>
			</div>
		</nav>
    );
  }
}

export default SideBar;
