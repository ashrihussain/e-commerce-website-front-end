import React, { Component } from "react";
import "./navbar";

class NavBar extends Component {
  state = {
    cartImage:
      "http://icons.iconarchive.com/icons/graphicloads/colorful-long-shadow/256/Cart-icon.png",
    defaultProfileImage: "https://png.pngtree.com/svg/20161113/man_1074208.png",
    emptyCartIcon: "http://cdn.onlinewebfonts.com/svg/img_2214.png"
  };
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample09"
          aria-controls="navbarsExample09"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample09">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="https://example.com"
                id="dropdown09"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdown09">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-md-0">
            <input
              className="form-control"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <div className="icon">
            <img
              src={this.state.cartImage}
              alt="none"
              width="100%"
              height="100%"
            />
            {/* <span>{this.updateCart()}</span> */}
          </div>
          <div className="icon">
            <img
              src={this.state.defaultProfileImage}
              alt="none"
              width="100%"
              height="100%"
            />
            {/* <span>{this.updateNotifications()}</span> */}
          </div>
        </div>
      </nav>
    );
  }
  updateCart() {
    const { cartItems } = this.props.cartItems;
    return cartItems === 0 ? (
      <span className="badge">0</span>
    ) : (
      <span className="badge">{this.props.cartItems}</span>
    );
  }
  updateNotifications() {
    const { notifications } = this.state;
    return notifications === 0 ? (
      <span className="badge">0</span>
    ) : (
      <span className="badgeRed">{notifications}</span>
    );
  }
}

export default NavBar;
