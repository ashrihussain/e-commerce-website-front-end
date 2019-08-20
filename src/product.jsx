import React, { Component } from "react";
import "./product.css";
import "./css/main.css";
import "./css/util.css";
import Detailed from "./detailed";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink
} from "react-router-dom";
import UpdateButton from "./updateButton";
import Modal from 'react-awesome-modal';

import "./css/template/css/animate.css"; 
import "./css/template/css/bootstrap.css";
import "./css/template/css/magnific-popup.css";
import "./css/template/css/flexslider.css"; 
import "./css/template/css/owl.theme.default.min.css";
import "./css/template/css/bootstrap-datepicker.css";
import "./css/template/fonts/flaticon/font/flaticon.css";
import "./css/template/css/style.css";




class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateProduct: props.updateProduct
    }
  }
  state = {
    updateProduct: false,
    visible: false
  };

  makeVisible = () => {
     this.setState({ visible: true})
  }

  render() {
    return (
      <React.Fragment> 
        	<div class="product-entry">
									<div class="product-img">
                  <img src={this.props.product.prodImage} class="product-img" />
										<div class="cart">
											<p>
 												<span><a  ><i class="icon-eye"></i></a></span> 
												<span><a  ><i class="icon-heart3"></i></a></span>
												<span><a  ><i class="icon-bar-chart"></i> 
                        <Link to={`/home/${this.props.product.pid}`}
                        params={{ pid: this.props.product.pid }}
                            >
                         View
                  </Link></a></span>
											</p>
										</div>
									</div>  
									<div class="desc">
										<h3><a href="product-detail.html">{this.props.product.productName}</a></h3>
										<p class="price"><span>$ {this.props.product.price} </span></p>
									</div>
								</div>
       </React.Fragment>
    );
  }
}

export default Product;
