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
import UpdateProduct from "./UpdateProduct";
import Modal from 'react-awesome-modal';


class AdminProduct extends Component {

  constructor(props) {
    super(props); 
  }

  state = {
    updateProduct: false,
    visible: false
  };

   
  openModal= () => {
    this.setState({
        visible : true
    });
}

closeModal =() =>{
    this.setState({
        visible : false
    });
}
 
  render() {
    return (
      <React.Fragment>
        <div className="block2">
          <div className="block2-pic hov-img0">
            <img src={this.props.product.prodImage} alt="IMG-PRODUCT" />
            <Modal visible={this.state.visible} width="300" height="500" onClickAway={() => this.closeModal()}>
                <UpdateProduct product = {this.props.product} 
                              closeModal ={this.closeModal} />
             </Modal> 
             <button  className="block2-btn flex-c-m stext-103 cl2 size-50 bg0 p-lr-15  js-show-modal1" onClick={() => this.openModal()} >
              UPDATE
              </button>
          </div>

          <div className="block2-txt flex-w flex-t p-t-14">
            <div className="block2-txt-child1 flex-col-l ">
              <a
                href="product-detail.html"
                className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
              />
              {this.props.product.productName}
              <span className="stext-105 cl3">{this.props.product.price}</span>
            </div>

            <div className="block2-txt-child2 flex-r p-t-3">
              <a
                href="#"
                className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
              >
                <img
                  className="icon-heart1 dis-block trans-04"
                  src="https://image.flaticon.com/icons/svg/149/149217.svg"
                  alt="ICON"
                />
                <img
                  className="icon-heart2 dis-block trans-04 ab-t-l"
                  src="https://image.flaticon.com/icons/svg/149/149217.svg"
                  alt="ICON"
                />
                <div> 
                </div>
              </a>
            </div>
          </div>
        </div>
       </React.Fragment>
    );
  }
}

export default AdminProduct;
